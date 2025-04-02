package fitrack.facility;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class FacilityApplication {

	public static void main(String[] args) {
		SpringApplication.run(FacilityApplication.class, args);
	}

}
