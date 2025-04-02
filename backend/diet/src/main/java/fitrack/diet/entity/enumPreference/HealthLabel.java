package fitrack.diet.entity.enumPreference;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum HealthLabel implements ApiEnum<HealthLabel> {
    VEGETARIAN("vegetarian"),
    VEGAN("vegan"),
    ALCOHOL_FREE("alcohol-free"),
    PEANUT_FREE("peanut-free"),
    SUGAR_CONSCIOUS("sugar-conscious"),
    TREE_NUT_FREE("tree-nut-free"),
    SOY_FREE("soy-free"),
    FISH_FREE("fish-free"),
    SHELLFISH_FREE("shellfish-free"),
    DAIRY_FREE("dairy-free"),
    EGG_FREE("egg-free"),
    GLUTEN_FREE("gluten-free"),
    KOSHER("kosher"),
    PALEO("paleo"),
    KETO("keto-friendly");

    private final String apiValue;

    HealthLabel(String apiValue) { this.apiValue = apiValue; }

    @Override
    public String getApiValue() { return apiValue; }

    @JsonCreator
    public static HealthLabel fromLabel(String label) {
        return ApiEnum.fromLabel(label, HealthLabel.class);
    }
}
