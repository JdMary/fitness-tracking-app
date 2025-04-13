package fitrack.workout.service;


import fitrack.workout.client.AuthClient;
import fitrack.workout.dto.mapper.ProgressTrackerMapper;
import fitrack.workout.dto.mapper.WorkoutPlanMapper;
import fitrack.workout.entity.ProgressTracker;
import fitrack.workout.entity.WorkoutPlan;
import fitrack.workout.repository.ProgressTrackerRepository;
import fitrack.workout.repository.TrainingSessionRepository;
import fitrack.workout.repository.WorkoutPlanRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class WorkoutPlanService implements IWorkoutPlan {
    @Autowired
    private WorkoutPlanRepository repository;
    @Autowired
    private ProgressTrackerRepository repositoryProgress;
    @Autowired
    private TrainingSessionRepository trainingSessionRepository;
    @Autowired
    private WorkoutPlanMapper workoutPlanMapper;
    @Autowired
    private ProgressTrackerMapper progressTrackerMapper;
    @Autowired
    private AuthClient authClient;


    @Override
    public WorkoutPlan createWorkoutPlan(WorkoutPlan plan) {
        return repository.save(plan);
    }

    @Override
    public WorkoutPlan getWorkoutPlanById(Long id) {
        return repository.findById(id).get();
    }

    @Override
    public WorkoutPlan updateWorkoutPlan(Long id, WorkoutPlan plan) {
        WorkoutPlan existing = this.getWorkoutPlanById(id);
        BeanUtils.copyProperties(plan, existing, "workplanId");//il accepte que string thats why
        //jai utilise bean utils dependency in order to copy automatically instead of manually doing it the updated fields
        //existing.setProgressTracker(plan.getProgressTracker());
        //existing.setTrainingSessions(plan.getTrainingSessions());
        return repository.save(existing);
    }

    @Override
    public List<WorkoutPlan> getAllPlans() {
        return repository.findAll();
    }

    @Override
    public void deleteWorkoutPlan(Long id) {
        repository.deleteById(id);
    }

    @Override
    public WorkoutPlan assignWorkoutPlanToTrainingSession(WorkoutPlan wp, String token) {
        WorkoutPlan savedPlan = repository.save(wp);
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        System.out.println("username: " + username);
        savedPlan.getTrainingSessions().forEach(trainingSession -> {
            trainingSession.setWorkoutPlan(savedPlan);
            trainingSession.setUsername(username);
            System.out.println(trainingSession);
            trainingSessionRepository.save(trainingSession);
        });
        return savedPlan;

    }

    @Override
    public WorkoutPlan assignProgressToWorkoutPlanToUser(ProgressTracker progress, Long idWorkoutPlan, String token) {
        WorkoutPlan existingWorkoutPlan = repository.findById(idWorkoutPlan).get();

        String username = String.valueOf(authClient.extractUsername(token).getBody());
        progress.setUsername(username);

        progress.setWorkoutPlan(existingWorkoutPlan);
        existingWorkoutPlan.setProgressTracker(progress);
        repositoryProgress.save(progress);
        repository.save(existingWorkoutPlan);
        return existingWorkoutPlan;
    }

    @Override
    public WorkoutPlan createFullWorkoutPlan(WorkoutPlan plan) {
        return null;
    }


}
