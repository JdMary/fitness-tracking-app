package fitrack.diet.entity.enumPreference;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum MealType  implements ApiEnum<MealType> {
    BREAKFAST("breakfast"),
    LUNCH("lunch"),
    DINNER("dinner"),
    SNACK("snack"),
    TEATIME("teatime"),
    UNKNOWN("Unknown");



    private final String apiValue;

    MealType(String apiValue) {
        this.apiValue = apiValue;
    }

    @Override
    public String getApiValue() {
        return apiValue;
    }

    @JsonCreator
    public static MealType fromLabel(String label) {
        return ApiEnum.fromLabel(label, MealType.class);
    }
}