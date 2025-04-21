package fitrack.diet;

import fitrack.diet.entity.DTO.EdamamPlanResponse;
import fitrack.diet.service.EdamamService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.scheduling.annotation.EnableScheduling;

import java.util.Arrays;
import java.util.List;
@EnableScheduling
@SpringBootApplication
@EnableFeignClients
public class DietApplication {

	public static void main(String[] args) {
		SpringApplication.run(DietApplication.class, args);


		
	}
}


