package fitrack.facility.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import fitrack.facility.client.AuthClient;
import fitrack.facility.entity.SportFacility;
import fitrack.facility.entity.User;
import fitrack.facility.repository.SportFacilityRepository;
import fitrack.facility.service.ISportFacilityService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class SportFacilityService implements ISportFacilityService {

    private final SportFacilityRepository repository;
    private final AuthClient authClient;
    private final ObjectMapper objectMapper; // 🔥 Injecté automatiquement par Spring

    @Override
    public List<SportFacility> retrieveAllFacilities() {
        return repository.findAll();
    }

    @Override
    public SportFacility addFacility(SportFacility facility, String token) {
        // ✅ Récupérer l'objet brut (LinkedHashMap)
        Object response = authClient.extractUserDetails(token).getBody();

        // ✅ Convertir vers User avec ObjectMapper
        User user = objectMapper.convertValue(response, User.class);

        // ✅ Vérifier le rôle
        if (!"FACILITY_MANAGER".equals(user.getRole())) {
            throw new RuntimeException("Seuls les FACILITY_MANAGER peuvent créer une facility.");
        }

        // ✅ Générer un ID si vide
        if (facility.getFacilityId() == null || facility.getFacilityId().isEmpty()) {
            String randomId = "FAC-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase();
            facility.setFacilityId(randomId);
        }

        // ✅ Associer l’email de l’utilisateur
        facility.setOwnerEmail(user.getUsername());

        return repository.save(facility);
    }

    @Override
    public SportFacility updateFacility(SportFacility facility) {
        return repository.save(facility);
    }

    @Override
    public SportFacility retrieveFacility(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Facility non trouvée"));
    }

    @Override
    public void removeFacility(Long id) {
        repository.deleteById(id);
    }

    @Override
    public List<SportFacility> findAvailableFacilities() {
        return repository.findByAvailability(true);
    }
}
