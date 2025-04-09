    package fitrack.workout.entity;

    import com.fasterxml.jackson.annotation.JsonBackReference;
    import jakarta.persistence.*;
    import lombok.*;

    @Entity
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public class Exercise {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "exercise_id", nullable = false, unique = true)
        private Long exerciseId;
        private String category;
        private int sets;
        private int reps;
        private String difficulty;
        private String videoUrl;
        private String instructions;
        private boolean status;
        @ManyToOne
        @JoinColumn(name = "training_session_id")
        @JsonBackReference
        private TrainingSession trainingSession;

        public Long getExerciseId() {
            return exerciseId;
        }

        public void setExerciseId(Long exerciseId) {
            this.exerciseId = exerciseId;
        }

        public String getCategory() {
            return category;
        }

        public void setCategory(String category) {
            this.category = category;
        }

        public int getSets() {
            return sets;
        }

        public void setSets(int sets) {
            this.sets = sets;
        }

        public int getReps() {
            return reps;
        }

        public void setReps(int reps) {
            this.reps = reps;
        }

        public String getDifficulty() {
            return difficulty;
        }

        public void setDifficulty(String difficulty) {
            this.difficulty = difficulty;
        }

        public String getVideoUrl() {
            return videoUrl;
        }

        public void setVideoUrl(String videoUrl) {
            this.videoUrl = videoUrl;
        }

        public String getInstructions() {
            return instructions;
        }

        public void setInstructions(String instructions) {
            this.instructions = instructions;
        }

        public boolean isStatus() {
            return status;
        }

        public void setStatus(boolean status) {
            this.status = status;
        }

        public TrainingSession getTrainingSession() {
            return trainingSession;
        }

        public void setTrainingSession(TrainingSession trainingSession) {
            this.trainingSession = trainingSession;
        }
    }
