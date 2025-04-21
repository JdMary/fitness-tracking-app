package fitrack.user.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(unique = true)
    private int number;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private UserRole role;

    @Column
    private String imageUrl;

    @Column
    private String imageId;

    @Column
    private String otp;

    @Column
    private LocalDateTime lastLogin;

    @Column(nullable = false)
    private Boolean inactive = false;

    @Column
    private LocalDateTime otpExpiry;

    @Column
    private LocalDateTime signupDate;

    @Column
    private int coins;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Order> orders;
    public User() {
    }
    public User(String name, int number , String email, String password, UserRole role, String imageUrl, String imageId) {
        this.name = name;
        this.number = number;
        this.email = email;
        this.password = password;
        this.role = role;
        this.imageUrl = imageUrl;
        this.imageId = imageId;
        this.signupDate = LocalDateTime.now();
        this.coins = 0;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<SimpleGrantedAuthority> roles = new ArrayList<>();
        roles.add(new SimpleGrantedAuthority("ROLE_USER"));

        if (this.role == UserRole.ADMIN) roles.add(new SimpleGrantedAuthority("ROLES_ADMIN"));

        return roles;
    }

    @Override
    public String getUsername() {
        return email;
    }

    public boolean isInactive() {
        return inactive;
    }
}