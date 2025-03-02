package fitrack.workout.service;


import fitrack.workout.repository.WorkoutPlanRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class WorkoutPlanService {
    private WorkoutPlanRepository repository;

}
