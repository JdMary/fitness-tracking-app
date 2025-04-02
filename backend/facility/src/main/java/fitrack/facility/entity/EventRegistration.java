package fitrack.facility.entity;

import fitrack.facility.entity.enums.RegistrationStatus;
import jakarta.persistence.*;

import java.time.LocalDateTime;

public class EventRegistration {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;

    @ManyToOne
    @JoinColumn(name = "event_id", nullable = false)
    private Event event;

    private LocalDateTime registrationDate;

    @Enumerated(EnumType.STRING)
    private RegistrationStatus status;
}
