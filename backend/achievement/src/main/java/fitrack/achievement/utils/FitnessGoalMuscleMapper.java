package fitrack.achievement.utils;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class FitnessGoalMuscleMapper {

    private static final Map<String, List<String>> FITNESS_GOAL_TO_MUSCLES = Map.ofEntries(
            Map.entry("muscle gain", List.of("chest", "biceps", "triceps", "quadriceps", "glutes", "hamstrings")),
            Map.entry("bulking", List.of("chest", "biceps", "triceps")),
            Map.entry("gain", List.of("biceps", "chest", "forearms")),
            Map.entry("volume", List.of("biceps", "chest")),
            Map.entry("weight loss", List.of("calves", "quadriceps", "glutes", "hamstrings")),
            Map.entry("fat burn", List.of("calves", "quadriceps")),
            Map.entry("slim down", List.of("calves")),
            Map.entry("endurance", List.of("quadriceps", "hamstrings", "calves", "lats")),
            Map.entry("stamina", List.of("quadriceps", "lats")),
            Map.entry("resistance", List.of("hamstrings", "lats")),
            Map.entry("flexibility", List.of("lower_back", "hamstrings", "adductors", "abductors", "neck")),
            Map.entry("stretching", List.of("lower_back", "hamstrings", "adductors")),
            Map.entry("core", List.of("abdominals", "lower_back")),
            Map.entry("abs", List.of("abdominals", "lower_back", "glutes")),
            Map.entry("flat belly", List.of("abdominals")),
            Map.entry("glutes", List.of("glutes", "hamstrings", "lower_back")),
            Map.entry("booty", List.of("glutes")),
            Map.entry("toning", List.of("abdominals", "glutes", "biceps", "chest")),
            Map.entry("fitness", List.of("quadriceps", "abdominals", "chest", "lats", "biceps")),
            Map.entry("recovery", List.of("quadriceps", "glutes", "abdominals")),
            Map.entry("balance", List.of("glutes", "lower_back", "calves", "neck")),
            Map.entry("stability", List.of("glutes", "calves")),
            Map.entry("plank", List.of("glutes", "abdominals", "lower_back")),
            Map.entry("strength", List.of("chest", "biceps", "triceps", "quadriceps"))
    );

    public static List<String> getMusclesForGoal(String fitnessGoal) {
        if (fitnessGoal == null || fitnessGoal.isBlank()) {
            return List.of("abdominals");
        }

        String goal = fitnessGoal.toLowerCase();
        return FITNESS_GOAL_TO_MUSCLES.entrySet().stream()
                .filter(entry -> goal.contains(entry.getKey()))
                .flatMap(entry -> entry.getValue().stream())
                .distinct()
                .collect(Collectors.toList());
    }
    public static  String formatChallengeDescription( String muscle, String difficulty, String instructions) {
        String formatted =
                "🎯 Muscle ciblé : " + muscle +
                "\n⚡ Niveau : " + capitalize(difficulty) +
                "\n🔁 3 séries de 12 répétitions";

        if (instructions != null && !instructions.isBlank()) {
            String trimmed = instructions.length() > 400 ? instructions.substring(0, 400) + "..." : instructions;
            formatted += "\n📝 Instructions : " + trimmed;
        } else {
            formatted += "\n📝 Instructions : Effectue l'exercice avec concentration et bonne forme !";
        }

        return formatted;
    }

    private static String capitalize(String str) {
        return str.substring(0, 1).toUpperCase() + str.substring(1);
    }

}
