package fitrack.facility.entity;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalTime;

public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "facility_id", nullable = false)
    private SportFacility facility;

    private String name;
    private String description;
    private LocalDate eventDate;
    private LocalTime startTime;
    private LocalTime endTime;
    private float price;
    private int maxParticipants;
    private String status;
}
