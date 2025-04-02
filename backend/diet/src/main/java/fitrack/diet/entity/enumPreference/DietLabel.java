package fitrack.diet.entity.enumPreference;

import fitrack.diet.util.EdamamParamConverter;

public enum DietLabel implements EdamamParamConverter.EdamamEnum{
    BALANCED("balanced"),
    HIGH_FIBER("high-fiber"),
    HIGH_PROTEIN("high-protein"),
    LOW_CARB("low-carb"),
    LOW_FAT("low-fat"),
    LOW_SODIUM("low-sodium");

    private final String apiValue;

    DietLabel(String apiValue) {
        this.apiValue = apiValue;
    }

    public String getApiValue() {
        return apiValue;
    }
}
