package fitrack.facility.controller;

import fitrack.facility.entity.Event;
import fitrack.facility.service.IEventService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/facilities/events")
@RequiredArgsConstructor
public class EventController {

    private final IEventService eventService;

    // 🔄 GET - Tous les événements
    @GetMapping("/all")
    public ResponseEntity<List<Event>> getAllEvents() {
        return ResponseEntity.ok(eventService.retrieveAllEvents());
    }

    // ➕ POST - Créer un événement (avec vérif. propriétaire)
    @PostMapping("/create")
    public ResponseEntity<Event> createEvent(@RequestBody Event event, @RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(eventService.createEvent(event, token));
    }

    // 📝 PUT - Mettre à jour un événement
    @PutMapping("/update/{id}")
    public ResponseEntity<Event> updateEvent(
            @PathVariable Long id,
            @RequestBody Event event,
            @RequestHeader("Authorization") String token
    ) {
        return ResponseEntity.ok(eventService.updateEvent(event, id, token));
    }

    // ❌ DELETE - Supprimer un événement (propriétaire uniquement)
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteEvent(
            @PathVariable Long id,
            @RequestHeader("Authorization") String token
    ) {
        eventService.deleteEvent(id, token);
        return ResponseEntity.noContent().build();
    }

    // ❗ PUT - Annuler un événement (status = CANCELLED)
    @PutMapping("/cancel/{id}")
    public ResponseEntity<Event> cancelEvent(@PathVariable Long id) {
        return ResponseEntity.ok(eventService.cancelEvent(id));
    }

    // 📆 GET - Événements à venir (status = UPCOMING & date > now)
    @GetMapping("/upcoming")
    public ResponseEntity<List<Event>> getUpcomingEvents() {
        return ResponseEntity.ok(eventService.findUpcomingEvents());
    }

    // 📍 GET - Événements par installation
    @GetMapping("/facility/{facilityId}")
    public ResponseEntity<List<Event>> getEventsByFacility(@PathVariable Long facilityId) {
        return ResponseEntity.ok(eventService.findEventsByFacility(facilityId));
    }

    // 🔍 GET - Un seul événement
    @GetMapping("/{id}")
    public ResponseEntity<Event> getEventById(@PathVariable Long id) {
        return ResponseEntity.ok(eventService.retrieveEvent(id));
    }
}
