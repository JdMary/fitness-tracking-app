package fitrack.buddy.service;

import fitrack.buddy.entity.BuddyMatch;
import fitrack.buddy.entity.BuddyRequest;

import java.util.List;

public interface IBuddyMatchService {

    List<BuddyMatch> retrieveBuddyMatches();

    BuddyMatch addBuddyMatch(BuddyMatch buddyMatch);

    List<BuddyMatch> findAllByUserEmail(String token);

    void removeBuddyMatch(Long id);
    void deleteExpired();
}

