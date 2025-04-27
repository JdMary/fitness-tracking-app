package fitrack.facility.service;

import fitrack.facility.entity.EventRegistration;
import fitrack.facility.dto.RegistrationResponse;

import java.util.List;

public interface IEventRegistrationService {

    List<EventRegistration> getRegistrationsForEvent(Long eventId, String token );

    RegistrationResponse registerUser(Long eventId, String token);


        EventRegistration cancelRegistration(Long registrationId, String token);
    List<EventRegistration> getUserEventRegistrations(String token);
    void deleteRegistrationByAdmin(Long registrationId, String token);
    List<EventRegistration> searchByStatusOrEventName(String status, String keyword);
    }
