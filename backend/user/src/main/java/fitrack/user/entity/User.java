package fitrack.user.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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
    @Column
    private String boardId;
    @Column
    private int xpPoints;
    @Column
    private int rank;
    @Column
    private String fitnessGoals;
    @Column
    private float height;
    @Column
    private float weight;

    @JsonIgnore
    @Transient
    private Collection<? extends GrantedAuthority> authorities;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Order> orders = new ArrayList<>();
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
    public User(String name, int number, String email, String password, UserRole role, String imageUrl, String imageId, String boardId,
                String otp, LocalDateTime lastLogin, Boolean inactive, LocalDateTime otpExpiry, LocalDateTime signupDate, int coins,
                int xpPoints, int rank, String fitnessGoals, float height, float weight, List<Order> orders) {
        this.name = name;
        this.number = number;
        this.email = email;
        this.password = password;
        this.role = role;
        this.imageUrl = imageUrl;
        this.imageId = imageId;
        this.boardId = boardId;
        this.otp = otp;
        this.lastLogin = lastLogin;
        this.inactive = inactive;
        this.otpExpiry = otpExpiry;
        this.signupDate = signupDate != null ? signupDate : LocalDateTime.now();
        this.coins = coins;
        this.xpPoints = xpPoints;
        this.rank = rank;
        this.fitnessGoals = fitnessGoals;
        this.height = height;
        this.weight = weight;
        this.orders = orders != null ? orders : new ArrayList<>();
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