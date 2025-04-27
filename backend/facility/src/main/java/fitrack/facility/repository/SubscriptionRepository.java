package fitrack.facility.repository;

import feign.Param;
import fitrack.facility.entity.SportFacility;
import fitrack.facility.entity.Subscription;
import fitrack.facility.entity.enums.SubscriptionStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {
    List<Subscription> findByOwnerEmail(String email);
    int countBySportFacility(SportFacility facility);
    List<Subscription> findByOwnerEmailAndSportFacilityOrderByStartDateAsc(String ownerEmail, SportFacility sportFacility);


    List<Subscription> findBySportFacility(SportFacility facility);
    List<Subscription> findBySportFacilityAndStatus(SportFacility facility, SubscriptionStatus status);
    @Query("SELECT s FROM Subscription s WHERE s.ownerEmail = :email AND LOWER(s.sportFacility.name) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    List<Subscription> searchByKeywordAndOwner(@Param("email") String email, @Param("keyword") String keyword);
    @Query("SELECT s FROM Subscription s WHERE LOWER(s.ownerEmail) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    List<Subscription> searchByOwnerEmail(@Param("keyword") String keyword);
    @Query("SELECT s.sportFacility.name, FUNCTION('MONTHNAME', s.createdAt), SUM(s.pricePaid) " +
            "FROM Subscription s " +
            "WHERE s.status IN (fitrack.facility.entity.enums.SubscriptionStatus.ACTIVE, fitrack.facility.entity.enums.SubscriptionStatus.EXPIRED) " +
            "GROUP BY s.sportFacility.name, FUNCTION('MONTH', s.createdAt) " +
            "ORDER BY s.sportFacility.name, FUNCTION('MONTH', s.createdAt)")
    List<Object[]> calculateMonthlyRevenueByFacility();
    long countBySportFacilityAndStatus(SportFacility facility, SubscriptionStatus status);





}
