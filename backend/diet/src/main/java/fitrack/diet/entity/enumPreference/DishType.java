package fitrack.diet.entity.enumPreference;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum DishType implements ApiEnum<DishType> {
    ALCOHOL_COCKTAIL("alcohol cocktail"),
    BISCUITS_AND_COOKIES("biscuits and cookies"),
    BREAD("bread"),
    CEREALS("cereals"),
    CONDIMENTS_AND_SAUCES("condiments and sauces"),
    DESSERTS("desserts"),
    DRINKS("drinks"),
    EGG("egg"),
    ICE_CREAM_AND_CUSTARD("ice cream and custard"),
    MAIN_COURSE("main course"),
    OMELET("omelet"),
    PANCAKE("pancake"),
    PASTA("pasta"),
    PASTRY("pastry"),
    PIES_AND_TARTS("pies and tarts"),
    PIZZA("pizza"),
    PREPS("preps"),
    PRESERVE("preserve"),
    SALAD("salad"),
    SANDWICHES("sandwiches"),
    SEAFOOD("seafood"),
    SIDE_DISH("side dish"),
    SOUP("soup"),
    SPECIAL_OCCASIONS("special occasions"),
    STARTER("starter"),
    SWEETS("sweets"),
    UNKNOWN("Unknown");


    private final String apiValue;

    DishType(String apiValue) { this.apiValue = apiValue; }

    @Override
    public String getApiValue() { return apiValue; }

    @JsonCreator
    public static DishType fromLabel(String label) {
        return ApiEnum.fromLabel(label, DishType.class);
    }
}
