package fitrack.workout.dto.mapper;

import fitrack.workout.dto.entity.WorkoutPlanDTO;
import fitrack.workout.entity.TrainingSession;
import fitrack.workout.entity.WorkoutPlan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component

public class WorkoutPlanMapper {
    @Autowired
    private TrainingSessionMapper sessionMapper;

    public WorkoutPlanMapper(TrainingSessionMapper sessionMapper) {
        this.sessionMapper = sessionMapper;
    }

    public WorkoutPlan toEntity(WorkoutPlanDTO dto) {
        WorkoutPlan plan = new WorkoutPlan();
        plan.setDescription(dto.getDescription());
        plan.setDuration(dto.getDuration());
        plan.setStartDate(dto.getStartDate());
        plan.setStatus(dto.getStatus());
        plan.setDifficulty(dto.getDifficulty());

        if (dto.getTrainingSessions() != null) {
            List<TrainingSession> sessions = dto.getTrainingSessions().stream()
                    .map(sessionDto -> {
                        TrainingSession session = sessionMapper.toEntity(sessionDto);
                        session.setWorkoutPlan(plan);
                        return session;
                    })
                    .toList();
            plan.setTrainingSessions(sessions);
        }

        return plan;
    }

    public WorkoutPlanDTO toDTO(WorkoutPlan plan) {
        WorkoutPlanDTO dto = new WorkoutPlanDTO();
        dto.setDescription(plan.getDescription());
        dto.setDuration(plan.getDuration());
        dto.setStartDate(plan.getStartDate());
        dto.setStatus(plan.getStatus());
        dto.setDifficulty(plan.getDifficulty());

        if (plan.getTrainingSessions() != null) {
            dto.setTrainingSessions(
                    plan.getTrainingSessions().stream()
                            .map(sessionMapper::toDTO)
                            .toList()
            );
        }

        return dto;
    }
}
