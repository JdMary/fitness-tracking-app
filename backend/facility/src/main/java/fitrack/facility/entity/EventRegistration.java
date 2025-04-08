package fitrack.facility.entity;

import fitrack.facility.entity.enums.RegistrationStatus;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EventRegistration {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // L'identifiant de l'utilisateur inscrit (provenant du microservice user)
    private Long userId;

    // Relation ManyToOne avec Event
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "event_id", nullable = false)
    private Event event;

    // Date de l'inscription
    private LocalDateTime registrationDate;

    // Statut de l'inscription : CONFIRMED, CANCELLED, etc.
    @Enumerated(EnumType.STRING)
    private RegistrationStatus status;
}
