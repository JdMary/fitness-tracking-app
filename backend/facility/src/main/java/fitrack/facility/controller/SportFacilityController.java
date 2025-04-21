package fitrack.facility.controller;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.fasterxml.jackson.databind.ObjectMapper;
import fitrack.facility.client.AuthClient;
import fitrack.facility.entity.SportFacility;
import fitrack.facility.entity.User;
import fitrack.facility.service.SportFacilityService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/facilities")
@RequiredArgsConstructor
public class SportFacilityController {

    private final SportFacilityService service;
    private final AuthClient authClient;
    private final ObjectMapper objectMapper;
    private final Cloudinary cloudinary;

    // Ajouter une facility
    @PostMapping(value = "/add", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    //lahne bech inhot RequestPart 3ala khater manich bech indakhel kan json bech inhot zeda fichier ta3limage
    public ResponseEntity<SportFacility> addFacility(
            @RequestPart("facility") String facilityJson,
            @RequestPart("image") MultipartFile image,
            @RequestHeader("Authorization") String token
    ) throws IOException {

        // Convertir le JSON en objet Java
        SportFacility facility = new ObjectMapper().readValue(facilityJson, SportFacility.class);

        // Uploader l'image sur Cloudinary
        Map uploadResult = cloudinary.uploader().upload(image.getBytes(), ObjectUtils.emptyMap());
        String imageUrl = uploadResult.get("secure_url").toString();

        // Affecter l'URL à l'entité
        facility.setImage(imageUrl);

        // Appeler le service pour sauvegarder
        return ResponseEntity.ok(service.addFacility(facility, token));
    }

    // Récupérer toutes les facilities
    @GetMapping("/all")
    public ResponseEntity<List<SportFacility>> getAll() {
        return ResponseEntity.ok(service.retrieveAllFacilities());
    }

    // Récupérer une facility par ID
    @GetMapping("/detail/{id}")
    public ResponseEntity<SportFacility> getById(@PathVariable Long id) {
        return ResponseEntity.ok(service.retrieveFacility(id));
    }

    //  Modifier une facility
    @PutMapping(value = "/update/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<SportFacility> update(
            @PathVariable Long id,
            @RequestPart("facility") String facilityJson,
            @RequestPart(value = "image", required = false) MultipartFile image,
            @RequestHeader("Authorization") String token
    ) throws IOException {
        Object response = authClient.extractUserDetails(token).getBody();
        User user = objectMapper.convertValue(response, User.class);

        if (!"FACILITY_MANAGER".equals(user.getRole())) {
            throw new RuntimeException("Seuls les FACILITY_MANAGER peuvent modifier une facility.");
        }

        SportFacility facility = new ObjectMapper().readValue(facilityJson, SportFacility.class);
        facility.setId(id);

        if (image != null && !image.isEmpty()) {
            Map uploadResult = cloudinary.uploader().upload(image.getBytes(), ObjectUtils.emptyMap());
            String imageUrl = uploadResult.get("secure_url").toString();
            facility.setImage(imageUrl);
        }

        SportFacility updated = service.updateFacility(facility, token);

        return ResponseEntity.ok(updated);
    }


    // Supprimer une facility
    @DeleteMapping("/delete/{id}")
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
    @GetMapping("/search")
    public List<SportFacility> searchFacilities(
            @RequestParam(required = false) String location,
            @RequestParam(required = false) String sportType,
            @RequestParam(required = false) Boolean availability
    ) {
        return service.searchFacilities(location, sportType, availability);
    }
    // GET /locations - liste des lieux distincts
    @GetMapping("/locations")
    public List<String> getDistinctLocations() {
        return service.findDistinctLocations();
    }

    // GET /sport-types - liste des types de sport distincts
    @GetMapping("/sport-types")
    public List<String> getDistinctSportTypes() {
        return service.findDistinctSportTypes();
    }


}
