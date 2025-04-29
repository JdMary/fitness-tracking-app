package fitrack.achievement.service;

import com.fasterxml.jackson.databind.JsonNode;
import fitrack.achievement.client.AuthClient;
import fitrack.achievement.entity.Challenge;
import fitrack.achievement.entity.ChallengeStatus;
import fitrack.achievement.entity.User;
import fitrack.achievement.entity.dtos.AIChallengeReponse;
import fitrack.achievement.entity.dtos.ChallengeUpdateRequest;
import fitrack.achievement.entity.dtos.ChallengeWithUserDTO;
import fitrack.achievement.repository.ChallengeRepository;
import fitrack.achievement.utils.FitnessGoalMuscleMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ChallengeService {

    private final ChallengeRepository repository;
    private final ChallengeRepository challengeRepository;
    private final AuthClient authClient;
    private final ExerciseApiService exerciseApiService;
    private final SmsService smsService;

    public Challenge addChallenge(Challenge challenge) {
        List<String> errors = new ArrayList<>();
        LocalDateTime now = LocalDateTime.now();

        if (challenge.getTitle() == null || challenge.getTitle().trim().isEmpty()) {
            errors.add("title: The title is required.");
        }
        if (challenge.getDescription() == null || challenge.getDescription().trim().isEmpty()) {
            errors.add("description: The description is required.");
        }
        if (challenge.getXpPoints() <= 0) {
            errors.add("xpPoints: The number of XP points must be greater than 0.");
        }
        if (challenge.getStartDate() == null) {
            errors.add("startDate: The start date is required.");
        } else if (challenge.getStartDate().isBefore(now)) {
            errors.add("startDate: The start date must be greater than the current date.");
        }
        if (challenge.getEndDate() == null ) {
            errors.add("endDate: The end date is required.");

        } else if (challenge.getStartDate() != null && challenge.getEndDate().isBefore(challenge.getStartDate())) {
            errors.add("endDate: The end date must be greater than the start date.");
        }
        System.out.println("Received endDate: " + challenge.getEndDate());

        if (challenge.getUserId() == null || challenge.getUserId().trim().isEmpty()) {
            errors.add("userId: You must choose a user.");
        }
        if (!errors.isEmpty()) {
            throw new IllegalArgumentException(String.join(" | ", errors));
        }
        challenge.setStatus(ChallengeStatus.PENDING);
        challenge.setParticipation(false);
        challenge.setReminder15(false);
        challenge.setValidation(false);
        return challengeRepository.save(challenge);
    }

    public List<Challenge> findAllChallenge() {
        return repository.findAll();
    }public List<ChallengeWithUserDTO> getAllChallengesWithUserNames() {
        List<Challenge> challenges = challengeRepository.findAll();

        return challenges.stream().map(challenge -> {
            ChallengeWithUserDTO dto = new ChallengeWithUserDTO();


            String cleanUserId = challenge.getUserId() != null ? challenge.getUserId().trim() : null;


            dto.setChallengeId(challenge.getChallengeId());
            dto.setTitle(challenge.getTitle());
            dto.setDescription(challenge.getDescription());
            dto.setXpPoints(challenge.getXpPoints());
            dto.setStatus(challenge.getStatus());
            dto.setStartDate(challenge.getStartDate());
            dto.setEndDate(challenge.getEndDate());
            dto.setUserId(cleanUserId);
            dto.setParticipation(challenge.isParticipation());
            dto.setReminder15(challenge.isReminder15());
            dto.setValidation(challenge.isValidation());
            dto.setName("Inconnu");


            try {
                if (cleanUserId != null) {
                    ResponseEntity<User> response = authClient.getUserById(cleanUserId);
                    if (response.getBody() != null) {
                        dto.setName(response.getBody().getName());
                    }
                }
            } catch (Exception e) {
                System.err.println("❌ Erreur récupération utilisateur pour ID " + cleanUserId);
            }

            return dto;
        }).toList();
    }


    public List<Challenge> getChallengesByUser(String token) {
        if (!token.startsWith("Bearer ")) {
            token = "Bearer " + token;
        }

        ResponseEntity<User> response = authClient.extractUserDetails(token);

        if (response.getBody() == null) {
            throw new RuntimeException("Impossible de récupérer l'utilisateur depuis le token !");
        }

        User user = response.getBody();
        System.out.println("✅ Utilisateur connecté : " + user.getEmail());

        return challengeRepository.findByUserId(user.getId());
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
        LocalDateTime now = LocalDateTime.now();
        List<String> errors = new ArrayList<>();

        Challenge existing = challengeRepository.findById(challengeId)
                .orElseThrow(() -> new RuntimeException("❌ Challenge not found."));

        if (request.getTitle() == null || request.getTitle().trim().isEmpty()) {
            errors.add("title: The title is required.");
        }
        if (request.getDescription() == null || request.getDescription().trim().isEmpty()) {
            errors.add("description: The description is required.");
        }
        if (request.getXpPoints() == null || request.getXpPoints() <= 0) {
            errors.add("xpPoints: XP points must be greater than 0.");
        }
        if (request.getUserId() == null || request.getUserId().trim().isEmpty()) {
            errors.add("userId: You must select a user.");
        }
        if(request.getStatus() == ChallengeStatus.PENDING){
            if (request.getStartDate() == null) {
                errors.add("startDate: The start date is required.");
            } else if (request.getStartDate().isBefore(now)) {
                errors.add("startDate: The start date must be in the future.");
            }

            if (request.getEndDate() == null) {
                errors.add("endDate: The end date is required.");
            } else if (request.getEndDate().isBefore(now)) {
                errors.add("endDate: The end date must be in the future.");
            }

            if (request.getStartDate() != null && request.getEndDate() != null &&
                    request.getEndDate().isBefore(request.getStartDate())) {
                errors.add("endDate: The end date must be after the start date.");
            }

            existing.setParticipation(false);
            existing.setValidation(false);
            existing.setReminder15(false);



        }


        if (request.getStatus() == ChallengeStatus.COMPLETED) {

                errors.add("status: You can't do that!! must participate before completing the challenge.");



        }

        if (existing.getStatus() == ChallengeStatus.COMPLETED) {
            errors.add("status: The challenge has already been completed and cannot be modified.");
        }
        if (request.getStatus() == ChallengeStatus.ACTIVE) {
            errors.add("status: Manual activation is not allowed. Activation happens automatically based on dates.");
        }

        // If status is CANCELED or FAILED, don't allow modifications to other fields
        if (request.getStatus() == ChallengeStatus.CANCELED || request.getStatus() == ChallengeStatus.FAILED) {
            boolean modified =
                    !Objects.equals(existing.getTitle(), request.getTitle()) ||
                            !Objects.equals(existing.getDescription(), request.getDescription()) ||
                            !Objects.equals(existing.getStartDate(), request.getStartDate()) ||
                            !Objects.equals(existing.getEndDate(), request.getEndDate()) ||
                            !Objects.equals(existing.getXpPoints(), request.getXpPoints()) ||
                            !Objects.equals(existing.getUserId(), request.getUserId());

            if (modified) {
                errors.add("status: You cannot modify anything else when setting a challenge to canceled or failed.");
            }
        }

        // If there are any validation errors, throw an exception
        if (!errors.isEmpty()) {
            throw new IllegalArgumentException(String.join(" | ", errors));
        }

        existing.setTitle(request.getTitle());
        existing.setDescription(request.getDescription());
        existing.setStartDate(request.getStartDate());
        existing.setEndDate(request.getEndDate());
        existing.setXpPoints(request.getXpPoints());
        existing.setUserId(request.getUserId());
        existing.setStatus(request.getStatus());

        challengeRepository.save(existing);
    }

    public List<Challenge> findBy(String keyword, LocalDateTime startDate) {
        List<Challenge> results = challengeRepository.findby(keyword, startDate);
        try {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
            LocalDate parsedDate = LocalDate.parse(keyword, formatter);
            LocalDateTime startOfDay = parsedDate.atStartOfDay();
            List<Challenge> dateResults = challengeRepository.findByStartDate(startOfDay);

            results.addAll(dateResults);
        } catch (DateTimeParseException e) {

        }


        return results.stream().distinct().collect(Collectors.toList());
    }


    public Challenge participate(String challengeId) {

        Challenge challenge = challengeRepository.findById(challengeId)
                .orElseThrow(() -> new RuntimeException("Challenge not found"));


        if (challenge.getStatus() == ChallengeStatus.CANCELED || challenge.getStatus() == ChallengeStatus.FAILED) {
            throw new RuntimeException("❌\n" +
                    "This challenge is canceled or failed, you cannot participate.");
        }
        if (challenge.getStatus() == ChallengeStatus.COMPLETED) {
            throw new RuntimeException("✅ You have already completed  !");
        }

        if (challenge.getStatus() != ChallengeStatus.ACTIVE) {
            throw new RuntimeException("⏱️ This challenge is not yet active!");
        }

        if (challenge.isParticipation()) {
            throw new RuntimeException("✅ You have already participated !");
        }

        challenge.setParticipation(true);
        return challengeRepository.save(challenge);
    }

    public Challenge validateChallenge(String challengeId) {
        Challenge challenge = challengeRepository.findById(challengeId)
                .orElseThrow(() -> new RuntimeException("Challenge not found"));



        if (!challenge.getStatus().equals(ChallengeStatus.ACTIVE)) {
            throw new RuntimeException("⛔ The challenge is not active.");
        }

        if (!challenge.isParticipation()) {
            throw new RuntimeException("⛔ You must participate before validating !");
        }


        challenge.setStatus(ChallengeStatus.COMPLETED);
        challenge.setValidation(true);
        ResponseEntity<User>  response = authClient.getUserById(challenge.getUserId());
        User user = response.getBody();
        authClient.updateUserXp(user.getId(), user.getXpPoints()+ challenge.getXpPoints());
        int u = user.getNumber();
        try {
            // smsService.sendSms("+21655343916","🎉 Congratulations! You have successfully completed the challenge \"" + challenge.getTitle() + "\" and earned " + challenge.getXpPoints() + " XP points!");
            System.out.println("✅ SMS sent successfully.");
        } catch (Exception e) {
            // Log the error and handle it as needed
            System.err.println("❌ Error sending SMS: " + e.getMessage());
            e.printStackTrace();

        }

        return challengeRepository.save(challenge);
    }


    public List<Challenge> getChallengesByUserId(String userId) {
        return challengeRepository.findByUserId(userId);
    }



    private List<String> inferMusclesFromUser(User user) {
        List<String> muscles = FitnessGoalMuscleMapper.getMusclesForGoal(user.getFitnessGoals());
        if (muscles == null || muscles.isEmpty()) {
            return List.of("abdominals");
        }

        return muscles;
    }

    private String inferDifficultyFromXpPoints(int xp) {
        if (xp < 1000) return "beginner";
        if (xp < 3000) return "intermediate";
        return "expert";
    }

    private int calculateXpFromDifficulty(String difficulty) {
        return switch (difficulty.toLowerCase()) {
            case "beginner" -> 400;
            case "intermediate" -> 500;
            case "expert" -> 600;
            default -> 300;
        };
    }

    public AIChallengeReponse generateChallenge(User user) {
        List<String> muscles = inferMusclesFromUser(user);
        Collections.shuffle(muscles);
        String[] difficulties = {"beginner", "intermediate", "expert"};
        String userLevel = inferDifficultyFromXpPoints(user.getXpPoints());

        JsonNode selectedExercise = null;
        String selectedMuscle = null;
        String usedDifficulty = null;

        for (String muscle : muscles) {
            JsonNode exercises = exerciseApiService.getExercises(muscle, userLevel);
            if (exercises != null && !exercises.isEmpty()) {
                selectedExercise = selectBestExercise(exercises);
                selectedMuscle = muscle;
                usedDifficulty = userLevel;
                break;
            }
        }

        if (selectedExercise == null) {
            for (String diff : difficulties) {
                if (diff.equals(userLevel)) continue;

                for (String muscle : muscles) {
                    JsonNode exercises = exerciseApiService.getExercises(muscle, diff);
                    if (exercises != null && !exercises.isEmpty()) {
                        selectedExercise = selectBestExercise(exercises);
                        selectedMuscle = muscle;
                        usedDifficulty = diff;
                        break;
                    }
                }
                if (selectedExercise != null) break;
            }
        }

        if (selectedExercise == null) {
            throw new RuntimeException("No exercises found for " + muscles + " at all levels.");
        }
        String name = selectedExercise.get("name").asText();
        String instructions = selectedExercise.has("instructions") ? selectedExercise.get("instructions").asText() : "";
        String description = FitnessGoalMuscleMapper.formatChallengeDescription(selectedMuscle, usedDifficulty, instructions);

        int xp = calculateXpFromDifficulty(usedDifficulty);
        AIChallengeReponse challenge = new AIChallengeReponse();
        challenge.setTitle(name + " - " + selectedMuscle.toUpperCase());
        challenge.setStatus(ChallengeStatus.PENDING);
        challenge.setDescription(description);
        challenge.setXpPoints(xp);
        challenge.setStartDate(LocalDate.now().plusDays(1).toString());
        challenge.setEndDate(LocalDate.now().plusDays(7).toString());


        return challenge;
    }
    private JsonNode selectBestExercise(JsonNode exercises) {
        int size = exercises.size();
        int randomIndex = new Random().nextInt(size);
        return exercises.get(randomIndex);
    }




}
