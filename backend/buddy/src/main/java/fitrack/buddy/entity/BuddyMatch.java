package fitrack.buddy.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BuddyMatch {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String user1Email;
    private String user2Email;

    @CreationTimestamp
    @Column(updatable = false, nullable = false)
    private LocalDateTime creationDate;
}
