package fitrack.user.service;

import fitrack.user.entity.User;
import fitrack.user.exception.OTPExpiredException;
import fitrack.user.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
@AllArgsConstructor
public class UserService implements IUserService {

    @Autowired
    private UserRepository repository;
    @Autowired
    private EmailService emailService;
    @Override
    public List<User> retrieveAllUsers() {
        return repository.findAll();
    }

    @Override
    public User addUser(User u) {
        return repository.save(u);
    }

    @Override
    public User updateUser(User u) {
        return repository.save(u);
    }

    @Override
    public User retrieveUser(String idUser) {
        return repository.findById(idUser).orElseThrow(() -> new RuntimeException("User not found with id: " + idUser));    }

    @Override
    public void removeUser(String idUser) {
        repository.deleteById(idUser);
    }

    @Override
    public List<User> addUsers(List<User> Users) {
        return repository.saveAll(Users);
    }



    public void sendForgotPasswordEmail(String email) {
        User user = repository.findByEmail(email);
        if (user == null) {
            throw new OTPExpiredException("User with email " + email + " not found");
        }

        String otp = generateOTP();
        user.setOtp(otp);
        user.setOtpExpiry(LocalDateTime.now().plusMinutes(5)); // Set OTP expiry time

        repository.save(user);

        emailService.sendOtpEmail(user.getUsername(), otp);
    }

    public String generateOTP() {
        // Generate a random 6-digit OTP
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000);
        return String.valueOf(otp);
    }

    public void verifyOTP(String email, String otp) {
        User user = repository.findByEmail(email);
        if (user == null) {
            throw new OTPExpiredException("User with email " + email + " not found");
        }

        if (!user.getOtp().equals(otp)) {
            throw new OTPExpiredException("Invalid OTP");
        }

        if (user.getOtpExpiry() == null || LocalDateTime.now().isAfter(user.getOtpExpiry())) {
            throw new OTPExpiredException("OTP expired");
        }

    }

    public void resetPassword(String NewPassword, String email) {
        User user = repository.findByEmail(email);
        if (user == null) {
            throw new OTPExpiredException("User with email " + email + " not found");
        }
        String encryptedPassword = new BCryptPasswordEncoder().encode(NewPassword);
        // Update user's password
        user.setPassword(encryptedPassword);
        repository.save(user);
    }
    public void updateLastLogin(String email) {
        User user = repository.findByEmail(email);
        if (user == null) {
            throw new RuntimeException("User with email " + email + " not found");
        }
        user.setLastLogin(LocalDateTime.ofInstant(new java.util.Date().toInstant(), ZoneId.systemDefault()));
        repository.save(user);
    }

    public void updateInactiveStatus(String email) {
        User user = repository.findByEmail(email);
        if (user == null) {
            throw new RuntimeException("User with email " + email + " not found");
        }
        if (user.isInactive()) {
            user.setInactive(false);
            repository.save(user);
        }

    }
    @Scheduled(cron = "0 * * * * ?") // Runs every 60 seconds
    public void logInactiveUsers() {
        LocalDateTime date = LocalDate.now().minusDays(30).atStartOfDay();
        List<User> inactiveUsers = repository.findInactiveUsers(date);
        if (inactiveUsers.isEmpty()) {
            System.out.println("No inactive users found.");
        } else {
            System.out.println("Inactive users (not logged in for 30+ days):");
            inactiveUsers.forEach(user -> {
                if (!user.isInactive()) {
                    user.setInactive(true);
                    System.out.println("User ID: " + user.getId() + ", Email: " + user.getEmail());
                    emailService.sendInactivityWarningEmail(user.getEmail());
                    repository.save(user);
                }
            });
        }
    }

    @Scheduled(cron = "0 * * * * ?") // Runs every 60 seconds
    public void clearExpiredOTPs() {
        List<User> users = repository.findAll();
        users.forEach(user -> {
            if (user.getOtpExpiry() != null && LocalDateTime.now().isAfter(user.getOtpExpiry())) {
                user.setOtp(null);
                user.setOtpExpiry(null);
                repository.save(user);
            }
        });
    }

    public List<User> findAllUsersByBoardId(String boardId) {
        List<User> users = repository.findUsersByBoardId(boardId);
        if (users == null || users.isEmpty()) {
            throw new RuntimeException("No users found for board ID: " + boardId);
        }
        return users;
    }


    public List<User> findUserByBoardId(String boardId) {
        return repository.findUsersByBoardId(boardId);
    }


    public String findBoardIdByUserId(String userId) {
        return repository.findBoardIdByUserId(userId);
    }
    @Override
    public User getUserById(String id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("❌ User not found for ID: " + id));
    }


}
