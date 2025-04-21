package fitrack.facility.entity;

import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.*;
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SportFacility {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String facilityId;
    private String name;
    private String location;
    private String sportType;
    private boolean availability;
    private int maxSubscription;
    private float normalPrice;
    private float premiumPrice;

    private String ownerEmail;
    private String description;
    private String image;

}
