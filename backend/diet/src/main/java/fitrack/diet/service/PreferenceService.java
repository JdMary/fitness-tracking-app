package fitrack.diet.service;

import fitrack.diet.client.AuthClient;
import fitrack.diet.entity.Preference;
import fitrack.diet.repository.PreferenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PreferenceService implements IPreferenceService {
    @Autowired
    private PreferenceRepository preferenceRepository;
    @Autowired
    private AuthClient authClient;

    public Preference getPreferencesByUserId(String token) {
        try {
            String username = String.valueOf(authClient.extractUsername(token).getBody());
            System.out.println("Fetching preferences for username: " + username);
            return preferenceRepository.findByUsername(username);
        } catch (Exception e) {
            System.err.println("Error in getPreferencesByUserId: " + e.getMessage());
            e.printStackTrace();
            throw e;
        }
    }

    public List<Preference> getPrefrenceList() {
        List<Preference> preferences = preferenceRepository.findAll();
        return preferences;
    }

    @Override
    @Transactional
        public Preference addPreference(Preference preference ,String token) {
            Preference savedPreference = preferenceRepository.save(preference);
            String username = String.valueOf(authClient.extractUsername(token).getBody());
            savedPreference.setUsername(username);
            savedPreference.setMealTypes(preference.getMealTypes());
        savedPreference.setDietLabel(preference.getDietLabel());
        savedPreference.setHealthLabels(preference.getHealthLabels());
        savedPreference.setDishTypes(preference.getDishTypes());
            return preferenceRepository.save(savedPreference);
    }


    @Override
    public Preference updatePreference(String preferenceId, Preference preference, String token) {
        if (token == null || !token.startsWith("Bearer ")) {
            throw new IllegalArgumentException("Invalid token");
        }

        Preference existingPreference = preferenceRepository.findById(preferenceId)
                .orElseThrow(() -> new IllegalArgumentException("Preference not found with ID: " + preferenceId));

        // Update only the fields you care about
        existingPreference.setDietLabel(preference.getDietLabel());
        existingPreference.setMealTypes(preference.getMealTypes());
        existingPreference.setHealthLabels(preference.getHealthLabels());
        existingPreference.setDishTypes(preference.getDishTypes());


        // Add more fields if needed like:
        // existingPreference.setMinCalories(preference.getMinCalories());

        return preferenceRepository.save(existingPreference);
    }


}
