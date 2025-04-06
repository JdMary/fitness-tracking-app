package fitrack.diet.entity.DTO;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Map;

@Getter
@Setter
public class EdamamPlanResponse {
        private String status;
        private List<Day> days;
    private List<Map<String, Object>> selection;


    @Data
        public static class Day {
            private String date;
            private List<Meal> meals;
            private Nutrients nutrients;
        }
    @Data

        public static class Meal {
            private String id;
            private String label;
            private String image;
            private String url;
            private Double yield;
            private List<String> dietLabels;
            private List<String> healthLabels;
            private List<Ingredient> ingredients;
            private Nutrients nutrients;
        }
    @Data

        public static class Ingredient {
            private String text;
            private Double quantity;
            private String measure;
            private String food;
            private Double weight;
        }
    @Data

        public static class Nutrients {
            private Double calories;
            private Double protein;
            private Double fat;
            private Double carbs;
        }


}
