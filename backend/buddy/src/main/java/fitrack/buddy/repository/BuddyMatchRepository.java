package fitrack.buddy.repository;

import fitrack.buddy.entity.BuddyMatch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BuddyMatchRepository extends JpaRepository<BuddyMatch, Long> {
    @Query("SELECT b FROM BuddyMatch b WHERE b.email1 = :email or b.email2 = :email")
    List<BuddyMatch> findAllByEmail(String email);
}
