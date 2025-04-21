package fitrack.buddy.repository;


import fitrack.buddy.entity.BuddyRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BuddyRequestRepository extends JpaRepository<BuddyRequest, Long> {
    BuddyRequest findBuddyRequestById(Long id);
    @Query("SELECT b FROM BuddyRequest b WHERE b.userEmail = :email AND (b.status = 'PENDING' OR b.status = 'WAITING')")
    List<BuddyRequest> findAllPendingOrWaitingByUserEmail(@Param("email") String email);
    @Query("SELECT b FROM BuddyRequest b WHERE b.userEmail != :email AND (b.status = 'PENDING' OR b.status = 'WAITING')")
    List<BuddyRequest> findAllByUserEmailNot(String email);

    @Query("""
    SELECT 
        COUNT(CASE WHEN b.status = 'PENDING' THEN 1 END),
        COUNT(CASE WHEN b.status = 'WAITING' THEN 1 END),
        COUNT(CASE WHEN b.status = 'ACCEPTED' THEN 1 END),
        COUNT(CASE WHEN b.status = 'REJECTED' THEN 1 END),
        COUNT(CASE WHEN b.status = 'EXPIRED' THEN 1 END)
    FROM BuddyRequest b
""")
    List<Object[]> countByStatus();

    @Query("""
    SELECT COUNT(b) FROM BuddyRequest b
    WHERE DATE(b.creationDate) = CURRENT_DATE
""")
    Long countRequestsToday();

}
