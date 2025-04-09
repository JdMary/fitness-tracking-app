package fitrack.workout;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;


@EnableFeignClients
@SpringBootApplication
public class WorkoutApplication {


		public static void main(String[] args) {
			SpringApplication.run(WorkoutApplication.class, args);
		}

	}

