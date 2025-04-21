package fitrack.diet.entity.enumPreference;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum HealthLabel implements ApiEnum<HealthLabel> {
    ALCOHOL_COCKTAIL("Alcohol_Cocktail"),
    ALCOHOL_FREE("Alcohol_Free"),
    CELERY_FREE("Celery_Free"),
    CRUSTACEAN_FREE("Crustacean_Free"),
    DAIRY_FREE("Dairy_Free"),
    DASH("DASH"),
    EGG_FREE("Egg_Free"),
    FISH_FREE("Fish_Free"),
    FODMAP_FREE("FODMAP_Free"),
    GLUTEN_FREE("Gluten_Free"),
    IMMUNO_SUPPORTIVE("Immuno_Supportive"),
    KETO_FRIENDLY("Keto_Friendly"),
    KIDNEY_FRIENDLY("Kidney_Friendly"),
    KOSHER("Kosher"),
    LOW_FAT_ABS("Low_Fat_Abs"),
    LOW_POTASSIUM("Low Potassium"),
    LOW_SUGAR("Low-Sugar"),
    LUPINE_FREE("Lupine_Free"),
    MEDITERRANEAN("Mediterranean"),
    MUSTARD_FREE("Mustard_Free"),
    NO_OIL_ADDED("No_oil_added"),
    PALEO("Paleo"),
    PEANUT_FREE("Peanut_Free"),
    PECATARIAN("Pescatarian"),
    PORK_FREE("Pork_Free"),
    RED_MEAT_FREE("Red_Meat_Free"),
    SESAME_FREE("Sesame_Free"),
    SHELLFISH_FREE("Shellfish_Free"),
    SOY_FREE("Soy_Free"),
    SUGAR_CONSCIOUS("Sugar_Conscious"),
    SULPHITE_FREE("Sulphite_Free"),
    TREE_NUT_FREE("Tree_Nut_Free"),
    VEGAN("Vegan"),
    VEGETARIAN("Vegetarian"),
    WHEAT_FREE("Wheat_Free"),
    UNKNOWN("Unknown");

    private final String apiValue;

    HealthLabel(String apiValue) { this.apiValue = apiValue; }

    @Override
    public String getApiValue() { return apiValue; }

    @JsonCreator
    public static HealthLabel fromLabel(String label) {
        return ApiEnum.fromLabel(label, HealthLabel.class);
    }
}
