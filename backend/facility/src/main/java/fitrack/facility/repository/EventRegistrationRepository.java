package fitrack.facility.repository;

import feign.Param;
import fitrack.facility.entity.Event;
import fitrack.facility.entity.EventRegistration;
import fitrack.facility.entity.enums.RegistrationStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRegistrationRepository extends JpaRepository<EventRegistration, Long> {


    List<EventRegistration> findByEvent(Event event);

    boolean existsByEventAndUserEmail(Event event, String username);
    boolean existsByEventAndUserEmailAndStatusNot(Event event, String userEmail, RegistrationStatus status);

    int countByEventAndStatus(Event event, RegistrationStatus registrationStatus);

    List<EventRegistration> findByEventAndStatusOrderByRegistrationDateAsc(Event event, RegistrationStatus registrationStatus);

    List<EventRegistration> findByUserEmail(String username);
    @Query("SELECT e FROM EventRegistration e WHERE (:status IS NULL OR e.status = :status) " +
            "AND (:keyword IS NULL OR LOWER(e.event.name) LIKE LOWER(CONCAT('%', :keyword, '%')))")
    List<EventRegistration> searchByStatusOrKeyword(@Param("status") String status, @Param("keyword") String keyword);


}