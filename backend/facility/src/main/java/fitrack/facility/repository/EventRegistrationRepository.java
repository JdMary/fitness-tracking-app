package fitrack.facility.repository;

import fitrack.facility.entity.Event;
import fitrack.facility.entity.EventRegistration;
import fitrack.facility.entity.enums.RegistrationStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRegistrationRepository extends JpaRepository<EventRegistration, Long> {


    List<EventRegistration> findByEvent(Event event);

    boolean existsByEventAndUserEmail(Event event, String username);

    int countByEventAndStatus(Event event, RegistrationStatus registrationStatus);

    List<EventRegistration> findByEventAndStatusOrderByRegistrationDateAsc(Event event, RegistrationStatus registrationStatus);

    List<EventRegistration> findByUserEmail(String username);
}