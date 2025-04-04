    package fitrack.workout.entity;

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
        private TrainingSession trainingSession;

    }
