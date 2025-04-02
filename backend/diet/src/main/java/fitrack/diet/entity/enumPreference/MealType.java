package fitrack.diet.entity.enumPreference;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import fitrack.diet.util.EdamamParamConverter;

public enum MealType implements EdamamParamConverter.EdamamEnum{
    BREAKFAST("breakfast"),
    LUNCH("lunch"),
    DINNER("dinner"),
    SNACK("snack"),
    TEATIME("teatime");


    private final String apiValue;

    MealType(String apiValue) {
        this.apiValue = apiValue;
    }

    @Override
    @JsonValue
    public String getApiValue() {
        return apiValue;  // Always return API-friendly value
    }

    @JsonCreator
    public static MealType fromLabel(String label) {
        for (MealType type : MealType.values()) {
            if (type.apiValue.equalsIgnoreCase(label)) {
                return type;
            }
        }
        throw new IllegalArgumentException("Unknown meal type: " + label);
    }
}