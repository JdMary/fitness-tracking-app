package fitrack.buddy.service;

import fitrack.buddy.entity.BuddyMatch;
import fitrack.buddy.entity.BuddyRequest;
import fitrack.buddy.entity.BuddyRequestResponseDTO;

import java.time.LocalDateTime;
import java.util.List;

public interface IBuddyRequestService {

    List<BuddyRequest> retrieveBuddyRequests();

    BuddyRequest addBuddyRequest(BuddyRequest buddyRequest, String token);

    List<BuddyRequest> findAllByUserEmail(String token);

    void removeBuddyRequest(Long id);
    BuddyRequest changeWorkoutStartTime(Long id, LocalDateTime workoutStartTime);
    BuddyRequestResponseDTO addPotentialMatch(Long id, Long requestId);
    BuddyRequest displayPotentialMatch(Long id);
    BuddyMatch acceptPotentialMatch(Long id);
}
