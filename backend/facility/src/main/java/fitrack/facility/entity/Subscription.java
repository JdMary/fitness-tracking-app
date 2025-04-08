package fitrack.facility.entity;

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

    private String subId; // identifiant personnalisé

    private LocalDate startDate;

    private LocalDate endDate;

    private float pricePaid;

    @Enumerated(EnumType.STRING)
    private SubscriptionStatus status;

    private LocalDate createdAt;

    private String ownerEmail; // ✅ Lien logique avec l’utilisateur
    private String priceType;

    @ManyToOne
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
