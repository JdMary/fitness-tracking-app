package fitrack.buddy.service;

import fitrack.buddy.entity.BuddyRequest;

import java.util.List;

public interface IBuddyRequestService {

    List<BuddyRequest> retrieveBuddyRequests();

    BuddyRequest addBuddyRequest(BuddyRequest buddyRequest);

}
