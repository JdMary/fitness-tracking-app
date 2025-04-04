package fitrack.workout.service;


import fitrack.workout.entity.WorkoutPlan;
import fitrack.workout.repository.WorkoutPlanRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class WorkoutPlanService implements IWorkoutPlan{
    @Autowired
    private  WorkoutPlanRepository repository;
    @Override
    public WorkoutPlan createWorkoutPlan(WorkoutPlan plan) {
        return repository.save(plan);
    }

    @Override
    public WorkoutPlan getWorkoutPlanById(Long id) {
        return repository.findById(id).get();
    }

    @Override
    public List<WorkoutPlan> getAllWorkoutPlans() {
        return repository.findAll();
    }

    @Override
    public WorkoutPlan updateWorkoutPlan(Long id, WorkoutPlan plan) {
        WorkoutPlan existing = this.getWorkoutPlanById(id);
        BeanUtils.copyProperties(plan,existing,"workplanId");//il accepte que string thats why
        //jai utilise bean utils dependency in order to copy automatically instead of manually doing it the updated fields
        //existing.setProgressTracker(plan.getProgressTracker());
        //existing.setTrainingSessions(plan.getTrainingSessions());
        return repository.save(existing);
    }

    @Override
    public void deleteWorkoutPlan(Long id) {
        repository.deleteById(id);
    }

}
