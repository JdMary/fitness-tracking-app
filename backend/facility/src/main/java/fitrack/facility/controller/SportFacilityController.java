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

    // Ajouter une facility
    @PostMapping
    public ResponseEntity<SportFacility> addFacility(@RequestBody SportFacility facility,
                                                     @RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(service.addFacility(facility, token));
    }

    // Récupérer toutes les facilities
    @GetMapping
    public ResponseEntity<List<SportFacility>> getAll() {
        return ResponseEntity.ok(service.retrieveAllFacilities());
    }

    // Récupérer une facility par ID
    @GetMapping("/{id}")
    public ResponseEntity<SportFacility> getById(@PathVariable Long id) {
        return ResponseEntity.ok(service.retrieveFacility(id));
    }

    //  Modifier une facility
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

    // Supprimer une facility
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

    // Récupérer les facilities disponibles
    @GetMapping("/available")
    public ResponseEntity<List<SportFacility>> getAvailableFacilities() {
        return ResponseEntity.ok(service.findAvailableFacilities());
    }
}
