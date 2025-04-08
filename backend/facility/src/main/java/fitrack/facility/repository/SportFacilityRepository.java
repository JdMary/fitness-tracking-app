package fitrack.facility.repository;


import fitrack.facility.entity.SportFacility;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SportFacilityRepository extends JpaRepository<SportFacility, Long> {
    boolean existsByFacilityId(String facilityId);
    List<SportFacility> findByAvailability(boolean availability);
}