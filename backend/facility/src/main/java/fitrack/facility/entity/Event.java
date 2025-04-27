package fitrack.facility.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import fitrack.facility.entity.enums.EventStatus;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true, nullable = false)
    @NotBlank(message = "Event name is required.")
    @Size(min = 3, max = 100, message = "Event name must be between 3 and 100 characters.")
    private String name;

    @NotBlank(message = "Event description is required.")
    @Size(min = 10, max = 500, message = "Description must be between 10 and 500 characters.")
    private String description;

    @NotNull(message = "Event date is required.")
    @FutureOrPresent(message = "Event date must be today or in the future.")
    private LocalDate eventDate;

    @NotNull(message = "Start time is required.")
    private LocalTime startTime;

    @NotNull(message = "End time is required.")
    private LocalTime endTime;

    @Min(value = 0, message = "Price cannot be negative.")
    private float price;

    @Column(name = "max_participants", nullable = false)
    @Min(value = 1, message = "Maximum number of participants must be at least 1.")
    private int maxParticipation;

    @Enumerated(EnumType.STRING)
    private EventStatus status;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "facility_id", nullable = false)
    @NotNull(message = "Sport facility is required.")
    private SportFacility sportFacility;


    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<EventRegistration> registrations = new ArrayList<>();
}
