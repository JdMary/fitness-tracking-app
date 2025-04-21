package fitrack.buddy.service;

import fitrack.buddy.client.AuthClient;
import fitrack.buddy.entity.BuddyMatch;
import fitrack.buddy.entity.BuddyRequest;
import fitrack.buddy.entity.Status;
import fitrack.buddy.repository.BuddyMatchRepository;
import fitrack.buddy.repository.BuddyRequestRepository;
import lombok.AllArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@Service
@AllArgsConstructor
public class BuddyMatchService implements IBuddyMatchService{

    private final EmailService emailService;
    private AuthClient authClient;
    private BuddyMatchRepository repository;
    private BuddyRequestRepository requestRepository;
    private SmsService smsService;

    private static Long matchId;

    @Override
    public BuddyMatch getBuddyMatchById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public List<BuddyMatch> retrieveBuddyMatches() {
        return repository.findAll();
    }

    @Override
    public BuddyMatch addBuddyMatch(BuddyMatch buddyMatch) {
        return repository.save(buddyMatch);
    }

    @Override
    public List<BuddyMatch> findAllByUserEmail(String token) {
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        return repository.findAllByEmail(username);
    }

    @Override
    public void removeBuddyMatch(Long id) {
        repository.deleteById(id);
    }



    @Scheduled(fixedRate = 3600000)
    @Override
    public void deleteExpired() {
        List<BuddyMatch> b = repository.findAll();
        b.forEach(buddyMatch -> {
            if (buddyMatch.getWorkoutStartTime().isBefore(LocalDateTime.now())) {
                repository.deleteById(buddyMatch.getId());
            }
        });
    }

    @Override
    public void setReminder(Long id, String token) {
        BuddyMatch buddyMatch = repository.findById(id).get();
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        if (Objects.equals(buddyMatch.getEmail1(), username)) {
            buddyMatch.setReminder1(!buddyMatch.isReminder1());
        } else{
            buddyMatch.setReminder2(!buddyMatch.isReminder2());
        }
        repository.save(buddyMatch);
    }
    @Override
    public void unsetReminder(Long id, String token) {
        BuddyMatch buddyMatch = repository.findById(id).get();
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        if (Objects.equals(buddyMatch.getEmail1(), username)) {
            buddyMatch.setReminder1(false);
        } else{
            buddyMatch.setReminder2(false);
        }
        repository.save(buddyMatch);
    }

    @Override
    public String getEmail(String token) {
        return String.valueOf(authClient.extractUsername(token).getBody());
    }

    @Scheduled(fixedRate = 60000)
    @Override
    public void checkReminders() {
        List<BuddyMatch> matches = repository.findAll();
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime oneHourFromNow = now.plusHours(1);

        matches.forEach(buddyMatch -> {
            LocalDateTime workoutTime = buddyMatch.getWorkoutStartTime();
            boolean updated = false;
            if (buddyMatch.isReminder1() && workoutTime.isAfter(now) && workoutTime.isBefore(oneHourFromNow)) {
                //smsService.sendSms("+21628323353", "Hey "+ buddyMatch.getEmail1() +"your Workout is starting in 1 hour");                buddyMatch.setReminder1(false);
                updated = true;
            }
            if (buddyMatch.isReminder2() && workoutTime.isAfter(now) && workoutTime.isBefore(oneHourFromNow)) {
                //smsService.sendSms("+21628323353", "Hey "+ buddyMatch.getEmail1() +"your Workout is starting in 1 hour");
                buddyMatch.setReminder2(false);
                updated = true;
            }
            if (updated) {
                repository.save(buddyMatch);
            }

        });
    }
}
