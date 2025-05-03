package fitrack.workout.service;

import fitrack.workout.dto.entity.ExerciseDetailsDto;
import fitrack.workout.dto.entity.WgerExerciseResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WgerApiService {
    @Autowired
    private RestTemplate restTemplate;

    private static final String BASE_URL = "https://wger.de/api/v2/";

    public ExerciseDetailsDto getExerciseDetails(String exerciseName) {
        String url = BASE_URL + "exercise/?language=2&name=" + exerciseName;
        System.out.println("url: " + url);
        ResponseEntity<WgerExerciseResponse> response = restTemplate.getForEntity(url, WgerExerciseResponse.class);
        System.out.printf("WgerExerciseResponse "+url, WgerExerciseResponse.class);
        if (response.getStatusCode().is2xxSuccessful() && response.getBody() != null && !response.getBody().getResults().isEmpty()) {
            System.out.println(response.getBody().getResults().get(0));
                return response.getBody().getResults().get(0); // get the first match
        }
        return null;
    }
}
