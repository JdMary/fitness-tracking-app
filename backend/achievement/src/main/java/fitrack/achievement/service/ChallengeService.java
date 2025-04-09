package fitrack.achievement.service;

import fitrack.achievement.entity.Challenge;
import fitrack.achievement.entity.ChallengeStatus;
import fitrack.achievement.entity.dtos.ChallengeUpdateRequest;
import fitrack.achievement.repository.ChallengeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ChallengeService {


    @Autowired
    private ChallengeRepository repository;


    @Autowired
    private ChallengeRepository challengeRepository;

    public Challenge addChallenge(Challenge challenge) {
        List<String> errors = new ArrayList<>();
        LocalDateTime now = LocalDateTime.now();

        // Validation du titre
        if (challenge.getTitle() == null || challenge.getTitle().trim().isEmpty()) {
            errors.add("Le titre est obligatoire.");
        }

        // Validation de la description
        if (challenge.getDescription() == null || challenge.getDescription().trim().isEmpty()) {
            errors.add("La description est obligatoire.");
        }

        // Validation des points d'XP
        if (challenge.getXpPoints() <= 0) {
            errors.add("Le nombre de points d'expérience doit être supérieur à 0.");
        }

        // Validation des dates
        if (challenge.getStartDate().isBefore(now)) {
            errors.add("La date de début doit être supérieure à la date actuelle.");
        }

        if (challenge.getEndDate() != null && challenge.getEndDate().isBefore(challenge.getStartDate())) {
            errors.add("La date de fin doit être supérieure à la date de début.");
        }

        // Si erreurs -> on les retourne toutes
        if (!errors.isEmpty()) {
            throw new IllegalArgumentException(String.join(" | ", errors));
        }

        // Sinon on continue
        challenge.setUserId("98df1738-1a67-4166-80cf-0b78c992f9bdvd");
        challenge.setStatus(ChallengeStatus.PENDING);
        return challengeRepository.save(challenge);
    }

    public List<Challenge> findAllChallenge() { return repository.findAll();
    }

    public Challenge findChallengeById(String challengeId) {
        return challengeRepository.findById(challengeId)
                .orElseThrow(() -> new RuntimeException("❌ Défi avec l'ID " + challengeId + " introuvable."));
    }

    public String deleteChallenge(String challengeId) {
        Challenge existing = challengeRepository.findById(challengeId)
                .orElseThrow(() -> new RuntimeException("❌ Challenge introuvable."));

        if (existing.getStatus() == ChallengeStatus.COMPLETED) {
            throw new RuntimeException("⛔ This challenge is completed and cannot be modified anymore.");
        }

        challengeRepository.delete(existing);
        return "✅ Challenge supprimé avec succès.";
    }




    public void updateChallenge(String challengeId, ChallengeUpdateRequest request) {
        Challenge existing = challengeRepository.findById(challengeId)
                .orElseThrow(() -> new RuntimeException("❌ Challenge introuvable."));

        boolean datesModified = request.getStartDate() != null && request.getEndDate() != null;

        if (existing.getStatus() == ChallengeStatus.COMPLETED) {
            throw new RuntimeException("⛔ Ce défi est terminé et ne peut plus être modifié.");
        }

        // Dates obligatoires ensemble
        if (request.getStartDate() != null || request.getEndDate() != null) {
            if (!datesModified) {
                throw new RuntimeException("⚠️ Si tu modifies la date de début ou de fin, tu dois spécifier les deux dates !");
            }
            if (request.getEndDate().isBefore(request.getStartDate())) {
                throw new RuntimeException("⚠️ La date de fin doit être après la date de début !");
            }

            existing.setStartDate(request.getStartDate());
            existing.setEndDate(request.getEndDate());


            if (existing.getStatus() == ChallengeStatus.CANCELED || existing.getStatus() == ChallengeStatus.FAILED) {
                existing.setStatus(ChallengeStatus.PENDING);
                existing.setReminder15(false);
                existing.setParticipation(false);
                existing.setValidation(false);
            }
        }

        if (request.getTitle() != null) existing.setTitle(request.getTitle());
        if (request.getDescription() != null) existing.setDescription(request.getDescription());

        if (request.getXpPoints() != null) {
            if (existing.getStatus() == ChallengeStatus.COMPLETED) {
                throw new RuntimeException("🎯 XP déjà attribué, tu ne peux plus modifier les points d'XP après la complétion.");
            }
            existing.setXpPoints(request.getXpPoints());
        }

        if (request.getStatus() != null) {
            if (request.getStatus() == ChallengeStatus.ACTIVE) {
                throw new RuntimeException("🚫 Le statut 'ACTIVE' est géré automatiquement par le système.");
            }
            if (request.getStatus() == ChallengeStatus.PENDING && !datesModified) {
                throw new RuntimeException("🚫 Tu ne peux pas modifier le statut vers 'PENDING' sans changer les dates !");
            }
            existing.setStatus(request.getStatus());
        }

        challengeRepository.save(existing);
    }




    public List<Challenge> findBy(String keyword, LocalDateTime startDate) {
        List<Challenge> results = challengeRepository.findby(keyword, startDate);

        // Essayons de parser le keyword en date
        try {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
            LocalDate parsedDate = LocalDate.parse(keyword, formatter);
            LocalDateTime startOfDay = parsedDate.atStartOfDay();

            // Recherche supplémentaire par date
            List<Challenge> dateResults = challengeRepository.findByStartDate(startOfDay);

            results.addAll(dateResults);
        } catch (DateTimeParseException e) {

        }


        return results.stream().distinct().collect(Collectors.toList());
    }


    public Challenge participate(String challengeId, String userId) {

        Challenge challenge = challengeRepository.findById(challengeId)
                .orElseThrow(() -> new RuntimeException("Défi introuvable"));

        if (!challenge.getUserId().equals(userId)) {
            throw new RuntimeException("Ce défi ne vous appartient pas !");
        }

        if (challenge.getStatus() == ChallengeStatus.CANCELED || challenge.getStatus() == ChallengeStatus.FAILED) {
            throw new RuntimeException("❌ Ce défi est annulé ou échoué, vous ne pouvez pas y participer.");
        }
        if (challenge.getStatus() == ChallengeStatus.COMPLETED ) {
            throw new RuntimeException("✅ Vous avez déjà Completé  !");
        }

        if (challenge.getStatus() != ChallengeStatus.ACTIVE) {
            throw new RuntimeException("⏱️ Ce défi n’est pas encore actif !");
        }

        if (challenge.isParticipation()) {
            throw new RuntimeException("✅ Vous avez déjà participé !");
        }

        challenge.setParticipation(true);
        return challengeRepository.save(challenge);
    }

    public Challenge validateChallenge(String challengeId, String userId) {
        Challenge challenge = challengeRepository.findById(challengeId)
                .orElseThrow(() -> new RuntimeException("Défi introuvable"));

        if (!challenge.getUserId().equals(userId)) {
            throw new RuntimeException("Ce défi ne vous appartient pas !");
        }

        if (!challenge.getStatus().equals(ChallengeStatus.ACTIVE)) {
            throw new RuntimeException("⛔ Le défi n’est pas actif.");
        }

        if (!challenge.isParticipation()) {
            throw new RuntimeException("⛔ Tu dois participer avant de valider !");
        }


        challenge.setStatus(ChallengeStatus.COMPLETED);
        return challengeRepository.save(challenge);
    }



    public List<Challenge> getChallengesByUserId(String userId) {
        return challengeRepository.findByUserId(userId);
    }

}
