package fitrack.diet.util;

import java.util.Collection;
import java.util.stream.Collectors;

public class EdamamParamConverter {
    public static String convertToApiParam(Collection<? extends Enum<?>> values) {
        return values.stream()
                .map(e -> ((EdamamEnum) e).getApiValue().toLowerCase()) // Ensures lowercase
                .collect(Collectors.joining(","));
    }

    public interface EdamamEnum {
        String getApiValue();
    }
}
