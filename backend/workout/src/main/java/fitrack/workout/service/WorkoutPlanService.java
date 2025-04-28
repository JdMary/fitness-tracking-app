package fitrack.workout.service;


import fitrack.workout.client.AuthClient;
import fitrack.workout.dto.mapper.ProgressTrackerMapper;
import fitrack.workout.dto.mapper.WorkoutPlanMapper;
import fitrack.workout.entity.Exercise;
import fitrack.workout.entity.ProgressTracker;
import fitrack.workout.entity.TrainingSession;
import fitrack.workout.entity.WorkoutPlan;
import fitrack.workout.repository.ExerciseRepository;
import fitrack.workout.repository.ProgressTrackerRepository;
import fitrack.workout.repository.TrainingSessionRepository;
import fitrack.workout.repository.WorkoutPlanRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
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
    private ExerciseRepository exerciseRepository;
    @Autowired
    private AuthClient authClient;


    @Override
    public WorkoutPlan createWorkoutPlan(WorkoutPlan plan, String token) {
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        plan.setUsername(username);
        WorkoutPlan savedplan=repository.save(plan);
        ProgressTracker progressTracker = new ProgressTracker();
        progressTracker.setUsername(username);
        progressTracker.setWorkoutPlan(plan);
        progressTracker.setBurnedCalories(0);
        progressTracker.setCompletionPercentage(0);
        progressTracker.setTotalExercisesCompleted(0);
        progressTracker.setTotalSetsCompleted(0);
        progressTracker.setTotalRepsCompleted(0);
        progressTracker.setDate(LocalDate.now());
        plan.setProgressTracker(progressTracker);
        repositoryProgress.save(progressTracker);
        savedplan.setProgressTracker(progressTracker);
        return repository.save(savedplan);
    }

    @Override
    public WorkoutPlan getWorkoutPlanById(Long id) {
       return repository.findById(id).get();
    }

   /* @Override
    public WorkoutPlan getWorkoutPlanById(Long id, String token) {
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        repository.findByUsername(username)
        return null;
    }*/



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
    public List<WorkoutPlan> getAllPlans(String token) {
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        return repository.findByUsername(username);
    }

    @Override
    public List<WorkoutPlan> getAllPlansAdmin(String token) {
       return repository.findAll();
    }

    @Transactional
    @Override
    public void deleteWorkoutPlan(Long id, String token) {
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        WorkoutPlan workoutPlan = repository.findByWorkoutPlanIdAndUsername(id, username).get();
        repository.delete(workoutPlan);

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
    public WorkoutPlan createFullWorkoutPlan(WorkoutPlan plan, String token) {
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        plan.setUsername(username);
        return repository.save(plan);
    }

    @Scheduled(fixedRate = 60000)
    public void updateWorkoutPlanStatus() {
        System.out.printf("updateWorkoutPlanStatus");
        List<WorkoutPlan> plans = repository.findAll();
        for (WorkoutPlan plan : plans) {
            List<TrainingSession> sessions = trainingSessionRepository.findByWorkoutPlanId(plan.getWorkoutPlanId());

            boolean hasPastSessions = sessions.stream()
                    .anyMatch(session -> session.getExitTime() != null && session.getExitTime().isBefore(LocalDateTime.now()));

            if (hasPastSessions) {
                plan.setStatus("COMPLETED");
                repository.save(plan);
            }
        }
    }

    public List<ProgressTracker> getProgressTrackersByWorkoutPlan(Long workoutid,String token){
        String username = String.valueOf(authClient.extractUsername(token).getBody());

        return repository.findProgressTrackerByWorkoutPlanIdAndUsername(workoutid,username);
    }

}
