package fitrack.diet;

import fitrack.diet.entity.DTO.EdamamPlanResponse;
import fitrack.diet.service.EdamamService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.ConfigurableApplicationContext;

import java.util.Arrays;
import java.util.List;

@SpringBootApplication
@EnableFeignClients
public class DietApplication {

	public static void main(String[] args) {
		SpringApplication.run(DietApplication.class, args);


			//EdamamService edamamService = new EdamamService();
			//		EdamamPlanResponse response = edamamService.directEdamamRequest(
			//				"5d94c6bb", "5d94c6bb", "2fbeb16837f522ca27251595540ac2d6", "fitrackApp",
			//				Arrays.asList("Keto"), Arrays.asList("Gluten-Free"), Arrays.asList("Italian"), Arrays.asList("Breakfast")
			//		);
			//
			//		if (response != null) {
			//			System.out.println("Response: " + response);
			//		} else {
			//			System.out.println("No response from Edamam API");
			//		}
	}
}


