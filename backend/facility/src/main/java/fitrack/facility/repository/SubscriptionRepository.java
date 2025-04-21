package fitrack.facility.repository;

import fitrack.facility.entity.SportFacility;
import fitrack.facility.entity.Subscription;
import fitrack.facility.entity.enums.SubscriptionStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {
    List<Subscription> findByOwnerEmail(String email);
    int countBySportFacility(SportFacility facility);
    List<Subscription> findByOwnerEmailAndSportFacilityOrderByStartDateAsc(String ownerEmail, SportFacility sportFacility);


    List<Subscription> findBySportFacility(SportFacility facility);
    List<Subscription> findBySportFacilityAndStatus(SportFacility facility, SubscriptionStatus status);

}
