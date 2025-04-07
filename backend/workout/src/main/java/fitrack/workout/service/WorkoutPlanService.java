package fitrack.workout.service;


import fitrack.workout.dto.entity.ProgressTrackerDTO;
import fitrack.workout.dto.entity.WorkoutPlanDTO;
import fitrack.workout.dto.mapper.ProgressTrackerMapper;
import fitrack.workout.dto.mapper.WorkoutPlanMapper;
import fitrack.workout.entity.ProgressTracker;
import fitrack.workout.entity.TrainingSession;
import fitrack.workout.entity.WorkoutPlan;
import fitrack.workout.repository.ProgressTrackerRepository;
import fitrack.workout.repository.TrainingSessionRepository;
import fitrack.workout.repository.WorkoutPlanRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class WorkoutPlanService implements IWorkoutPlan{
    @Autowired
    private  WorkoutPlanRepository repository;
    @Autowired
    private ProgressTrackerRepository repositoryProgress;
    @Autowired
    private TrainingSessionRepository trainingSessionRepository;
    @Autowired
    private WorkoutPlanMapper workoutPlanMapper;
    @Autowired
    private ProgressTrackerMapper progressTrackerMapper;


   /* @Override
    public WorkoutPlan createWorkoutPlan(WorkoutPlan plan) {
       return repository.save(plan);
    }

    @Override
    public WorkoutPlanDTO createWorkoutPlanDTO(WorkoutPlanDTO dto) {
        WorkoutPlan wp=workoutPlanMapper.toEntity(dto);
        WorkoutPlan saved=repository.save(wp);
        return workoutPlanMapper.toDTO(saved);
    }


    @Override
    public WorkoutPlan getWorkoutPlanById(Long id) {
        return repository.findById(id).get();
    }

    @Override
    public List<WorkoutPlanDTO> getAllPlans() {
        return repository.findAll()
                .stream()
                .map(workoutPlanMapper::toDTO)
                .collect(Collectors.toList());
    }*/





   /* @Override
    public List<WorkoutPlan> getAllWorkoutPlans() {
        return repository.findAll();
    }*/



   /* @Override
    public WorkoutPlan updateWorkoutPlan(Long id, WorkoutPlan plan) {
        WorkoutPlan existing = this.getWorkoutPlanById(id);
        BeanUtils.copyProperties(plan,existing,"workplanId");//il accepte que string thats why
        //jai utilise bean utils dependency in order to copy automatically instead of manually doing it the updated fields
        //existing.setProgressTracker(plan.getProgressTracker());
        //existing.setTrainingSessions(plan.getTrainingSessions());
        return repository.save(existing);
    }*/


    @Override
    public WorkoutPlanDTO createWorkoutPlanDTO(WorkoutPlanDTO dto) {
        WorkoutPlan entity = workoutPlanMapper.toEntity(dto);
        WorkoutPlan saved = repository.save(entity);
        return workoutPlanMapper.toDTO(saved);
    }

    @Override
    public WorkoutPlanDTO getWorkoutPlanById(Long id) {
        return repository.findById(id)
                .map(workoutPlanMapper::toDTO).get();
    }

    @Override
    public List<WorkoutPlanDTO> getAllPlans() {
        return repository.findAll()
                .stream()
                .map(workoutPlanMapper::toDTO)
                .collect(Collectors.toList());    }

    @Override
    public WorkoutPlanDTO updateWorkoutPlan(Long id, WorkoutPlanDTO dto) {
        WorkoutPlan existing = repository.findById(id).get();

        existing.setDescription(dto.getDescription());
        existing.setDuration(dto.getDuration());
        existing.setStartDate(dto.getStartDate());
        existing.setStatus(dto.getStatus());
        existing.setDifficulty(dto.getDifficulty());


        WorkoutPlan updated = repository.save(existing);
        return workoutPlanMapper.toDTO(updated);
    }

    @Override
    public void deleteWorkoutPlan(Long id) {
        repository.deleteById(id);
    }

    @Override
    public WorkoutPlan assignWorkoutPlanToTrainingSession(WorkoutPlan wp) {
        WorkoutPlan savedPlan = repository.save(wp);
        savedPlan.getTrainingSessions().forEach(trainingSession -> {
            trainingSession.setWorkoutPlan(savedPlan);
            trainingSessionRepository.save(trainingSession);
        });
        return savedPlan;
    }

    @Override
    public WorkoutPlan assignProgressToWorkoutPlan(ProgressTracker progress, Long idWorkoutPlan) {
        WorkoutPlan existingWorkoutPlan = repository.findById(idWorkoutPlan).get();
        ProgressTracker progressTracker = repositoryProgress.save(progress);
        existingWorkoutPlan.setProgressTracker(progressTracker);
        repository.save(existingWorkoutPlan);
        return existingWorkoutPlan;

    }


   /* @Override
    public WorkoutPlan assignProgressToWorkoutPlan(ProgressTracker progress, Long idWorkoutPlan) {
        //create independently objects the màj le fk
        WorkoutPlan existingWorkoutPlan = this.getWorkoutPlanById(idWorkoutPlan);
        ProgressTracker progressTracker = repositoryProgress.save(progress);
        existingWorkoutPlan.setProgressTracker(progressTracker);
        repository.save(existingWorkoutPlan);
        return existingWorkoutPlan;

    }*/

   /* @Override
    public WorkoutPlan assignWorkoutPlanToTrainingSession(WorkoutPlan wp) {
        WorkoutPlan savedPlan = repository.save(wp);
        savedPlan.getTrainingSessions().forEach(trainingSession -> {
            trainingSession.setWorkoutPlan(savedPlan);
            trainingSessionRepository.save(trainingSession);
        });
        return savedPlan;
    }*/


}
