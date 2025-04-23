package fitrack.diet.entity.enumPreference;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum CuisineType implements ApiEnum<CuisineType> {
    AMERICAN("american"),
    ASIAN("asian"),
    BRITISH("british"),
    CARIBBEAN("caribbean"),
    CENTRAL_EUROPE("central europe"),
    CHINESE("chinese"),
    EASTERN_EUROPE("eastern europe"),
    FRENCH("french"),
    GREEK("greek"),
    INDIAN("indian"),
    ITALIAN("italian"),
    JAPANESE("japanese"),
    KOREAN("korean"),
    KOSHER("kosher"),
    MEDITERRANEAN("mediterranean"),
    MEXICAN("mexican"),
    MIDDLE_EASTERN("middle eastern"),
    NORDIC("nordic"),
    UNKNOWN("Unknown");

    private final String apiValue;

    CuisineType(String apiValue) { this.apiValue = apiValue; }

    @Override
    public String getApiValue() { return apiValue; }

    @JsonCreator
    public static CuisineType fromLabel(String label) {
        return ApiEnum.fromLabel(label, CuisineType.class);
    }
}
