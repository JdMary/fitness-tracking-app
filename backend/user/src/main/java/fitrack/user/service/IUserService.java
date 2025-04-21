package fitrack.user.service;

import fitrack.user.entity.User;
import fitrack.user.payload.ResetPasswordRequest;

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

    public User findUserByBoardId(String boardId);

    public String findBoardIdByUserId(String userId);
}
