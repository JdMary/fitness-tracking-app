package fitrack.diet.entity.enumPreference;

import fitrack.diet.util.EdamamParamConverter;

public enum CuisineType implements EdamamParamConverter.EdamamEnum {
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

    CuisineType(String apiValue) {
        this.apiValue = apiValue;
    }

    public String getApiValue() {
        return apiValue;
    }
}
