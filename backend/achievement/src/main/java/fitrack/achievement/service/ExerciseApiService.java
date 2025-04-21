package fitrack.achievement.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@RequiredArgsConstructor
public class ExerciseApiService {

    @Value("${api.ninjas.key}")
    private String apiKey;

    @Value("${api.ninjas.url}")
    private String apiUrl;
    @Autowired
    private RestTemplate restTemplate;

    public JsonNode getExercises(String muscle, String difficulty) {
        HttpHeaders headers = new HttpHeaders();
        headers.set("X-Api-Key", apiKey);
        HttpEntity<Void> entity = new HttpEntity<>(headers);

        StringBuilder url = new StringBuilder(apiUrl);

        boolean hasParam = false;
        if (muscle != null && !muscle.isBlank()) {
            url.append("?muscle=").append(muscle);
            hasParam = true;
        }
        if (difficulty != null && !difficulty.isBlank()) {
            url.append(hasParam ? "&" : "?").append("difficulty=").append(difficulty);
            hasParam = true;
        }

        ResponseEntity<String> response = restTemplate.exchange(
                url.toString(),
                HttpMethod.GET,
                entity,
                String.class
        );

        try {
            ObjectMapper mapper = new ObjectMapper();
            return mapper.readTree(response.getBody());
        } catch (Exception e) {
            throw new RuntimeException("Erreur lecture JSON", e);
        }
    }
}