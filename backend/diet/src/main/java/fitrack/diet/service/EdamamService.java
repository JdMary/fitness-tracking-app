package fitrack.diet.service;

import fitrack.diet.client.EdamamClient;
import fitrack.diet.entity.DTO.EdamamPlanResponse;
import fitrack.diet.entity.MealPlanRequest;
import fitrack.diet.entity.Preference;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@EnableFeignClients
public class EdamamService {
    @Autowired
    private EdamamClient edamamClient;
    @Value("${edamam.app.id}")
    private String edamamAppId;

    @Value("${edamam.app.key}")
    private String edamamAppKey;

    @Value("${edamam.account.user}")
    private String EdamamAccountUser;


    public EdamamPlanResponse directEdamamRequest(
            String appId,
            String appIdQuery,
            String appKey,
            String userId,
            List<String> dietLabels,
            List<String> healthLabels,
            List<String> cuisineTypes,
            List<String> mealTypes) {

        try {
            Map<String, Object> requestBody = new HashMap<>();
            requestBody.put("size", 1);

            Map<String, Object> plan = new HashMap<>();
            Map<String, Object> sections = new HashMap<>();

            Map<String, Object> breakfastSection = new HashMap<>();
            Map<String, Object> accept = new HashMap<>();
            accept.put("meal", List.of("breakfast"));
            breakfastSection.put("accept", accept);
            sections.put("Breakfast", breakfastSection);

            if (mealTypes != null && mealTypes.size() > 1) {
                for (String mealType : mealTypes) {
                    if (!mealType.equalsIgnoreCase("breakfast")) {
                        Map<String, Object> mealSection = new HashMap<>();
                        Map<String, Object> mealAccept = new HashMap<>();
                        mealAccept.put("meal", List.of(mealType.toLowerCase()));
                        mealSection.put("accept", mealAccept);

                        String sectionKey = mealType.substring(0, 1).toUpperCase() + mealType.substring(1).toLowerCase();
                        sections.put(sectionKey, mealSection);
                    }
                }
            }

            plan.put("sections", sections);
            requestBody.put("plan", plan);

            System.out.println("Request Body: " + requestBody);

            ResponseEntity<EdamamPlanResponse> response = edamamClient.selectMealPlan(
                    appId,
                    appIdQuery,
                    appKey,
                    "public",
                    requestBody,
                    dietLabels,
                    healthLabels,
                    cuisineTypes,
                    null,
                    userId
            );

            if (response.getStatusCode().is2xxSuccessful()) {
                return response.getBody();
            } else {
                System.err.println("Error response from Edamam API: " + response.getStatusCode());
                return null;
            }
        } catch (Exception e) {
            System.err.println("Error while calling Edamam API: " + e.getMessage());
            e.printStackTrace();
            return null;
        }
    }
}
