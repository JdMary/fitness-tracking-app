package fitrack.facility.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import fitrack.facility.client.AuthClient;
import fitrack.facility.dto.RegistrationResponse;
import fitrack.facility.entity.Event;
import fitrack.facility.entity.EventRegistration;
import fitrack.facility.entity.User;
import fitrack.facility.entity.enums.RegistrationStatus;
import fitrack.facility.repository.EventRegistrationRepository;
import fitrack.facility.repository.EventRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class EventRegistrationService implements IEventRegistrationService {

    private final EventRegistrationRepository registrationRepository;
    private final EventRepository eventRepository;
    private final AuthClient authClient;
    private final ObjectMapper objectMapper;

    @Override
    public List<EventRegistration> getRegistrationsForEvent(Long eventId, String token ) {
        Object response = authClient.extractUserDetails(token).getBody();
        User user = objectMapper.convertValue(response, User.class);
        if (!"FACILITY_MANAGER".equals(user.getRole())) {
            throw new RuntimeException("Only FACILITY_MANAGERS can see .");
        }
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new RuntimeException("Event not found"));
        return registrationRepository.findByEvent(event);
    }

    @Override
    public RegistrationResponse registerUser(Long eventId, String token) {
        Object response = authClient.extractUserDetails(token).getBody();
        User user = objectMapper.convertValue(response, User.class);

        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new RuntimeException("Event not found"));

        boolean alreadyRegistered = registrationRepository.existsByEventAndUserEmailAndStatusNot(
                event,
                user.getUsername(),
                RegistrationStatus.CANCELLED
        );

        if (alreadyRegistered) {
            throw new RuntimeException("User is already registered for this event.");
        }

        int confirmedCount = registrationRepository.countByEventAndStatus(event, RegistrationStatus.CONFIRMED);

        RegistrationStatus status = confirmedCount < event.getMaxParticipation()
                ? RegistrationStatus.CONFIRMED
                : RegistrationStatus.WAITING_LIST;

        float eventPrice = event.getPrice();

        User u = authClient.extractUserDetails(token).getBody();
        final int coins = u.getCoins();

        int priceInt = Math.round(eventPrice);
        if (coins < priceInt) {
            throw new RuntimeException("Insufficient coins to register for this event.");
        }

        int updatedCoins = coins - priceInt;
        ResponseEntity<String> re = authClient.updateCoins(user.getUsername(), priceInt, 1);
        System.out.println("Remaining coins after registration: " + updatedCoins);

        EventRegistration registration = EventRegistration.builder()
                .event(event)
                .userEmail(user.getUsername())
                .registrationDate(LocalDate.now())
                .status(status)
                .build();

        registrationRepository.save(registration);

        String message = (status == RegistrationStatus.CONFIRMED)
                ? "You are successfully registered!"
                : "You are added to the waiting list.";

        return new RegistrationResponse(message, registration);
    }

    @Override
    public EventRegistration cancelRegistration(Long registrationId, String token) {

        Object response = authClient.extractUserDetails(token).getBody();
        User user = objectMapper.convertValue(response, User.class);

        EventRegistration registration = registrationRepository.findById(registrationId)
                .orElseThrow(() -> new RuntimeException("Registration not found."));

        if (!registration.getUserEmail().equals(user.getUsername())) {
            throw new RuntimeException("Cancellation not authorized: this registration does not belong to you.");
        }

        if (registration.getStatus() == RegistrationStatus.CANCELLED) {
            throw new RuntimeException("This registration is already canceled.");
        }

        Event event = registration.getEvent();
        if (event.getEventDate().minusDays(2).isBefore(LocalDate.now())) {
            throw new RuntimeException("Cancellation is no longer possible. Deadline exceeded.");
        }


        RegistrationStatus originalStatus = registration.getStatus();

        registration.setStatus(RegistrationStatus.CANCELLED);
        registrationRepository.save(registration);


        if (originalStatus == RegistrationStatus.CONFIRMED) {
            List<EventRegistration> waitingList = registrationRepository.findByEventAndStatusOrderByRegistrationDateAsc(
                    event, RegistrationStatus.WAITING_LIST
            );

            if (!waitingList.isEmpty()) {
                EventRegistration promoted = waitingList.get(0);
                promoted.setStatus(RegistrationStatus.CONFIRMED);
                registrationRepository.save(promoted);
                System.out.println("User promoted from the waiting list: " + promoted.getUserEmail());
            }
        }


        User u = authClient.extractUserDetails(token).getBody();
        final int coins = u.getCoins();

        int refundedCoins = Math.round(event.getPrice());
        int updatedCoins = coins + refundedCoins;
        ResponseEntity<String> re = authClient.updateCoins(user.getUsername(), refundedCoins, 2);
        System.out.println("Remaining coins after cancellation : " + updatedCoins);

        return registration;
    }

    @Override
    public List<EventRegistration> getUserEventRegistrations(String token) {

        Object response = authClient.extractUserDetails(token).getBody();
        User user = objectMapper.convertValue(response, User.class);


        return registrationRepository.findByUserEmail(user.getUsername());
    }

    @Override
    public void deleteRegistrationByAdmin(Long registrationId, String token) {

        Object response = authClient.extractUserDetails(token).getBody();
        User user = objectMapper.convertValue(response, User.class);



        if (!"FACILITY_MANAGER".equals(user.getRole())) {
            throw new RuntimeException("Only FACILITY_MANAGERS can delete a registration.");
        }

        EventRegistration registration = registrationRepository.findById(registrationId)
                .orElseThrow(() -> new RuntimeException("Registration not found"));

        Event event = registration.getEvent();

        boolean isPastEvent = event.getEventDate().isBefore(LocalDate.now());
        boolean isCancelled = registration.getStatus().equals(RegistrationStatus.CANCELLED);

        if (isPastEvent || isCancelled) {
            registrationRepository.delete(registration);
        } else {
            throw new RuntimeException("The registration can only be deleted if the event is completed or canceled.");
        }
    }
    public List<EventRegistration> searchByStatusOrEventName(String status, String keyword) {
        return registrationRepository.searchByStatusOrKeyword(status, keyword);
    }




}

