package fitrack.facility.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import fitrack.facility.client.AuthClient;
import fitrack.facility.entity.SportFacility;
import fitrack.facility.entity.User;
import fitrack.facility.service.SportFacilityService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/facility")
@RequiredArgsConstructor
public class SportFacilityController {

    private final SportFacilityService service;
    private final AuthClient authClient;
    private final ObjectMapper objectMapper;

    // ✅ 1. Ajouter une facility (avec token)
    @PostMapping
    public ResponseEntity<SportFacility> addFacility(@RequestBody SportFacility facility,
                                                     @RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(service.addFacility(facility, token));
    }

    // ✅ 2. Récupérer toutes les facilities
    @GetMapping
    public ResponseEntity<List<SportFacility>> getAll() {
        return ResponseEntity.ok(service.retrieveAllFacilities());
    }

    // ✅ 3. Récupérer une facility par ID
    @GetMapping("/{id}")
    public ResponseEntity<SportFacility> getById(@PathVariable Long id) {
        return ResponseEntity.ok(service.retrieveFacility(id));
    }

    // ✅ 4. Modifier une facility (avec vérification de rôle via token)
    @PutMapping
    public ResponseEntity<SportFacility> update(@RequestBody SportFacility facility,
                                                @RequestHeader("Authorization") String token) {
        Object response = authClient.extractUserDetails(token).getBody();
        User user = objectMapper.convertValue(response, User.class);

        if (!"FACILITY_MANAGER".equals(user.getRole())) {
            throw new RuntimeException("Seuls les FACILITY_MANAGER peuvent modifier une facility.");
        }

        return ResponseEntity.ok(service.updateFacility(facility));
    }

    // ✅ 5. Supprimer une facility (avec vérification de rôle via token)
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id,
                                       @RequestHeader("Authorization") String token) {
        Object response = authClient.extractUserDetails(token).getBody();
        User user = objectMapper.convertValue(response, User.class);

        if (!"FACILITY_MANAGER".equals(user.getRole())) {
            throw new RuntimeException("Seuls les FACILITY_MANAGER peuvent supprimer une facility.");
        }

        service.removeFacility(id);
        return ResponseEntity.noContent().build();
    }

    // ✅ 6. Récupérer seulement les facilities disponibles
    @GetMapping("/available")
    public ResponseEntity<List<SportFacility>> getAvailableFacilities() {
        return ResponseEntity.ok(service.findAvailableFacilities());
    }
}
