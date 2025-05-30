package fitrack.facility.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Promotion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String promoCode;

    private String description;

    @Column(name = "discount")
    private float discountPercentage;

    private LocalDate startDate;

    private LocalDate endDate;

    private boolean active;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "facility_id")

    private SportFacility sportFacility;
}
