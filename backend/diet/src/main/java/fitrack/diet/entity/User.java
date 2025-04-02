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
    }


