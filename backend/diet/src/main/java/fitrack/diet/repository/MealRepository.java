package fitrack.diet.repository;

import fitrack.diet.entity.Meal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MealRepository extends JpaRepository<Meal, Long> {
    @Query("SELECT m FROM Meal m WHERE m.dietPlan.username = :username")
    List<Meal> findByUsername(@Param("username") String username);

    @Query("SELECT m FROM Meal m WHERE m.dietPlan.username = :username AND m.dayNumber = :dayNumber")
    List<Meal> findMealsByUsernameAndDay(@Param("username") String username, @Param("dayNumber") int dayNumber);

    @Query("""
   SELECT m.dayNumber,
          SUM(m.calories) AS totalCalories,
          SUM(m.protein) AS totalProtein,
          SUM(m.carbs) AS totalCarbs,
          SUM(m.fat) AS totalFat
   FROM Meal m
   WHERE m.dietPlan.username = :username
     AND m.completed = true
   GROUP BY m.dayNumber
   ORDER BY m.dayNumber
""")
    List<Object[]> getDailyCompletedNutrientStats(@Param("username") String username);

}