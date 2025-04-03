package fitrack.achievement.scheduler;


import fitrack.achievement.entity.Challenge;
import fitrack.achievement.entity.ChallengeStatus;
import fitrack.achievement.repository.ChallengeRepository;
import fitrack.achievement.service.SmsService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ChallengeScheduler {
    @Autowired
    private  ChallengeRepository challengeRepository;

    private SmsService smsService;

    public ChallengeScheduler(ChallengeRepository challengeRepository, SmsService smsService) {
        this.challengeRepository = challengeRepository;
        this.smsService = smsService;
    }
//private final UserService userService;

    @Scheduled(fixedRate = 60000)
    public void notifyChallenges() {
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime fifteenMinutesLater = now.plusMinutes(15);


        List<Challenge> remind15 = challengeRepository.findByStatusAndStartDateBetween(ChallengeStatus.PENDING, fifteenMinutesLater.minusSeconds(30), fifteenMinutesLater.plusSeconds(30));
        for (Challenge challenge : remind15) {
            if (!challenge.isReminder15()) {
                smsService.sendSms("+21655343916", "📅 Ton défi \"" + challenge.getTitle() + "\" commence dans 15 minutes !");
                challenge.setReminder15(true);
                challengeRepository.save(challenge);
            }
        }

        List<Challenge> toStart = challengeRepository
                .findByStatusAndStartDateBefore(ChallengeStatus.PENDING, now);

        for (Challenge challenge : toStart) {
            challenge.setStatus(ChallengeStatus.ACTIVE);
            challengeRepository.save(challenge);

            smsService.sendSms(
                    "+21655343916",
                    "🚀 Le défi \"" + challenge.getTitle() + "\" commence maintenant ! Bonne chance 💥"
            );
            checkParticipation(challenge);
        }
    }
    @Async
    public void checkParticipation(Challenge challenge) {try {

            Thread.sleep(300000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        if (!challenge.isParticipation()) {
            challenge.setStatus(ChallengeStatus.CANCELED);
            challengeRepository.save(challenge);


            smsService.sendSms("+21655410371",
                    "🚫 Le défi \"" + challenge.getTitle() + "\" a été annulé car vous n'avez pas participé .");
        }
    }
}
