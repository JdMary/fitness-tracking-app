package fitrack.diet.entity;
import lombok.*;


    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public class User {
        private String id;
        private String name;
        private String email;
        private UserRole role;
        private double weightKg;
        private double heightCm;
        private int age;
        private String gender;
        private String goal;
    }


