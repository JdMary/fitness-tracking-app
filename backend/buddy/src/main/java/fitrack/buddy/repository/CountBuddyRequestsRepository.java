package fitrack.buddy.repository;

import fitrack.buddy.entity.CountBuddyRequests;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CountBuddyRequestsRepository extends JpaRepository<CountBuddyRequests, Long> {
}
