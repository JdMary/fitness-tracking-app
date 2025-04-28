package fitrack.workout.dto.entity;

public class ProgressDTO {

    private Long workoutPlanId;
    private String workoutPlanDescription;
    private double burnedCalories;
    private double estimatedWeight;
    private int completionPercentage;

    // Constructors
    public ProgressDTO() {}

    public ProgressDTO(Long workoutPlanId, String workoutPlanDescription,
                       double burnedCalories, double estimatedWeight, int completionPercentage) {
        this.workoutPlanId = workoutPlanId;
        this.workoutPlanDescription = workoutPlanDescription;
        this.burnedCalories = burnedCalories;
        this.estimatedWeight = estimatedWeight;
        this.completionPercentage = completionPercentage;
    }

    // Getters and setters
    public Long getWorkoutPlanId() {
        return workoutPlanId;
    }

    public void setWorkoutPlanId(Long workoutPlanId) {
        this.workoutPlanId = workoutPlanId;
    }

    public String getWorkoutPlanDescription() {
        return workoutPlanDescription;
    }

    public void setWorkoutPlanDescription(String workoutPlanDescription) {
        this.workoutPlanDescription = workoutPlanDescription;
    }

    public double getBurnedCalories() {
        return burnedCalories;
    }

    public void setBurnedCalories(double burnedCalories) {
        this.burnedCalories = burnedCalories;
    }

    public double getEstimatedWeight() {
        return estimatedWeight;
    }

    public void setEstimatedWeight(double estimatedWeight) {
        this.estimatedWeight = estimatedWeight;
    }

    public int getCompletionPercentage() {
        return completionPercentage;
    }

    public void setCompletionPercentage(int completionPercentage) {
        this.completionPercentage = completionPercentage;
    }
}
