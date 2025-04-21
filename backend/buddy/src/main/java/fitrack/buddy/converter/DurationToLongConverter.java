package fitrack.buddy.converter;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

import java.time.Duration;

@Converter(autoApply = true)
public class DurationToLongConverter implements AttributeConverter<Duration, Long> {

    @Override
    public Long convertToDatabaseColumn(Duration duration) {
        return duration == null ? null : duration.toMinutes();  // Store minutes only
    }

    @Override
    public Duration convertToEntityAttribute(Long minutes) {
        return minutes == null ? null : Duration.ofMinutes(minutes);  // Retrieve as Duration
    }
}

