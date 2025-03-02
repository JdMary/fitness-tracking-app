package fitrack.diet.service;


import fitrack.diet.repository.DietPlanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DietPlanService {
    private final DietPlanRepository repository;
}
