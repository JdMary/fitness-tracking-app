package fitrack.diet.service;


import fitrack.diet.client.EdamamClient;
import fitrack.diet.entity.DTO.EdamamPlanResponse;
import fitrack.diet.repository.DietPlanRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@EnableFeignClients
public class DietPlanService {
    private DietPlanRepository repository;

    private EdamamClient edamamClient;
    @Value("${edamam.app.id}")
    private String edamamAppId;

    @Value("${edamam.app.key}")
    private String edamamAppKey;




}
