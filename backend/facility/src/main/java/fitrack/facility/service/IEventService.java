package fitrack.facility.service;

import fitrack.facility.entity.Event;

import java.util.List;

public interface IEventService {
    List<Event> retrieveAllEvents();

    Event addEvent(Event event);

    Event updateEvent(Event event);

    Event retrieveEvent(Long id);

    void removeEvent(Long id);
    Event cancelEvent(Long id);
    List<Event> findEventsByFacility(Long facilityId);
    List<Event> findUpcomingEvents();

}
