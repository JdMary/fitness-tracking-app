package fitrack.buddy.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.List;

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

    private Long requestId1;
    private Long requestId2;
    private String email1;
    private String email2;

    @CreationTimestamp
    @Column(updatable = false, nullable = false)
    private LocalDateTime creationDate;

    @OneToMany(mappedBy = "match", cascade = CascadeType.ALL)
    private List<BuddyRequest> requests;
}
