package fitrack.facility.repository;

import fitrack.facility.entity.SportFacility;
import fitrack.facility.entity.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {
    List<Subscription> findByOwnerEmail(String email);
    int countBySportFacility(SportFacility facility);
}
