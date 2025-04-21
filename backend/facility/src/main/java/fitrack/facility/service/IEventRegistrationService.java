package fitrack.facility.service;

import fitrack.facility.entity.EventRegistration;

import java.util.List;

public interface IEventRegistrationService {

    List<EventRegistration> getRegistrationsForEvent(Long eventId, String token );

        EventRegistration registerUser(Long eventId, String token);


        EventRegistration cancelRegistration(Long registrationId, String token);
    List<EventRegistration> getUserEventRegistrations(String token);
    void deleteRegistrationByAdmin(Long registrationId, String token);
    }
