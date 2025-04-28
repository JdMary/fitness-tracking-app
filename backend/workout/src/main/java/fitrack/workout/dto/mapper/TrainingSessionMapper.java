package fitrack.workout.dto.mapper;

import fitrack.workout.dto.entity.TrainingSessionDTO;
import fitrack.workout.entity.Exercise;
import fitrack.workout.entity.TrainingSession;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class TrainingSessionMapper{
    private ExerciseMapper exerciseMapper;

        public TrainingSessionMapper(ExerciseMapper exerciseMapper) {
            this.exerciseMapper = exerciseMapper;
        }

        public TrainingSession toEntity(TrainingSessionDTO dto) {
            TrainingSession session = new TrainingSession();
            session.setGuided(dto.isGuided());
            session.setEntryTime(dto.getEntryTime());
            session.setExitTime(dto.getExitTime());

            if (dto.getExercises() != null) {
                List<Exercise> exercises = dto.getExercises().stream()
                        .map(exerciseDto -> {
                            Exercise exercise = exerciseMapper.toEntity(exerciseDto);
                            exercise.setTrainingSession(session);
                            return exercise;
                        })
                        .toList();
                session.setExercises(exercises);
            }

            return session;
        }

    public TrainingSessionDTO toDTO(TrainingSession session) {
        TrainingSessionDTO dto = new TrainingSessionDTO();
        dto.setTrainingSessionId(session.getTrainingSessionId());
        dto.setGuided(session.isGuided());
        dto.setEntryTime(session.getEntryTime());
        dto.setExitTime(session.getExitTime());

        if (session.getWorkoutPlan() != null) {
            dto.setWorkoutPlanId(session.getWorkoutPlan().getWorkoutPlanId());
        }

        if (session.getExercises() != null) {
            dto.setExercises(
                    session.getExercises().stream()
                            .map(exerciseMapper::toDTO)
                            .toList()
            );
            dto.setExercisesCount(session.getExercises().size());
        } else {
            dto.setExercisesCount(0);
        }

        return dto;
    }

}