package fitrack.diet.entity.enumPreference;

import fitrack.diet.util.EdamamParamConverter;

public enum DishType implements EdamamParamConverter.EdamamEnum {
    BISCUITS_COOKIES("Biscuits and cookies"),
    BREAD("Bread"),
    CEREALS("Cereals"),
    CONDIMENTS_SAUCES("Condiments and sauces"),
    DESSERTS("Desserts"),
    DRINKS("Drinks"),
    MAIN_COURSE("Main course"),
    PANCAKE("Pancake"),
    PREPS("Preps"),
    PRESERVE("Preserve"),
    SALAD("Salad"),
    SANDWICHES("Sandwiches"),
    SIDE_DISH("Side dish"),
    SOUP("Soup"),
    STARTER("Starter"),
    SWEETS("Sweets");

    private final String apiValue;

    DishType(String apiValue) {
        this.apiValue = apiValue;
    }

    public String getApiValue() {
        return apiValue;
    }
}
