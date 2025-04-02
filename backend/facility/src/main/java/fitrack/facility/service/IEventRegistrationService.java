package fitrack.facility.service;

import fitrack.facility.entity.EventRegistration;

import java.util.List;

public interface IEventRegistrationService {
    List<EventRegistration> retrieveAllRegistrations();
    EventRegistration registerUserToEvent(Long userId, Long eventId);
    EventRegistration updateRegistration(EventRegistration registration);
    EventRegistration retrieveRegistration(Long id);
    void cancelRegistration(Long id);
    boolean checkEventAvailability(Long eventId);
    List<EventRegistration> getUserRegistrations(Long userId);
    void applyCancellationPenalty(Long userId);
    boolean isUserBlocked(Long userId);
    void handleEventCancellation(Long eventId);
    void handleWaitlist(Long eventId);
}
