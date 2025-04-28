package fitrack.user.controller;

import fitrack.user.client.FacilityClient;
import fitrack.user.entity.Order;
import fitrack.user.entity.User;
import fitrack.user.repository.OrderRepository;
import fitrack.user.repository.UserRepository;
import fitrack.user.service.CloudinaryService;
import fitrack.user.service.IUserService;
import fitrack.user.service.UserService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.*;
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
    @Autowired
    public OrderRepository orderRepository;
    @Autowired
    public FacilityClient facilityClient;


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

    @PutMapping(value = "/update-user", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> updateUser(@RequestPart("data") User u, @RequestPart(value = "multipartFile", required = false) MultipartFile multipartFile) {
        try {
            System.out.println("Received User: " + u.getUsername());

            // Check if the user exists
            Optional<User> existingUserOptional = userRepository.findById(u.getId());
            if (existingUserOptional.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
            }

            User existingUser = existingUserOptional.get();

            // Process the file if it is provided
            if (multipartFile != null && !multipartFile.isEmpty()) {
                // Delete the past image if it exists
                if (existingUser.getImageId() != null) {
                    cloudinaryService.delete(existingUser.getImageId());
                }

                // Upload the new image
                BufferedImage bi = ImageIO.read(multipartFile.getInputStream());
                if (bi == null) {
                    return new ResponseEntity<>("Not a valid image!", HttpStatus.BAD_REQUEST);
                }
                Map result = cloudinaryService.upload(multipartFile);

                // Update image details
                existingUser.setImageUrl((String) result.get("url"));
                existingUser.setImageId((String) result.get("public_id"));
            }

            // Update user details
            existingUser.setName(u.getName());
            existingUser.setEmail(u.getEmail());
            existingUser.setNumber(u.getNumber());
            existingUser.setPassword(u.getPassword());
            existingUser.setRole(u.getRole());
            existingUser.setInactive(u.isInactive());

            userService.updateUser(existingUser);

            return ResponseEntity.ok(Map.of("message", "User updated successfully"));
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred: " + ex.getMessage());
        }
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
    public void removeUser(@PathVariable String idUser) throws IOException {
        System.out.println("Received User: " + idUser);

        // Retrieve the user to get the email
        Optional<User> userOptional = userRepository.findById(idUser);
        if (userOptional.isPresent()) {
            User user = userOptional.get();

            // Delete the subscriptions of the user by email using FacilityClient
            facilityClient.deleteSubscriptionsByEmail(user.getEmail());

            // Delete the image from Cloudinary if it exists
            if (user.getImageId() != null) {
                cloudinaryService.delete(user.getImageId());
            }
        }

        // Remove the user
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
    @GetMapping("/last-user-order/{userId}")
    public ResponseEntity<?> getLastUserOrderAndUpdateToPaid(@PathVariable String userId) {
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }

        User user = userOptional.get();
        Order lastOrder = orderRepository.findTopByUserOrderByIdDesc(user);

        if (lastOrder == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No orders found for this user");
        }

        // Update the order status to "Paid"
        lastOrder.setStatus("PAID");
        orderRepository.save(lastOrder);

        // Add the order amount to the user's coins
        user.setCoins(user.getCoins() + (int) lastOrder.getPrice()*10);
        userRepository.save(user);

        return ResponseEntity.ok(lastOrder);
    }
    @GetMapping("/user-orders/{userId}")
    public ResponseEntity<?> getUserOrders(@PathVariable String userId) {
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }

        User user = userOptional.get();
        List<Order> orders = orderRepository.findByUser(user);

        if (orders.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No orders found for this user");
        }

        return ResponseEntity.ok(orders);
    }
    @GetMapping("/retrieve-all-trainers")
    public ResponseEntity<List<User>> getAllTrainers() {
        List<User> trainers = new ArrayList<>();
        for (User user : userRepository.findAll()) {
            if ("TRAINER".equalsIgnoreCase(String.valueOf(user.getRole()))) {
                trainers.add(user);
            }
        }
        return ResponseEntity.ok(trainers);
    }
}
