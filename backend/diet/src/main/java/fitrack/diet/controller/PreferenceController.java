package fitrack.diet.controller;

import fitrack.diet.entity.DietPlan;
import fitrack.diet.entity.Preference;
import fitrack.diet.service.PreferenceService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/diets/preference")
@AllArgsConstructor
public class PreferenceController {
    @Autowired
    private PreferenceService preferenceService;

    @PostMapping("/add")
    public ResponseEntity<?> createPreference(@RequestBody Preference preference, @RequestHeader("Authorization") String token) {
        try {
            if (preference == null) {
                return ResponseEntity.badRequest().body("Preference object cannot be null");
            }
            
            System.out.println("Processing preference update for token: " + token);

            Preference updatedPreference = preferenceService.addPreference(preference, token);
            System.out.println("Preference successfully updated: " + updatedPreference);
            
            return ResponseEntity.ok(updatedPreference);
        } catch (Exception e) {
            System.err.println("Error processing preference: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error processing preference: " + e.getMessage());
        }
    }

    @GetMapping("/PreferenceByUsername")
    public ResponseEntity<Preference> getPreferencesByUserId(
            @RequestHeader("Authorization") String token) {
        try {
            if (token == null || !token.startsWith("Bearer ")) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            Preference preferences = preferenceService.getPreferencesByUserId(token);
            if (preferences == null) {
                return ResponseEntity.notFound().build();
            }
            return ResponseEntity.ok(preferences);
        } catch (Exception e) {
            System.err.println("Error getting preferences: " + e.getMessage());
            e.printStackTrace(); // Add stack trace for debugging
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/PreferencesList")
    public ResponseEntity<List<Preference>> getPreferenceList() {
        List<Preference> preferences = preferenceService.getPrefrenceList();
        return new ResponseEntity<>(preferences, HttpStatus.OK);
    }
    @PutMapping("/update/{preferenceId}")
    public ResponseEntity<?> updatePreference(
            @PathVariable String preferenceId,
            @RequestBody Preference preference,
            @RequestHeader("Authorization") String token) {
        try {
            if (preference == null) {
                return ResponseEntity.badRequest().body("Preference object cannot be null");
            }

            System.out.println("Updating preference with ID: " + preferenceId);

            Preference updatedPreference = preferenceService.updatePreference(preferenceId, preference, token);
            return ResponseEntity.ok(updatedPreference);

        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            System.err.println("Error updating preference: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error updating preference: " + e.getMessage());
        }
    }

}