// FacilityDowntimeRepository.java
package fitrack.facility.repository;

import fitrack.facility.entity.FacilityDowntime;
import fitrack.facility.entity.SportFacility;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FacilityDowntimeRepository extends JpaRepository<FacilityDowntime, Long> {
    List<FacilityDowntime> findByFacility(SportFacility facility);
}
