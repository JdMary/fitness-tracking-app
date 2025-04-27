package fitrack.facility.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

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

    @Column(unique = true, nullable = false)
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

    @OneToMany(mappedBy = "sportFacility", cascade = CascadeType.ALL,orphanRemoval = true)
    @JsonIgnore
    private List<Subscription> subscriptions = new ArrayList<>();

   @OneToMany(mappedBy = "sportFacility", cascade = CascadeType.ALL, orphanRemoval = true)
   @JsonIgnore
    private List<Promotion> promotions = new ArrayList<>();


    @OneToMany(mappedBy = "sportFacility", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Event> events = new ArrayList<>();


    @OneToMany(mappedBy = "facility", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<FacilityDowntime> downtimes = new ArrayList<>();

}
