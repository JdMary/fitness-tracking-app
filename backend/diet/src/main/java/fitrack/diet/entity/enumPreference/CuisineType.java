package fitrack.diet.entity.enumPreference;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import fitrack.diet.util.EdamamParamConverter;

public enum CuisineType implements ApiEnum<CuisineType> {
    AMERICAN("American"),
    ASIAN("Asian"),
    BRITISH("British"),
    CARIBBEAN("Caribbean"),
    CENTRAL_EUROPE("Central Europe"),
    CHINESE("Chinese"),
    EASTERN_EUROPE("Eastern Europe"),
    FRENCH("French"),
    INDIAN("Indian"),
    ITALIAN("Italian"),
    JAPANESE("Japanese"),
    KOSHER("Kosher"),
    MEDITERRANEAN("Mediterranean"),
    MEXICAN("Mexican"),
    MIDDLE_EASTERN("Middle Eastern"),
    NORDIC("Nordic"),
    SOUTH_AMERICAN("South American"),
    SOUTH_EAST_ASIAN("South East Asian");

    private final String apiValue;

    CuisineType(String apiValue) { this.apiValue = apiValue; }

    @Override
    public String getApiValue() { return apiValue; }

    @JsonCreator
    public static CuisineType fromLabel(String label) {
        return ApiEnum.fromLabel(label, CuisineType.class);
    }
}
