package fitrack.user.controller;

import fitrack.user.entity.dtos.AuthenticationDTO;
import fitrack.user.entity.dtos.LoginResponseDTO;
import fitrack.user.entity.dtos.RegisterDTO;
import fitrack.user.entity.User;
import fitrack.user.exception.OTPExpiredException;
import fitrack.user.payload.ForgotPasswordRequest;
import fitrack.user.payload.ResetPasswordRequest;
import fitrack.user.security.TokenService;
import fitrack.user.repository.UserRepository;
import fitrack.user.service.CloudinaryService;
import fitrack.user.service.IUserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api/v1/auth")
public class AuthenticationController {
    @Autowired

    AuthenticationManager authenticationManager;
    UserRepository userRepository;
    @Autowired
    TokenService tokenService;
    private final IUserService userService;
    @Autowired
    CloudinaryService cloudinaryService;

    public AuthenticationController(AuthenticationManager authenticationManager, UserRepository userRepository, TokenService tokenService, IUserService userService) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.tokenService = tokenService;
        this.userService = userService;
    }
    @PostMapping(value = "/login", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> login(@RequestBody AuthenticationDTO data) {
        System.out.println("Attempting to log in with email: " + data.email());
        try {
            var credentials = new UsernamePasswordAuthenticationToken(data.email(), data.password());
            var auth = this.authenticationManager.authenticate(credentials);

            var token = tokenService.generateToken((User) auth.getPrincipal());

            userService.updateLastLogin(data.email());
            userService.updateInactiveStatus(data.email());

            System.out.println("Login successful, returning token");
            return ResponseEntity.ok(new LoginResponseDTO(token));
        } catch (Exception e) {
            System.out.println("Login failed: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Login failed: " + e.getMessage());
        }
    }

    @PostMapping(value = "/register", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity register(@RequestPart("data") RegisterDTO data, @RequestPart("multipartFile") MultipartFile multipartFile) throws IOException {
        System.out.println("Registering user");
        if (this.userRepository.findByEmail(data.email()) != null) return ResponseEntity.badRequest().build();
        BufferedImage bi = ImageIO.read(multipartFile.getInputStream());
        if (bi == null) {
            return new ResponseEntity<>("Not a valid image!", HttpStatus.BAD_REQUEST);
        }
        Map result = cloudinaryService.upload(multipartFile);
        String encryptedPassword = new BCryptPasswordEncoder().encode(data.password());
        User user = new User(data.name(), data.number() , data.email(), encryptedPassword, data.role(), (String) result.get("url"), (String) result.get("public_id"));

        this.userRepository.save(user);

        return ResponseEntity.ok().build();
    }

    @GetMapping("/extract-username")
    public ResponseEntity<String> extractUsername(@RequestHeader("Authorization") String bearerToken) {
        try {
            String token = bearerToken.substring(7); // Remove "Bearer " prefix
            String username = tokenService.extractUsername(token);
            return ResponseEntity.ok(username);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid token");
        }
    }

    @GetMapping("/extract-user-details")
    public ResponseEntity<?> extractUserDetails(@RequestHeader("Authorization") String bearerToken) {
        try {
            String token = bearerToken.substring(7); // Remove "Bearer " prefix
            String username = tokenService.extractUsername(token);
            User user = userRepository.findByEmail(username);
            System.out.println(user.getName());
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid token or user not found");
        }
    }

        @PostMapping("/forgot-password")
        public ResponseEntity<?> forgotPassword(@RequestBody ForgotPasswordRequest request) {
            try {
                userService.sendForgotPasswordEmail(request.getEmail());
                return ResponseEntity.ok("Password reset email sent successfully");
            } catch (OTPExpiredException ex) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
            } catch (Exception ex) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred");
            }
        }

    @PostMapping("/verify-otp")
    public ResponseEntity<?> verifyOTP(@RequestParam String email, @RequestParam String otp) {
        try {
            userService.verifyOTP(email, otp); // Implement this method in your UserService
            return ResponseEntity.ok("OTP verified successfully");
        } catch (OTPExpiredException ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("OTP verification failed: " + ex.getMessage());
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred");
        }
    }
    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@RequestBody ResetPasswordRequest request) {
        try {
            userService.resetPassword(request.getNewPassword(), request.getEmail());
            System.out.println("Password reset successfully for email: " + request.getEmail());
            return ResponseEntity.ok("Password reset successfully");
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred");
        }
    }
}