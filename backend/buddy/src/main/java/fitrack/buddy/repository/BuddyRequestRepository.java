package fitrack.buddy.repository;


import fitrack.buddy.entity.BuddyRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BuddyRequestRepository extends JpaRepository<BuddyRequest, Long> {
    List<BuddyRequest> findAllByUserEmail(String email);
}
