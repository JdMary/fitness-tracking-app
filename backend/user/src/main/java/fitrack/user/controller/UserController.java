package fitrack.user.controller;

import fitrack.user.entity.User;
import fitrack.user.repository.UserRepository;
import fitrack.user.service.IUserService;
import fitrack.user.service.UserService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    @Autowired
    public UserRepository userRepository;
    @Autowired
    public IUserService userService;

//    UserController(UserRepository userRepository, UserService userService) {
//        this.userRepository = userRepository;
//        this.userService = userService;
//    }
    @GetMapping("/test")
    public String test() {
        return "Service USER fonctionne ";
    }
    @GetMapping("/retrieve-all-users")
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userService.retrieveAllUsers());
    }

    @PostMapping("/add-user")
    public void addUser(@RequestBody User u){
        System.out.println("Received User: " + u.getUsername());
        userService.addUser(u);
    }

    @PutMapping("/update-user")
    public void updateUser(@RequestBody User u){
        System.out.println("Received User: " + u.getUsername());
        userService.updateUser(u);
    }

    @GetMapping("/retrieve-user-id/{idUser}")
    public ResponseEntity<?> retrieveUserbyID(@PathVariable String idUser) {
        User user = userService.retrieveUser(idUser);
        return ResponseEntity.ok(user);
    }

    @GetMapping("/retrieve-user-email/{email}")
    public ResponseEntity<?> retrieveUserByEmail(@PathVariable String email) {
        Optional<User> userOptional = userRepository.findByEmail(email);

        if (userOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found with email: " + email);
        }

        return ResponseEntity.ok(userOptional.get());
    }

    @DeleteMapping("/remove-user/{idUser}")
    public void removeUser(@PathVariable String idUser){
        System.out.println("Received User: " + idUser);
        userService.removeUser(idUser);
    }

}
