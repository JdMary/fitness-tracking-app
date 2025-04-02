package fitrack.diet.controller;

import fitrack.diet.entity.Preference;
import fitrack.diet.service.PreferenceService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/diets/preference")
@AllArgsConstructor
public class PreferenceController {
    @Autowired
    private PreferenceService preferenceService;

    @PostMapping("/add")
    public ResponseEntity<Preference> createPreference(@RequestBody Preference preference) {
        System.out.println("Received Preference: " + preference); // Debugging

        Preference savedPreference = preferenceService.addPreference(preference);

        System.out.println("Saved Preference: " + savedPreference);
        return ResponseEntity.ok(savedPreference);
    }
//    @PostMapping("/generate")
//    public ResponseEntity<Long> generateMealPlan(
//            @RequestHeader("Edamam-Account-User") Long user
//    ) {
//        return preferenceService.getMealPlan(user);
//    }

    // Optional: Add error handling
    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleApiErrors(Exception ex) {
        return ResponseEntity.internalServerError()
                .body("Error fetching meal plan: " + ex.getMessage());
    }

}