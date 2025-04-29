package fitrack.achievement.scheduler;


import fitrack.achievement.client.AuthClient;
import fitrack.achievement.client.UserClient;
import fitrack.achievement.entity.Challenge;
import fitrack.achievement.entity.ChallengeStatus;
import fitrack.achievement.repository.ChallengeRepository;
import fitrack.achievement.service.SmsService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import fitrack.achievement.entity.User;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ChallengeScheduler {

    private final ChallengeRepository challengeRepository;

    private final SmsService smsService;
    private final AuthClient userAuth;



    @Scheduled(fixedRate = 6000)
    public void notifyChallenges() {
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime fifteenMinutesLater = now.plusMinutes(15);


        List<Challenge> remind15 = challengeRepository.findByStatusAndStartDateBetween(ChallengeStatus.PENDING, fifteenMinutesLater.minusSeconds(30), fifteenMinutesLater.plusSeconds(30));
        for (Challenge challenge : remind15) {
            if (!challenge.isReminder15()) {
               User user = userAuth.getUserById(challenge.getUserId()).getBody();
               String number= String.valueOf(user.getNumber());
                smsService.sendSms("h", "📅 Ton défi \"" + challenge.getTitle() + "\" commence dans 15 minutes !");

                challenge.setReminder15(true);
                challengeRepository.save(challenge);
            }
        }

        List<Challenge> toStart = challengeRepository
                .findByStatusAndStartDateBefore(ChallengeStatus.PENDING, now);

        for (Challenge challenge : toStart) {
            challenge.setStatus(ChallengeStatus.ACTIVE);
            challengeRepository.save(challenge);

            User user = userAuth.getUserById(challenge.getUserId()).getBody();
            String number= String.valueOf(user.getNumber());
            try {
                //smsService.sendSms("+21655343916", "🚀 Ton défi \"" + challenge.getTitle() + "\" a commencé ! Bonne chance !");
;
            } catch (Exception e) {
                System.err.println("⚠️ Error sending SMS reminder: " + e.getMessage());
            }

            checkParticipation(challenge);
        }

    }

    @Async
    public void checkParticipation(Challenge challenge) {
        try {
            Thread.sleep(300000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        Challenge latest = challengeRepository.findById(challenge.getChallengeId()).orElse(null);

        if (latest != null && !latest.isParticipation()) {
            latest.setStatus(ChallengeStatus.CANCELED);

            challengeRepository.save(latest);

            User user = userAuth.getUserById(challenge.getUserId()).getBody();
            String number= String.valueOf(user.getNumber());
            try {
               // smsService.sendSms("+21655343916", "❌ Your challenge \"" + challenge.getTitle() + "\" has been canceled because you didn't participate, and your XP points have been lost.");
            } catch (Exception e) {
                System.err.println("⚠️ Error sending SMS reminder: " + e.getMessage());
            }

        }
}}