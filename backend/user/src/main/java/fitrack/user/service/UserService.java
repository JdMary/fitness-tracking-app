package fitrack.user.service;

import fitrack.user.entity.User;
import fitrack.user.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService implements IUserService {
    @Autowired
    private UserRepository repository;

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


}
