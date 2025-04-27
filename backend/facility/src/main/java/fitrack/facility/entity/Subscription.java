package fitrack.facility.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import fitrack.facility.entity.enums.SubscriptionStatus;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Subscription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String subId;

    private LocalDate startDate;

    private LocalDate endDate;

    private float pricePaid;

    @Enumerated(EnumType.STRING)
    private SubscriptionStatus status;

    private LocalDate createdAt;

    private String ownerEmail;
    private String priceType;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "facility_id")
    private SportFacility sportFacility;

    @ManyToOne
    @JoinColumn(name = "promotion_id")
    private Promotion promotion;

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDate.now();
    }
}
