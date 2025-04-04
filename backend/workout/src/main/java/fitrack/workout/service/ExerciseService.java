package fitrack.workout.service;

import fitrack.workout.entity.Exercise;
import fitrack.workout.repository.ExerciseRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ExerciseService implements IExercise{
    private ExerciseRepository repository;
    @Override
    public Exercise createExercise(Exercise exercise) {
        return repository.save(exercise);
    }

    @Override
    public Exercise getExerciseById(Long id) {
        return repository.findById(id).get();
    }

    @Override
    public List<Exercise> getAllExercises() {
        return repository.findAll();
    }

    @Override
    public Exercise updateExercise(Long id, Exercise exercise) {
        Exercise existing = getExerciseById(id);
        BeanUtils.copyProperties(exercise, existing, "exerciseId", "trainingSession");


        return repository.save(existing);
    }

    @Override
    public void deleteExercise(Long id) {
        repository.deleteById(id);
    }
}
