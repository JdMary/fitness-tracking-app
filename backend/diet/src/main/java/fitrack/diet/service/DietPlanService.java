package fitrack.diet.service;


import fitrack.diet.repository.DietPlanRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class DietPlanService {
    private DietPlanRepository repository;
}
