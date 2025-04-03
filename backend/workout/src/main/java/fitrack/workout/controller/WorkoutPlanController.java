package fitrack.workout.controller;

import fitrack.workout.service.WorkoutPlanService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/workout/plan")
@AllArgsConstructor
public class WorkoutPlanController {

    private WorkoutPlanService service;
}
