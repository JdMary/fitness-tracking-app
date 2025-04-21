package fitrack.facility.repository;


import feign.Param;
import fitrack.facility.entity.SportFacility;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SportFacilityRepository extends JpaRepository<SportFacility, Long> {
    boolean existsByFacilityId(String facilityId);
    List<SportFacility> findByAvailability(boolean availability);
    @Query("SELECT f FROM SportFacility f " +
            "WHERE (:location IS NULL OR f.location = :location) " +
            "AND (:sportType IS NULL OR f.sportType = :sportType) " +
            "AND (:availability IS NULL OR f.availability = :availability)")
    List<SportFacility> findByFilters(@Param("location") String location,
                                      @Param("sportType") String sportType,
                                      @Param("availability") Boolean availability);
    @Query("SELECT DISTINCT f.location FROM SportFacility f WHERE f.location IS NOT NULL")
    List<String> findDistinctLocations();

    @Query("SELECT DISTINCT f.sportType FROM SportFacility f WHERE f.sportType IS NOT NULL")
    List<String> findDistinctSportTypes();


}