package fitrack.workout.service;

import fitrack.workout.entity.Exercise;

import java.util.List;

public interface IExercise {
    Exercise createExercise(Exercise exercise);
    Exercise getExerciseById(Long id);
    List<Exercise> getAllExercises(String token);
    Exercise updateExercise(Long id, Exercise exercise);
    void deleteExercise(Long id);
    Exercise createFullExercise(Exercise exercise, Long trainingSessionId, String token);
    List<Exercise> getExercisesByTrainingSessionId(Long trainingSessionId,String token);
}
