package fitrack.diet.service;

import fitrack.diet.entity.Preference;
import fitrack.diet.repository.PreferenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public  class PreferenceService implements IPreferenceService {
    @Autowired
    private PreferenceRepository preferenceRepository;
//    @Autowired
//    private final RestTemplate restTemplate;

   // @Transactional

//    @Override
//
//    public Preference savePreference(Preference preference) {
//
//        Preference savedPreference = preferenceRepository.save(preference);
//
//        System.out.println("Saved Preference: " + savedPreference);
//        return savedPreference;
//    }
//
//
//    @Override
//    public Preference updatePreference(String preferenceId, Preference preference) {
//        return null;
//    }
//
//    @Override
//    public List<Preference> getUserPreferences(String userId) {
//        return List.of();
//    }
//
//
////    @Override
////    public List<Preference> getUserPreferences(String userId) {
////        return preferenceRepository.findByUserId(userId);
////    }
//
//    @Override
//    public Preference getPreferenceById(String preferenceId) {
//        return null;
//    }
//
//    @Override
//    public Preference getPreferenceByUserIdAndTimeFrame(String userId, String timeFrame) {
//        return null;
//    }
//
//    @Override
//    public void deletePreference(Long preferenceId) {
//
//    }
//
//    @Override
//    public ResponseEntity<String> getMealPlan(String userId) {
//        return null;
//    }

//
//    public PreferenceService(RestTemplate restTemplate) {
//        this.restTemplate = restTemplate;
//    }
@Override
    public Preference addPreference(Preference preference) {
        return preferenceRepository.save(preference);

    }

//    @Value("${user.service.url}")
//    private String userServiceUrl;

    @Value("${edamam.app.id}")
    private String appId;

    @Value("${edamam.app.key}")
    private String appKey;

//    public ResponseEntity<String> getMealPlan(String userId) {
//        // First, get the user's preferences from your repository
//        Preference userPreference = preferenceRepository.findByUserId(userId)
//                .orElseThrow(() -> new RuntimeException("User preferences not found"));
//
//        RestTemplate restTemplate = new RestTemplate();
//        HttpHeaders headers = new HttpHeaders();
//        headers.set("Edamam-Account-User", userId);
//
//        // Build URL with all needed parameters
//        UriComponentsBuilder uriBuilder = UriComponentsBuilder.fromHttpUrl(
//                        "https://api.edamam.com/api/recipes/v2")
//                .queryParam("type", "public")
//                .queryParam("app_id", appId)
//                .queryParam("app_key", appKey)
//                .queryParam("calories", userPreference.getTargetCalories())
//                .queryParam("mealType", userPreference.getTimeFrame());
//
//        // if (userPreference.getDiet() != null && !userPreference.getDiet().isEmpty()) {
//        //     uriBuilder.queryParam("diet", String.join(",", userPreference.getDiet()));
//        // }
//
//        HttpEntity<String> entity = new HttpEntity<>(headers);
//        return restTemplate.exchange(
//                uriBuilder.toUriString(),
//                HttpMethod.GET,
//                entity,
//                String.class
//        );
//    }










//    public ResponseEntity<String> getMealPlan(String user) {
//        RestTemplate restTemplate = new RestTemplate();
//        HttpHeaders headers = new HttpHeaders();
//        headers.set("Edamam-Account-User", user); // If required
//
//        String apiUrl = "https://api.edamam.com/api/recipes/v2?type=public&app_id={appId}&app_key={appKey}";
//
//        Map<String, String> params = new HashMap<>();
//        params.put("appId", appId);
//        params.put("appKey", appKey);
//
//        HttpEntity<String> entity = new HttpEntity<>(headers);
//        return restTemplate.exchange(
//                apiUrl,
//                HttpMethod.GET,
//                entity,
//                String.class,
//                params
//        );
//    }
}
