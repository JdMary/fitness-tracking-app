package fitrack.workout.dto.mapper;

import fitrack.workout.dto.entity.ExerciseDTO;
import fitrack.workout.entity.Exercise;
import fitrack.workout.entity.TrainingSession;
import org.springframework.stereotype.Component;

@Component
public class ExerciseMapper {
    public Exercise toEntity(ExerciseDTO dto) {
        return toEntity(dto, null);
    }

    public Exercise toEntity(ExerciseDTO dto, TrainingSession parentSession) {
        Exercise exercise = new Exercise();
        exercise.setCategory(dto.getCategory());
        exercise.setSets(dto.getSets());
        exercise.setReps(dto.getReps());
        exercise.setDifficulty(dto.getDifficulty());
        exercise.setVideoUrl(dto.getVideoUrl());
        exercise.setInstructions(dto.getInstructions());
        exercise.setStatus(dto.isStatus());

        if (parentSession != null) {
            exercise.setTrainingSession(parentSession);
        }

        return exercise;
    }

    public ExerciseDTO toDTO(Exercise exercise) {
        ExerciseDTO dto = new ExerciseDTO();
        dto.setCategory(exercise.getCategory());
        dto.setSets(exercise.getSets());
        dto.setReps(exercise.getReps());
        dto.setDifficulty(exercise.getDifficulty());
        dto.setVideoUrl(exercise.getVideoUrl());
        dto.setInstructions(exercise.getInstructions());
        dto.setStatus(exercise.isStatus());
        dto.setTrainingSessionId(exercise.getTrainingSession().getTrainingSessionId());
        dto.setExerciseId(exercise.getExerciseId());
        dto.setUsername(exercise.getUsername());
        return dto;
    }

    public String mapCategoryIdToType(int categoryId) {
        switch (categoryId) {
            case 8:
                return "Cardio";
            case 10:
                return "Strength training";
            case 9:
                return "Stretching";
            case 11:
                return "Yoga";
            case 14:
                return "Bodyweight";
            default:
                return "Strength training"; // Default fallback
        }
    }
}
