package fitrack.facility.repository;

import feign.Param;
import fitrack.facility.entity.Event;
import fitrack.facility.entity.SportFacility;
import fitrack.facility.entity.enums.EventStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {


    List<Event> findBySportFacility(SportFacility facility);

    List<Event> findBySportFacility_IdAndEventDate(Long facilityId, LocalDate eventDate);

    List<Event> findByStatusAndEventDateAfter(EventStatus status, LocalDate date);
    @Query("SELECT e FROM Event e WHERE LOWER(e.name) LIKE LOWER(CONCAT('%', :keyword, '%')) " +
            "OR LOWER(e.sportFacility.name) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    List<Event> searchEventsByKeyword(@Param("keyword") String keyword);
    boolean existsByName(String name);
}
