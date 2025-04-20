package fitrack.buddy.service;

import fitrack.buddy.entity.BuddyMatch;
import fitrack.buddy.entity.BuddyRequest;

import java.util.List;
import java.util.Map;

public interface IBuddyRequestService {

    List<BuddyRequest> retrieveBuddyRequests();
    BuddyRequest addBuddyRequest(BuddyRequest buddyRequest, String token);
    List<BuddyRequest> findAllByUserEmail(String token);
    void removeBuddyRequest(Long id);
    BuddyRequest addPotentialMatch(Long id, String token);
    BuddyRequest findBuddyRequestById(Long id);
    BuddyRequest updateBuddyRequest(Long id,BuddyRequest buddyRequest);
    BuddyMatch acceptPotentialMatch(Long id);
    BuddyRequest rejectPotentialMatch(Long id);
    String displayUser(String userEmail);
    List<BuddyRequest> findAllNotOwnedByUser(String token);
    Map<String, Long> countByStatus();
    void setExpired();
    void logDailyRequestCount();

}
