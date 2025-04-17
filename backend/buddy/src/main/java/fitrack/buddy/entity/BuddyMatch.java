package fitrack.buddy.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
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

    private Long requestId;

    private String email1;

    private String email2;

    @Enumerated(EnumType.STRING)
    private Goals goal;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime workoutStartTime;

    private int duration;

    @CreationTimestamp
    @Column(updatable = false, nullable = false)
    private LocalDateTime creationDate;

    @OneToMany(mappedBy = "match", cascade = CascadeType.ALL)
    private List<BuddyRequest> requests;

}
