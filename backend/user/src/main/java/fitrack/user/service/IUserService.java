package fitrack.user.service;

import fitrack.user.entity.User;

import java.util.List;

public interface IUserService {
    List<User> retrieveAllUsers();

    User addUser(User u);

    User updateUser(User u);

    User retrieveUser(String idUser);

    void removeUser(String idUser);

    List<User> addUsers (List<User> Users);
}
