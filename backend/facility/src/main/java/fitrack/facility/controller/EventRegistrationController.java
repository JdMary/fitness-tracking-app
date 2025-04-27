package fitrack.facility.controller;

import fitrack.facility.dto.RegistrationResponse;
import fitrack.facility.entity.EventRegistration;
import fitrack.facility.service.IEventRegistrationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import fitrack.facility.service.EventRegistrationService;

import java.util.List;


@RestController
@RequestMapping("/api/v1/facilities/registrations")
@RequiredArgsConstructor
public class EventRegistrationController {

    private final IEventRegistrationService registrationService;
    private  final  EventRegistrationService service ;
    @GetMapping("/search")
    public ResponseEntity<List<EventRegistration>> searchRegistrations(
            @RequestParam(required = false) String status,
            @RequestParam(required = false) String keyword) {

        List<EventRegistration> results = service.searchByStatusOrEventName(status, keyword);
        return ResponseEntity.ok(results);
    }





    @GetMapping("/event/{eventId}")
    public ResponseEntity<List<EventRegistration>> getRegistrationsForEvent(@PathVariable Long eventId,
                                                                            @RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(registrationService.getRegistrationsForEvent(eventId, token));
    }


    @PostMapping("/register/{eventId}")
    public ResponseEntity<RegistrationResponse> registerUser(@PathVariable Long eventId,
                                                             @RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(registrationService.registerUser(eventId, token));
    }



    @PutMapping("/cancel/{registrationId}")
    public ResponseEntity<EventRegistration> cancelRegistration(@PathVariable Long registrationId,
                                                                @RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(registrationService.cancelRegistration(registrationId, token));
    }


    @GetMapping("/user")
    public ResponseEntity<List<EventRegistration>> getUserRegistrations(@RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(registrationService.getUserEventRegistrations(token));
    }


    @DeleteMapping("delete/{registrationId}")
    public ResponseEntity<Void> deleteRegistrationByAdmin(@PathVariable Long registrationId,
                                                          @RequestHeader("Authorization") String token) {
        registrationService.deleteRegistrationByAdmin(registrationId, token);
        return ResponseEntity.noContent().build();
    }
}
