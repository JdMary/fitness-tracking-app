package fitrack.diet.entity.DTO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Map;

/**
 * Response class for the recipe details endpoint
 */
@NoArgsConstructor  // Add this
@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class RecipeResponse {
    private Recipe recipe;
    private Map<String, Object> _links;


/**
 * Recipe details from Edamam API
 */
@NoArgsConstructor  // Add this
@AllArgsConstructor
@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public static class Recipe {
    private String uri;
    private String label;
    private String image;
    private String source;
    private String url;
    private String shareAs;
    private double yield;
    private List<String> dietLabels;
    private List<String> healthLabels;
    private List<String> cautions;
    private List<String> ingredientLines;
    private List<Ingredient> ingredients;
    private double calories;
    private double totalWeight;
    private double totalTime;
    private List<String> cuisineType;
    private List<String> mealType;
    private List<String> dishType;
    private Map<String, NutrientInfo> totalNutrients;
    private Map<String, NutrientInfo> totalDaily;
    private List<Digest> digest;

    private String sourceUrl;

    public String getSourceUrl() {
        if (sourceUrl != null) {
            return sourceUrl;
        }
        return url;
    }
}

/**
 * Ingredient information
 */
@Data
@JsonIgnoreProperties(ignoreUnknown = true)
   public static class Ingredient {
    private String text;
    private double quantity;
    private String measure;
    private String food;
    private double weight;
    private String foodId;
    private String foodCategory;
    private String image;
}

/**
 * Nutrient information
 */
@Data
@JsonIgnoreProperties(ignoreUnknown = true)
   public static class NutrientInfo {
    private String label;
    private double quantity;
    private String unit;
}

/**
 * Detailed nutrient breakdown
 */
@Data
@JsonIgnoreProperties(ignoreUnknown = true)
   public static class Digest {
    private String label;
    private String tag;
    private double total;
    private boolean hasRDI;
    private double daily;
    private String unit;
    private List<Digest> sub;
}
}