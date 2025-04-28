package fitrack.user.service;

import fitrack.user.entity.User;
import fitrack.user.payload.ResetPasswordRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface IUserService {
    List<User> retrieveAllUsers();

    User addUser(User u);

    User updateUser(User u);

    User retrieveUser(String idUser);

    void removeUser(String idUser);

    List<User> addUsers (List<User> Users);
    void sendForgotPasswordEmail(String email);
    String generateOTP();
    void verifyOTP(String email, String otp);
    void resetPassword(String NewPassword, String email);
    void updateLastLogin(String email);
    void updateInactiveStatus(String email);
    List<User> findAllUsersByBoardId(String boardId);

    public List<User> findUserByBoardId(String boardId);

    public String findBoardIdByUserId(String userId);

    public User getUserById(String id);


}
