package fitrack.facility.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Promotion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "facility_id", nullable = false)
    private SportFacility facility;

    private float discount;
    private LocalDate validFrom;
    private LocalDate validUntil;
    private boolean active;
}
