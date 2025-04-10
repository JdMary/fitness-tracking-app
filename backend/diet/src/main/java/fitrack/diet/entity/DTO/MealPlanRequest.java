package fitrack.diet.entity.DTO;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.util.List;
import java.util.Map;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class MealPlanRequest {
    private Integer size;
    private Plan plan;

    @Data
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    public static class Plan {
        private Accept accept;
        private Map<String, NutrientRange> fit;
        private Map<String, Section> sections;
    }

    @Data
    public static class Accept {
        private List<Map<String, List<String>>> all;
    }

    @Data
    @JsonInclude(JsonInclude.Include.NON_NULL)
    public static class NutrientRange {
        private Double min;
        private Double max;
    }

    @Data
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    public static class Section {
        private Map<String, List<String>> accept;
    }
}