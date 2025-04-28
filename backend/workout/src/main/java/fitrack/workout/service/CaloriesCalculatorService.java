package fitrack.workout.service;

import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class CaloriesCalculatorService {
    private static final Map<String, Double> MET_VALUES = Map.of(
            "Strength training", 6.0,
            "Cardio", 8.0,
            "Stretching", 2.5,
            "Yoga", 3.0,
            "Bodyweight", 5.0
    );

    public double calculateCalories(String exerciseType, double weightKg, int sets, int reps) {
        //A metabolic equivalent of task (MET)
        double met = MET_VALUES.getOrDefault(exerciseType, 5.0);
        int totalReps = sets * reps;
        double durationMinutes = (totalReps * 6.0) / 60.0; // 6 seconds per rep

        return (met * weightKg * 3.5 / 200) * durationMinutes;
    }
}
