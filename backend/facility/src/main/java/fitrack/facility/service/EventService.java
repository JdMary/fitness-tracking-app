package fitrack.facility.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import fitrack.facility.client.AuthClient;
import fitrack.facility.entity.Event;
import fitrack.facility.entity.enums.EventStatus;
import fitrack.facility.entity.SportFacility;
import fitrack.facility.entity.User;
import fitrack.facility.repository.EventRepository;
import fitrack.facility.repository.SportFacilityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class EventService implements IEventService {

    private final EventRepository repository;
    private final SportFacilityRepository facilityRepository;
    private final AuthClient authClient;
    private final ObjectMapper objectMapper;

    @Override
    public List<Event> retrieveAllEvents() {
        return repository.findAll();
    }

    @Override
    public Event createEvent(Event event, String token) {
        // Récupérer le propriétaire depuis le token
        Object response = authClient.extractUserDetails(token).getBody();
        User user = objectMapper.convertValue(response, User.class);

        // Vérifier la facility
        SportFacility facility = facilityRepository.findById(event.getSportFacility().getId())
                .orElseThrow(() -> new RuntimeException("Facility non trouvée"));

        // Vérifier que l'utilisateur est bien le propriétaire
        if (!facility.getOwnerEmail().equals(user.getUsername())) {
            throw new RuntimeException("Seul le propriétaire de cette installation peut créer un événement.");
        }
        List<Event> existingEvents = repository.findBySportFacility_IdAndEventDate(
                event.getSportFacility().getId(),
                event.getEventDate()
        );

        if (!existingEvents.isEmpty()) {
            throw new RuntimeException("Un événement existe déjà dans cette facility à cette date.");
        }
        if (event.getStartTime() != null && event.getEndTime() != null
                && !event.getEndTime().isAfter(event.getStartTime())) {
            throw new RuntimeException("L'heure de fin doit être après l'heure de début.");
        }


        event.setSportFacility(facility);
        event.setStatus(EventStatus.UPCOMING);
        return repository.save(event);
    }

    @Override
    public Event updateEvent(Event updatedEvent, Long id, String token) {
        // Récupérer le propriétaire depuis le token
        Object response = authClient.extractUserDetails(token).getBody();
        User user = objectMapper.convertValue(response, User.class);

        Event existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Event non trouvé"));

        // Vérifier que le propriétaire correspond
        if (!existing.getSportFacility().getOwnerEmail().equals(user.getUsername())) {
            throw new RuntimeException("Seul le propriétaire de l'installation peut modifier cet événement.");
        }

        // Vérifier si un autre événement existe à la même date dans la même facility
        List<Event> sameDateEvents = repository.findBySportFacility_IdAndEventDate(
                existing.getSportFacility().getId(),
                updatedEvent.getEventDate()
        );

        boolean duplicateFound = sameDateEvents.stream()
                .anyMatch(e -> !e.getId().equals(id));

        if (duplicateFound) {
            throw new RuntimeException("Un autre événement existe déjà dans cette facility à cette date.");
        }

        // Vérifier que l'heure de fin est après l'heure de début
        if (updatedEvent.getStartTime() != null && updatedEvent.getEndTime() != null
                && !updatedEvent.getEndTime().isAfter(updatedEvent.getStartTime())) {
            throw new RuntimeException("L'heure de fin doit être après l'heure de début.");
        }

        // Mise à jour des champs
        existing.setName(updatedEvent.getName());
        existing.setDescription(updatedEvent.getDescription());
        existing.setEventDate(updatedEvent.getEventDate());
        existing.setStartTime(updatedEvent.getStartTime());
        existing.setEndTime(updatedEvent.getEndTime());
        existing.setPrice(updatedEvent.getPrice());
        existing.setMaxParticipation(updatedEvent.getMaxParticipation());

        return repository.save(existing);
    }


    @Override
    public Event retrieveEvent(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Event non trouvé"));
    }

    @Override
    public void deleteEvent(Long id, String token) {
        Object response = authClient.extractUserDetails(token).getBody();
        User user = objectMapper.convertValue(response, User.class);

        Event event = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Event non trouvé"));

        if (!event.getSportFacility().getOwnerEmail().equals(user.getUsername())) {
            throw new RuntimeException("Suppression refusée : vous n'êtes pas le propriétaire de cette installation.");
        }

        repository.deleteById(id);
    }

    @Override
    public Event cancelEvent(Long id) {
        Event event = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Event non trouvé"));

        event.setStatus(EventStatus.CANCELLED);
        return repository.save(event);
    }

    @Override
    public List<Event> findEventsByFacility(Long facilityId) {
        SportFacility facility = facilityRepository.findById(facilityId)
                .orElseThrow(() -> new RuntimeException("Facility non trouvée"));

        return repository.findBySportFacility(facility);
    }

    @Override
    public List<Event> findUpcomingEvents() {
        return repository.findByStatusAndEventDateAfter(EventStatus.UPCOMING, LocalDate.now());
    }

}
