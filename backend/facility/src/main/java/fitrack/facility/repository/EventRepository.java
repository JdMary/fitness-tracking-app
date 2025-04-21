package fitrack.facility.repository;

import fitrack.facility.entity.Event;
import fitrack.facility.entity.SportFacility;
import fitrack.facility.entity.enums.EventStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {

    // Pour récupérer les événements d’une facility donnée
    List<Event> findBySportFacility(SportFacility facility);

    // Pour récupérer les événements par statut si besoin
    List<Event> findByStatus(String status);

    // Pour vérifier les conflits de date si tu veux plus tard
    List<Event> findByEventDateAndSportFacility(java.time.LocalDate date, SportFacility facility);
    List<Event> findBySportFacility_IdAndEventDate(Long facilityId, LocalDate eventDate);

    // 🔍 Trouver les événements à venir par statut
    List<Event> findByStatusAndEventDateAfter(EventStatus status, LocalDate date);
}
