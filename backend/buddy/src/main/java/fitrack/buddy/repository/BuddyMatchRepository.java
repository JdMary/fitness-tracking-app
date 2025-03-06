package fitrack.buddy.repository;

import fitrack.buddy.entity.BuddyMatch;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BuddyMatchRepository extends JpaRepository<BuddyMatch, Long> {
    List<BuddyMatch> findAllByUserEmail(String email);
}
