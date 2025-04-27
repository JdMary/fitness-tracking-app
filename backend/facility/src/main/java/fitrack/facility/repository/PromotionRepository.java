package fitrack.facility.repository;

import feign.Param;
import fitrack.facility.entity.Promotion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PromotionRepository extends JpaRepository<Promotion, Long> {
    List<Promotion> findByActiveTrue();
    @Query("SELECT DISTINCT p.sportFacility.name FROM Promotion p")
    List<String> findDistinctFacilityNames();
    List<Promotion> findBySportFacility_Name(String name);
    @Query("SELECT p FROM Promotion p WHERE LOWER(p.sportFacility.name) LIKE LOWER(CONCAT('%', :name, '%'))")
    List<Promotion> searchBySportFacilityName(@Param("name") String name);
    boolean existsByPromoCode(String PromoCode);


}
