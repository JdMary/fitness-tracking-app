package fitrack.diet.entity;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;
import java.util.Map;
@AllArgsConstructor
@Data
public class MealPlanRequest {
    private int size;
    private Plan plan;


    @AllArgsConstructor
    @Data
    public static class Plan {
        private Accept accept;
        private Fit fit;
        private Map<String, Object> sections;

    }
    @AllArgsConstructor
    @Data
    public static class Accept {
        private List<Map<String, List<String>>> all;

    }
    @AllArgsConstructor
    @Data
    public static class Fit {
        private Map<String, Range> ENERC_KCAL;
        private Map<String, Range> PROCNT;

        @AllArgsConstructor
        @Data
        public static class Range {
            private int min;
            private int max;
        }
    }
}
