package fitrack.facility.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import fitrack.facility.client.AuthClient;
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
            throw new RuntimeException("Seuls les FACILITY_MANAGER peuvent voire .");
        }

        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new RuntimeException("Event not found"));
        return registrationRepository.findByEvent(event);
    }

    @Override
    public EventRegistration registerUser(Long eventId, String token) {
        // ✅ Récupérer les infos utilisateur via le token
        Object response = authClient.extractUserDetails(token).getBody();
        User user = objectMapper.convertValue(response, User.class);

        // ✅ Vérifier que l'événement existe
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new RuntimeException("Event not found"));

        // ✅ Vérifier si l'utilisateur est déjà inscrit
        boolean alreadyRegistered = registrationRepository.existsByEventAndUserEmail(event, user.getUsername());
        if (alreadyRegistered) {
            throw new RuntimeException("User is already registered for this event.");
        }

        // ✅ Calculer le nombre de participants confirmés
        int confirmedCount = registrationRepository.countByEventAndStatus(event, RegistrationStatus.CONFIRMED);

        // ✅ Déterminer le statut de l'inscription
        RegistrationStatus status = confirmedCount < event.getMaxParticipation()
                ? RegistrationStatus.CONFIRMED
                : RegistrationStatus.WAITING_LIST;
        // 🎯 Prix de l'événement
        float eventPrice = event.getPrice();

// 🎯 Simuler la récupération des coins (à remplacer par Feign vers User plus tard)

        User u= authClient.extractUserDetails(token).getBody();
        final int coins = u.getCoins();

        int priceInt = Math.round(eventPrice);
        if (coins < priceInt) {
            throw new RuntimeException("Coins insuffisants pour s'inscrire à cet événement.");
        }

// TODO: Envoyer requête vers UserService pour décrémenter les coins du user (Feign)
        int updatedCoins = coins - priceInt;
        ResponseEntity<String> re = authClient.updateCoins(user.getUsername(), priceInt, 1);
        System.out.println("Coins après enregistrement : " + updatedCoins);


        // ✅ Créer l'enregistrement
        EventRegistration registration = EventRegistration.builder()
                .event(event)
                .userEmail(user.getUsername())
                .registrationDate(LocalDate.now())
                .status(status)
                .build();

        return registrationRepository.save(registration);
    }

    @Override
    public EventRegistration cancelRegistration(Long registrationId, String token) {
        // 🔐 Authentifier l'utilisateur
        Object response = authClient.extractUserDetails(token).getBody();
        User user = objectMapper.convertValue(response, User.class);

        // 📦 Récupérer l'enregistrement
        EventRegistration registration = registrationRepository.findById(registrationId)
                .orElseThrow(() -> new RuntimeException("Enregistrement introuvable"));

        // 🔒 Vérifier que c’est bien l'utilisateur enregistré
        if (!registration.getUserEmail().equals(user.getUsername())) {
            throw new RuntimeException("Annulation non autorisée : cet enregistrement ne vous appartient pas.");
        }

        // ❌ Déjà annulé ?
        if (registration.getStatus() == RegistrationStatus.CANCELLED) {
            throw new RuntimeException("Cet enregistrement est déjà annulé.");
        }

        // 🕒 Vérifier le délai d'annulation (au moins 2 jours avant l'événement)
        Event event = registration.getEvent();
        if (event.getEventDate().minusDays(2).isBefore(LocalDate.now())) {
            throw new RuntimeException("L'annulation n'est plus possible. Délai dépassé.");
        }

        // ✅ Mise à jour de l'enregistrement
        registration.setStatus(RegistrationStatus.CANCELLED);
        registrationRepository.save(registration);
        System.out.println("Enregistrement annulé : " + registration.getUserEmail());
        User u= authClient.extractUserDetails(token).getBody();
        final int coins = u.getCoins();

        // 💰 Simuler remboursement d' coins
        int refundedCoins = Math.round(event.getPrice());
        int updatedCoins = coins + refundedCoins;
        ResponseEntity<String> re = authClient.updateCoins(user.getUsername(), refundedCoins, 2);
        System.out.println("Coins après annulation : " + updatedCoins);

        // 🔁 Promouvoir un utilisateur de la waiting list
        List<EventRegistration> waitingList = registrationRepository.findByEventAndStatusOrderByRegistrationDateAsc(
                event, RegistrationStatus.WAITING_LIST
        );

        if (!waitingList.isEmpty()) {
            EventRegistration promoted = waitingList.get(0);
            promoted.setStatus(RegistrationStatus.CONFIRMED);
            registrationRepository.save(promoted);
            System.out.println("👤 Utilisateur promu depuis la liste d'attente : " + promoted.getUserEmail());
        }

        return registration;
    }

    @Override
    public List<EventRegistration> getUserEventRegistrations(String token) {
        // 🔐 Extraire l'utilisateur à partir du token
        Object response = authClient.extractUserDetails(token).getBody();
        User user = objectMapper.convertValue(response, User.class);

        // 🔎 Rechercher toutes les inscriptions par e-mail de l'utilisateur
        return registrationRepository.findByUserEmail(user.getUsername());
    }

    @Override
    public void deleteRegistrationByAdmin(Long registrationId, String token) {
        // 🔐 Authentification (tu peux faire une vérification de rôle si besoin)
        Object response = authClient.extractUserDetails(token).getBody();
        User user = objectMapper.convertValue(response, User.class);


        // Optionnel : Vérifier si c'est un ADMIN
        if (!"FACILITY_MANAGER".equals(user.getRole())) {
            throw new RuntimeException("Seuls les FACILITY_MANAGER peuvent créer une facility.");
        }

        EventRegistration registration = registrationRepository.findById(registrationId)
                .orElseThrow(() -> new RuntimeException("Enregistrement non trouvé"));

        Event event = registration.getEvent();

        boolean isPastEvent = event.getEventDate().isBefore(LocalDate.now());
        boolean isCancelled = registration.getStatus().equals(RegistrationStatus.CANCELLED);

        if (isPastEvent || isCancelled) {
            registrationRepository.delete(registration);
        } else {
            throw new RuntimeException("L'enregistrement ne peut être supprimé que si l'événement est terminé ou annulé.");
        }
    }


}

