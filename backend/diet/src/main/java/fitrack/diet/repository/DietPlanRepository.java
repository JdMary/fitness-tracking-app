package fitrack.diet.repository;


import fitrack.diet.entity.DietPlan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DietPlanRepository extends JpaRepository<DietPlan, Long> {

}
