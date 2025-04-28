package fitrack.user.controller;

import fitrack.user.entity.User;
import fitrack.user.repository.UserRepository;
import fitrack.user.service.CloudinaryService;
import fitrack.user.service.IUserService;
import fitrack.user.service.UserService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    @Autowired
    public UserRepository userRepository;
    @Autowired
    public IUserService userService;
    @Autowired
    CloudinaryService cloudinaryService;

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
    public ResponseEntity<User> retrieveUserByEmail(@PathVariable String email) {
        User user = userRepository.findByEmail(email);
        if (user== null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(user);
    }

    @GetMapping("/retrieve-user-image/{email}")
    public ResponseEntity<String> retrieveUserImageByEmail(@PathVariable String email) {
        User user = userRepository.findByEmail(email);
        if (user== null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(user.getImageUrl());
    }
    @DeleteMapping("/remove-user/{idUser}")
    public void removeUser(@PathVariable String idUser){
        System.out.println("Received User: " + idUser);
        userService.removeUser(idUser);
    }


@GetMapping("/user-activity-stats")
    public ResponseEntity<?> getUserStatistics() {
        long activeUsers = userRepository.countByInactive(false);
        long inactiveUsers = userRepository.countByInactive(true);

        return ResponseEntity.ok(Map.of(
            "activeUsers", activeUsers,
            "inactiveUsers", inactiveUsers
        ));
    }

    @GetMapping("/user-signup-stats")
    public ResponseEntity<?> getUserSignupStats() {
        String[] months = {"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"};
        Map<String, Long> signupStats = new LinkedHashMap<>();

        // Iterate through each month and call the repository function
        for (String month : months) {
            List<Object[]> stats = userRepository.countUsersBySignupMonth(month);
            Long count = stats.stream()
                    .map(row -> row[1] != null ? (Long) row[1] : 0L) // Extract count
                    .reduce(0L, Long::sum); // Sum up counts for the month
            signupStats.put(month, count);
        }

        return ResponseEntity.ok(signupStats);
    }


}
