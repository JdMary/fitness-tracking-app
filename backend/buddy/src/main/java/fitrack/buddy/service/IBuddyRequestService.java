package fitrack.buddy.service;

import fitrack.buddy.entity.BuddyMatch;
import fitrack.buddy.entity.BuddyRequest;
import fitrack.buddy.entity.BuddyRequestResponseDTO;
import fitrack.buddy.entity.UserDTO;

import java.time.LocalDateTime;
import java.util.List;

public interface IBuddyRequestService {

    List<BuddyRequest> retrieveBuddyRequests();

    BuddyRequest addBuddyRequest(BuddyRequest buddyRequest, String token);

    List<BuddyRequest> findAllByUserEmail(String token);

    void removeBuddyRequest(Long id);
    BuddyRequest addPotentialMatch(Long id, String token);
    BuddyMatch acceptPotentialMatch(Long id);
    UserDTO displayUser(Long id);
    List<BuddyRequest> findAllNotOwnedByUser(String token);
}
