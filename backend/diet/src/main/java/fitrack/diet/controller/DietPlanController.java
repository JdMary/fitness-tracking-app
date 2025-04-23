package fitrack.diet.controller;

import fitrack.diet.entity.DietPlan;
import fitrack.diet.service.DietPlanService;
import fitrack.diet.service.EdamamService;
import jakarta.ws.rs.HeaderParam;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/diets/plan")
@AllArgsConstructor
public class DietPlanController<DietPlanRequest> {
    private DietPlanService dietPlanService;
    private EdamamService edamamService;


    @PostMapping("/generate")
    public ResponseEntity<DietPlan> generateDietPlan(
            @RequestHeader("Authorization") String token,
            @RequestBody DietPlan dietPlan) {

        DietPlan generatedPlan = edamamService.generateAndSaveMealPlan(token, dietPlan);
        System.out.println("el generated dietplan eli baathha adamam: "+generatedPlan);
        return ResponseEntity.ok(generatedPlan);
    }







    /// /////////////////////
//    @PostMapping("/edamam/{app_id}")
//    public ResponseEntity<EdamamPlanResponse> getEdamamMealPlan(
//            @PathVariable String app_id,
//            @RequestParam String app_idQuery,
//            @RequestParam String app_key,
//            @RequestHeader String EdamamAccountUser,
//            @RequestBody Map<String, Object> requestBody,
//            @RequestParam(required = false) List<String> diet,
//            @RequestParam(required = false) List<String> health,
//            @RequestParam(required = false) List<String> cuisineType,
//            @RequestParam(required = false) List<String> mealType) {
//        List<String> mealTypeList = mealType != null ? mealType : List.of("breakfast");
//
//        EdamamPlanResponse response = edamamService.directEdamamRequest(
//                app_id, app_idQuery,app_key,EdamamAccountUser, diet, health, cuisineType, mealTypeList);
//        return ResponseEntity.ok(response);
//    }


    @PostMapping("/addDiet")
    public ResponseEntity<DietPlan> createDietPlan(@RequestBody DietPlan dietPlan,@RequestHeader("Authorization") String token) {
        DietPlan createdDietPlan = dietPlanService.createDietPlan(dietPlan,token);
        return new ResponseEntity<>(createdDietPlan, HttpStatus.CREATED);
    }

    @GetMapping("/DietPlanList")
    public ResponseEntity<List<DietPlan>> getDietPlanList() {
        List<DietPlan> dietPlans = dietPlanService.getDietPlanList();
        return new ResponseEntity<>(dietPlans, HttpStatus.OK);
    }

    @GetMapping("/DietPlanDetail/{id}")
    public ResponseEntity<Optional<DietPlan>> getDietPlanDetail(@PathVariable Long id) {
        Optional<DietPlan> dietPlan = dietPlanService.getDietPlanById(id);
        return new ResponseEntity<>(dietPlan, HttpStatus.OK);
    }

    @GetMapping("/DietPlanByUsername")
    public ResponseEntity<DietPlan> getDietPlanByUserId(
            @RequestHeader("Authorization") String token) {
        try {
            if (token == null || !token.startsWith("Bearer ")) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }
            DietPlan dietPlan = dietPlanService.getDietPlanByUserId(token);
            if (dietPlan == null) {
                return ResponseEntity.notFound().build();
            }
            return ResponseEntity.ok(dietPlan);
        } catch (Exception e) {
            System.err.println("Error getting dietPlan: " + e.getMessage());
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}