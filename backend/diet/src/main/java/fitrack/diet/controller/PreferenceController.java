package fitrack.diet.controller;

import fitrack.diet.entity.Preference;
import fitrack.diet.service.PreferenceService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
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
    public ResponseEntity<Preference> createPreference(@RequestBody Preference preference,@RequestHeader("Authorization") String token) {
        System.out.println("Received Preference: " + preference);

        Preference savedPreference = preferenceService.addPreference(preference, token);

        System.out.println("Saved Preference: " + savedPreference);
        return ResponseEntity.ok(savedPreference);
    }

    @GetMapping("/PreferenceByUsername")
    public ResponseEntity<Preference> getPreferencesByUserId(
            @RequestHeader("Authorization") String token) {
        Preference preferences = preferenceService.getPreferencesByUserId(token);
        return ResponseEntity.ok(preferences);
    }



}