package fitrack.diet.entity.enumPreference;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import java.util.Arrays;
import java.util.Map;
import java.util.stream.Collectors;

public interface ApiEnum<T extends Enum<T>> {
    String getApiValue();

    @JsonValue
    default String serialize() {
        return getApiValue();
    }

    static <T extends Enum<T> & ApiEnum<T>> Map<String, T> getApiMap(Class<T> enumClass) {
        return Arrays.stream(enumClass.getEnumConstants())
                .collect(Collectors.toUnmodifiableMap(
                        e -> e.getApiValue().toLowerCase(),
                        e -> e
                ));
    }

    @JsonCreator
    static <T extends Enum<T> & ApiEnum<T>> T fromLabel(String label, Class<T> enumClass) {
        T value = getApiMap(enumClass).get(label.toLowerCase());
        if (value == null) {
            throw new IllegalArgumentException("Invalid " + enumClass.getSimpleName() + ": " + label);
        }
        return value;
    }
}