package fitrack.achievement.entity.dtos;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
@Configuration
@ConfigurationProperties(prefix = "api.ninjas")
@Data
public class ApiNinjasProperties {
    private String key;
    private String url;
}
