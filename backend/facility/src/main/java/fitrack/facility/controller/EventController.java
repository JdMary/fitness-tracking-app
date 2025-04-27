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


    @GetMapping("/all")
    public ResponseEntity<List<Event>> getAllEvents() {
        return ResponseEntity.ok(eventService.retrieveAllEvents());
    }


    @PostMapping("/create")
    public ResponseEntity<Event> createEvent(@RequestBody Event event, @RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(eventService.createEvent(event, token));
    }


    @PutMapping("/update/{id}")
    public ResponseEntity<Event> updateEvent(
            @PathVariable Long id,
            @RequestBody Event event,
            @RequestHeader("Authorization") String token
    ) {
        return ResponseEntity.ok(eventService.updateEvent(event, id, token));
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteEvent(
            @PathVariable Long id,
            @RequestHeader("Authorization") String token
    ) {
        eventService.deleteEvent(id, token);
        return ResponseEntity.noContent().build();
    }


    @PutMapping("/cancel/{id}")
    public ResponseEntity<Event> cancelEvent(@PathVariable Long id) {
        return ResponseEntity.ok(eventService.cancelEvent(id));
    }


    @GetMapping("/upcoming")
    public ResponseEntity<List<Event>> getUpcomingEvents() {
        return ResponseEntity.ok(eventService.findUpcomingEvents());
    }


    @GetMapping("/facility/{facilityId}")
    public ResponseEntity<List<Event>> getEventsByFacility(@PathVariable Long facilityId) {
        return ResponseEntity.ok(eventService.findEventsByFacility(facilityId));
    }
    @GetMapping("/search")
    public ResponseEntity<List<Event>> searchEvents(@RequestParam String keyword) {
        List<Event> results = eventService.searchEvents(keyword);
        return ResponseEntity.ok(results);
    }


    @GetMapping("/{id}")
    public ResponseEntity<Event> getEventById(@PathVariable Long id) {
        return ResponseEntity.ok(eventService.retrieveEvent(id));
    }
}
