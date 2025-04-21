package fitrack.diet.entity.enumPreference;

import com.fasterxml.jackson.annotation.JsonCreator;

import java.util.Arrays;

public enum DietLabel implements ApiEnum<DietLabel> {
    BALANCED("Balanced"),
    HIGH_FIBER("hHigh-Fiber"),
    HIGH_PROTEIN("High-Protein"),
    LOW_CARB("Low-Carb"),
    LOW_FAT("Low-Fat"),
    LOW_SODIUM("Low-Sodium"),
    UNKNOWN("Unknown");


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
