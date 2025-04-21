package fitrack.workout.service;

import fitrack.workout.dto.entity.ExerciseDTO;
import fitrack.workout.entity.Exercise;

import java.util.List;

public interface IExercise {
    Exercise createExercise(Exercise exercise);
    Exercise createExerciseWithSession(Exercise exercise,Long sessionId,String token);
    Exercise getExerciseById(Long id);
    List<Exercise> getAllExercises(String token);
    List<ExerciseDTO> getAllExercisesDTO(String token);
    Exercise updateExercise(Long id, Exercise exercise);
    void deleteExercise(Long id);
    Exercise createFullExercise(Exercise exercise, Long trainingSessionId, String token);
    List<Exercise> getExercisesByTrainingSessionId(Long trainingSessionId,String token);
    List<ExerciseDTO> getExercisesByTrainingSessionIdDTO(Long trainingSessionId,String token);
    Exercise markExerciseAsCompleted(Long exerciseId, boolean isCompleted,String token);




}
