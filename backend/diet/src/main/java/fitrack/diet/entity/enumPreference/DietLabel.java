package fitrack.diet.entity.enumPreference;

import com.fasterxml.jackson.annotation.JsonCreator;

import java.util.Arrays;

public enum DietLabel implements ApiEnum<DietLabel> {
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

    @Override
    public String getApiValue() {
        return apiValue;
    }

    @JsonCreator
    public static DietLabel fromLabel(String label) {
        return ApiEnum.fromLabel(label, DietLabel.class);
    }

    public static DietLabel fromString(String text) {
        return Arrays.stream(values())
                .filter(e -> e.apiValue.equalsIgnoreCase(text))
                .findFirst()
                .orElse(null);
    }

    }
