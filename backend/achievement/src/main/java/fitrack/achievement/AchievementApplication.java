package fitrack.achievement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class AchievementApplication {

	public static void main(String[] args) {
		SpringApplication.run(AchievementApplication.class, args);
	}

    }

