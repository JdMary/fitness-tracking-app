package fitrack.buddy.service;

import fitrack.buddy.entity.BuddyMatch;

import java.util.List;

public interface IBuddyMatchService {

    List<BuddyMatch> retrieveBuddyMatches();

    BuddyMatch addBuddyMatch(BuddyMatch buddyMatch);

    List<BuddyMatch> findAllByUserEmail(String email);

    void removeBuddyMatch(Long id);
}

