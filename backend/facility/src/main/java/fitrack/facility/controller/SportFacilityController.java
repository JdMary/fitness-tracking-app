package fitrack.facility.controller;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.fasterxml.jackson.databind.ObjectMapper;
import fitrack.facility.entity.SportFacility;
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
    private final Cloudinary cloudinary;

    @PostMapping(value = "/add", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    //lahne bech inhot RequestPart 3ala khater manich bech indakhel kan json bech inhot zeda fichier ta3limage
    public ResponseEntity<SportFacility> addFacility(
            @RequestPart("facility") String facilityJson,
            @RequestPart("image") MultipartFile image,
            @RequestHeader("Authorization") String token
    ) throws IOException {
        SportFacility facility = new ObjectMapper().readValue(facilityJson, SportFacility.class);

        Map uploadResult = cloudinary.uploader().upload(image.getBytes(), ObjectUtils.emptyMap());
        String imageUrl = uploadResult.get("secure_url").toString();


        facility.setImage(imageUrl);


        return ResponseEntity.ok(service.addFacility(facility, token));
    }


    @GetMapping("/all")
    public ResponseEntity<List<SportFacility>> getAll() {
        return ResponseEntity.ok(service.retrieveAllFacilities());
    }


    @GetMapping("/detail/{id}")
    public ResponseEntity<SportFacility> getById(@PathVariable Long id) {
        return ResponseEntity.ok(service.retrieveFacility(id));
    }


    @PutMapping(value = "/update/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<SportFacility> update(
            @PathVariable Long id,
            @RequestPart("facility") String facilityJson,
            @RequestPart(value = "image", required = false) MultipartFile image,
            @RequestHeader("Authorization") String token
    ) throws IOException {


        SportFacility facility = new ObjectMapper().readValue(facilityJson, SportFacility.class);
        facility.setId(id);
        SportFacility existing = service.findById(id);

        if (image != null && !image.isEmpty()) {

            String oldImageUrl = existing.getImage();
            String publicId = extractPublicIdFromUrl(oldImageUrl);
            cloudinary.uploader().destroy(publicId, ObjectUtils.emptyMap());

            Map uploadResult = cloudinary.uploader().upload(image.getBytes(), ObjectUtils.emptyMap());
            String imageUrl = uploadResult.get("secure_url").toString();
            facility.setImage(imageUrl);
        } else {
            facility.setImage(existing.getImage());
        }

        SportFacility updated = service.updateFacility(facility, token);

        return ResponseEntity.ok(updated);
    }
    private String extractPublicIdFromUrl(String url) {
        String[] parts = url.split("/");
        String fileName = parts[parts.length - 1];
        return fileName.split("\\.")[0];
    }




    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id,
                                       @RequestHeader("Authorization") String token) {


        service.removeFacility(id,token);
        return ResponseEntity.noContent().build();
    }


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

    @GetMapping("/locations")
    public List<String> getDistinctLocations() {
        return service.findDistinctLocations();
    }


    @GetMapping("/sport-types")
    public List<String> getDistinctSportTypes() {
        return service.findDistinctSportTypes();
    }
    @GetMapping("/searchback")
    public ResponseEntity<List<SportFacility>> searchFacilities(@RequestParam("q") String keyword) {
        return ResponseEntity.ok(service.searchFacilitiesByName(keyword));
    }



}
