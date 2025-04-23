package fitrack.diet.service;


import fitrack.diet.client.AuthClient;
import fitrack.diet.client.EdamamClient;
import fitrack.diet.entity.DietPlan;
import fitrack.diet.entity.Meal;
import fitrack.diet.entity.enumPreference.PlanStatus;
import fitrack.diet.repository.DietPlanRepository;
import fitrack.diet.service.MealService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;
import java.util.Optional;
import java.util.Map;

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
    @Autowired
    private MealService mealService;
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

    public Optional<DietPlan> getDietPlanById(Long id) {
        return dietPlanRepository.findById(id);
    }

    public List<DietPlan> getDietPlanList() {
        List<DietPlan> plans = dietPlanRepository.findAll();
        System.out.println("Retrieved " + plans.size() + " diet plans from database");
        plans.forEach(plan -> System.out.println("Plan ID: " + plan.getDietPlanId()));
        return plans;
    }



    public DietPlan createDietPlan(DietPlan dietPlan,String token) {
        //dietPlan.setCreatedAt(java.time.LocalDateTime.now());
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        dietPlan.setUsername(username);
        DietPlan existingPlan = dietPlanRepository.findByUsername(username);
        if (existingPlan != null) {
            existingPlan.setNumberOfDays(dietPlan.getNumberOfDays());
            existingPlan.setCalorieTarget(dietPlan.getCalorieTarget());
            existingPlan.setTargetProtein(dietPlan.getTargetProtein());
            existingPlan.setTargetCarbs(dietPlan.getTargetCarbs());
            existingPlan.setStatus(dietPlan.getStatus());

            return dietPlanRepository.save(existingPlan);
        }else {
            dietPlan.setCreatedAt(java.time.LocalDateTime.now());
            return dietPlanRepository.save(dietPlan);
        }
    }

    @Scheduled(fixedRate = 1200)
    public void dietPlanDate() {
        List<DietPlan> plans = dietPlanRepository.findAll();

        for (DietPlan dietPlan : plans) {
            if (dietPlan == null || dietPlan.getStartDate() == null || dietPlan.getNumberOfDays() == null) {
                continue;
            }
            LocalDate startDate = dietPlan.getStartDate().toInstant()
                    .atZone(ZoneId.systemDefault())
                    .toLocalDate();
            LocalDate endDate = startDate.plusDays(dietPlan.getNumberOfDays());

            if (endDate.isBefore(LocalDate.now()) && dietPlan.getStatus() != PlanStatus.ARCHIVED) {
                dietPlan.setStatus(PlanStatus.ARCHIVED);
                dietPlanRepository.save(dietPlan);
            }
        }
    }

    public Map<String, Object> compareDietPlanWithMeals(Long dietPlanId) {
        Optional<DietPlan> dietPlanOptional = dietPlanRepository.findById(dietPlanId);
        if (dietPlanOptional.isEmpty()) {
            throw new IllegalArgumentException("DietPlan not found with ID: " + dietPlanId);
        }

        DietPlan dietPlan = dietPlanOptional.get();
        List<Meal> meals = mealService.getMealsByUser(dietPlan.getUsername());
        return mealService.compareDailyNutrientPreferences(dietPlan, meals);
    }






}
