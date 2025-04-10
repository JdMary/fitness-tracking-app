package fitrack.diet.service;


import fitrack.diet.client.AuthClient;
import fitrack.diet.client.EdamamClient;
import fitrack.diet.entity.DTO.EdamamPlanResponse;
import fitrack.diet.entity.DietPlan;
import fitrack.diet.entity.Preference;
import fitrack.diet.repository.DietPlanRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@EnableFeignClients
public class DietPlanService {
    @Autowired
    private DietPlanRepository dietPlanRepository;
    @Autowired
    private AuthClient authClient;
    @Autowired
    private EdamamClient edamamClient;
    @Value("${edamam.app.id}")
    String edamamAppId;
    @Value("${edamam.app.key}")
    String edamamAppKey;
    @Value("${edamam.account.user}")
    String edamamAccountUser;

    public DietPlan getDietPlanByUserId(String token) {
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        return dietPlanRepository.findByUsername(username);
    }

    public DietPlan createDietPlan(DietPlan dietPlan,String token) {
        dietPlan.setCreatedAt(java.time.LocalDateTime.now());
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        dietPlan.setUsername(username);
        return dietPlanRepository.save(dietPlan);
    }



}
