package fitrack.user.service;

import fitrack.user.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService implements UserDetailsService {

    private final UserRepository userRepository;

    public AuthenticationService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        System.out.println("🔍 Looking up user by email: " + email);
        UserDetails user = userRepository.findByEmail(email);
        if (user == null) {
            System.out.println("❌ User not found with email: " + email);
            throw new UsernameNotFoundException("User not found with email: " + email);
        }
        return userRepository.findByEmail(email);
    }
}
