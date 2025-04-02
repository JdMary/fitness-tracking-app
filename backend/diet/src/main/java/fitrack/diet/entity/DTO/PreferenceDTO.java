package fitrack.diet.entity.DTO;

import java.util.List;

public class PreferenceDTO {
    private Long preferenceId;

    private String userId;

    private String timeFrame;


        private List<String> diet;       // e.g., ["high-protein"]
        private List<String> health;     // e.g., ["dairy-free"]
       private List<String> excluded;   // e.g., ["wheat"]
        private Integer minProtein;
        private Integer maxFat;
        private Integer minCarbs;
       private Integer maxCholesterol;

    private Integer targetCalories;
}
