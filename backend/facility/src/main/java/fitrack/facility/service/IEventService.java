package fitrack.facility.service;

import fitrack.facility.entity.Event;

import java.util.List;

public interface IEventService {
    List<Event> retrieveAllEvents();

    Event createEvent(Event event, String token);


    Event updateEvent(Event event, Long id, String token);


    Event retrieveEvent(Long id);

    void deleteEvent(Long id, String token);
    Event cancelEvent(Long id);
    List<Event> findEventsByFacility(Long facilityId);
    List<Event> findUpcomingEvents();
    List<Event> searchEvents(String keyword);

}
