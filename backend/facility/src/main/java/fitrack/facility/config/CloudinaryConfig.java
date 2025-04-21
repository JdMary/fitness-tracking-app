package fitrack.facility.config;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Map;

@Configuration
public class CloudinaryConfig {

    @Bean
    public Cloudinary cloudinary() {
        return new Cloudinary(ObjectUtils.asMap(
                "cloud_name", "dbv4y5jba",
                "api_key", "136319378519463",
                "api_secret", "WI67AzUhGaPL_-rxcfBVmKqRVeE",
                "secure", true
        ));
    }
}
