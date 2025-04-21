package fitrack.facility.controller;

import fitrack.facility.entity.EventRegistration;
import fitrack.facility.service.IEventRegistrationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/facilities/registrations")
@RequiredArgsConstructor
public class EventRegistrationController {

    private final IEventRegistrationService registrationService;

    // 🔘 Récupérer toutes les inscriptions d’un événement
    @GetMapping("/event/{eventId}")
    public ResponseEntity<List<EventRegistration>> getRegistrationsForEvent(@PathVariable Long eventId,
                                                                            @RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(registrationService.getRegistrationsForEvent(eventId, token));
    }

    // ➕ Inscription d’un utilisateur à un événement
    @PostMapping("/register/{eventId}")
    public ResponseEntity<EventRegistration> registerUser(@PathVariable Long eventId,
                                                          @RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(registrationService.registerUser(eventId, token));
    }

    // ❌ Annulation d’une inscription (par l'utilisateur lui-même)
    @PutMapping("/cancel/{registrationId}")
    public ResponseEntity<EventRegistration> cancelRegistration(@PathVariable Long registrationId,
                                                                @RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(registrationService.cancelRegistration(registrationId, token));
    }

    // 📋 Récupérer toutes les inscriptions d’un utilisateur (profil)
    @GetMapping("/user")
    public ResponseEntity<List<EventRegistration>> getUserRegistrations(@RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(registrationService.getUserEventRegistrations(token));
    }

    // 🗑️ Suppression d’une inscription par l’admin (si événement passé ou annulé)
    @DeleteMapping("delete/{registrationId}")
    public ResponseEntity<Void> deleteRegistrationByAdmin(@PathVariable Long registrationId,
                                                          @RequestHeader("Authorization") String token) {
        registrationService.deleteRegistrationByAdmin(registrationId, token);
        return ResponseEntity.noContent().build();
    }
}
