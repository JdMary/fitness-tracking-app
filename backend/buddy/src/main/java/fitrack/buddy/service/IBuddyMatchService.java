package fitrack.buddy.service;

import fitrack.buddy.entity.BuddyMatch;
import fitrack.buddy.entity.BuddyRequest;

import java.util.List;

public interface IBuddyMatchService {

    BuddyMatch getBuddyMatchById(Long id);
    List<BuddyMatch> retrieveBuddyMatches();

    BuddyMatch addBuddyMatch(BuddyMatch buddyMatch);

    List<BuddyMatch> findAllByUserEmail(String token);

    void removeBuddyMatch(Long id);
    void setReminder(Long id, String token);
    void unsetReminder(Long id, String token);
    String getEmail(String token);

    void deleteExpired();
    void checkReminders();

}

