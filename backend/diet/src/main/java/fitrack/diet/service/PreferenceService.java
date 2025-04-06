package fitrack.diet.service;

import fitrack.diet.client.AuthClient;
import fitrack.diet.entity.Preference;
import fitrack.diet.entity.User;
import fitrack.diet.repository.PreferenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import java.util.HashSet;
import java.util.List;

@Service
public  class PreferenceService implements IPreferenceService {
    @Autowired
    private PreferenceRepository preferenceRepository;
    @Autowired
    private AuthClient authClient;

    public List<Preference> getPreferencesByUserId(String token) {
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        return preferenceRepository.findByUsername(username);
    }

    @Override
    public Preference addPreference(Preference preference ,String token) {
        Preference savedPreference = preferenceRepository.save(preference);
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        savedPreference.setUsername(username);
        savedPreference.setMealTypes(preference.getMealTypes());
        return preferenceRepository.save(savedPreference);

    }


}
