package fitrack.diet.repository;


import fitrack.diet.entity.DietPlan;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DietPlanRepository extends JpaRepository<DietPlan, Long> {
    DietPlan findByUsername(String username);

}
