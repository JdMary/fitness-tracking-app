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
        Object response = authClient.extractUserDetails(token).getBody();
        User user = objectMapper.convertValue(response, User.class);
        SportFacility facility = facilityRepository.findById(event.getSportFacility().getId())
                .orElseThrow(() -> new RuntimeException("Facility not found."));


        if (!facility.getOwnerEmail().equals(user.getUsername())) {
            throw new RuntimeException("Only the owner of this facility can create an event.");
        }
        List<Event> existingEvents = repository.findBySportFacility_IdAndEventDate(
                event.getSportFacility().getId(),
                event.getEventDate()
        );

        if (!existingEvents.isEmpty()) {
            throw new RuntimeException("An event already exists at this facility on this date.");
        }
        if (event.getStartTime() != null && event.getEndTime() != null
                && !event.getEndTime().isAfter(event.getStartTime())) {
            throw new RuntimeException("The end time must be after the start time.");
        }
        if (repository.existsByName(event.getName())) {
            throw new RuntimeException("An event with this name already exists!");
        }


        event.setSportFacility(facility);
        event.setStatus(EventStatus.UPCOMING);
        return repository.save(event);
    }

    @Override
    public Event updateEvent(Event updatedEvent, Long id, String token) {

        Object response = authClient.extractUserDetails(token).getBody();
        User user = objectMapper.convertValue(response, User.class);

        Event existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Event not found"));


        if (!existing.getSportFacility().getOwnerEmail().equals(user.getUsername())) {
            throw new RuntimeException("Only the owner of this event can update an event.");
        }



        List<Event> sameDateEvents = repository.findBySportFacility_IdAndEventDate(
                existing.getSportFacility().getId(),
                updatedEvent.getEventDate()
        );

        boolean duplicateFound = sameDateEvents.stream()
                .anyMatch(e -> !e.getId().equals(id));

        if (duplicateFound) {
            throw new RuntimeException("Another event already exists at this facility on this date.");
        }

        if (repository.existsByName(updatedEvent.getName()) && !existing.getName().equals(updatedEvent.getName())) {
            throw new RuntimeException("An event with this name already exists!");
        }


        if (updatedEvent.getStartTime() != null && updatedEvent.getEndTime() != null
                && !updatedEvent.getEndTime().isAfter(updatedEvent.getStartTime())) {
            throw new RuntimeException("The end time must be after the start time.");
        }



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
                .orElseThrow(() -> new RuntimeException("Event nt found"));
    }

    @Override
    public void deleteEvent(Long id, String token) {
        Object response = authClient.extractUserDetails(token).getBody();
        User user = objectMapper.convertValue(response, User.class);

        Event event = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Event not found"));

        if (!event.getSportFacility().getOwnerEmail().equals(user.getUsername())) {
            throw new RuntimeException("Deletion denied: you are not the owner of this event.");
        }

        repository.deleteById(id);
    }

    @Override
    public Event cancelEvent(Long id) {
        Event event = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Event not found"));

        event.setStatus(EventStatus.CANCELLED);
        return repository.save(event);
    }

    @Override
    public List<Event> findEventsByFacility(Long facilityId) {
        SportFacility facility = facilityRepository.findById(facilityId)
                .orElseThrow(() -> new RuntimeException("Facility not found"));

        return repository.findBySportFacility(facility);
    }

    @Override
    public List<Event> findUpcomingEvents() {
        return repository.findByStatusAndEventDateAfter(EventStatus.UPCOMING, LocalDate.now());
    }
    public List<Event> searchEvents(String keyword) {
        return repository.searchEventsByKeyword(keyword);
    }

}
