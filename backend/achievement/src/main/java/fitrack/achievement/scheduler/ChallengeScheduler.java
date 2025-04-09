package fitrack.achievement.scheduler;


import fitrack.achievement.client.UserClient;
import fitrack.achievement.entity.Challenge;
import fitrack.achievement.entity.ChallengeStatus;
import fitrack.achievement.entity.dtos.UserRegularDTO;
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
    private ChallengeRepository challengeRepository;

    private SmsService smsService;
    private UserClient userClient;

    public ChallengeScheduler(ChallengeRepository challengeRepository, SmsService smsService, UserClient userClient) {
        this.challengeRepository = challengeRepository;
        this.smsService = smsService;
        this.userClient = userClient;
    }
//private final UserService userService;

    @Scheduled(fixedRate = 6000)
    public void notifyChallenges() {
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime fifteenMinutesLater = now.plusMinutes(15);


        List<Challenge> remind15 = challengeRepository.findByStatusAndStartDateBetween(ChallengeStatus.PENDING, fifteenMinutesLater.minusSeconds(30), fifteenMinutesLater.plusSeconds(30));
        for (Challenge challenge : remind15) {
            if (!challenge.isReminder15()) {
                //UserRegularDTO user = userClient.getUserById(challenge.getUserId());
                //user.getPhoneNumber()
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

            //UserRegularDTO user = userClient.getUserById(challenge.getUserId());

            //user.getPhoneNumber(),
            try {
                smsService.sendSms("+21655343916", "📅 Ton défi \"" + challenge.getTitle() + "\" commence dans 15 minutes !");
            } catch (Exception e) {
                System.err.println("⚠️ Error sending SMS reminder: " + e.getMessage());
            }

            checkParticipation(challenge);
        }


        List<Challenge> toFail = challengeRepository
                .findByStatusAndEndDateBefore(ChallengeStatus.ACTIVE, LocalDateTime.now().minusMinutes(5));


        for (Challenge challenge : toFail) {
            if (!challenge.isParticipation()) continue;

            if (challenge.getStatus() != ChallengeStatus.COMPLETED) {
                challenge.setStatus(ChallengeStatus.FAILED);
                challenge.setXpPoints(0);
                challengeRepository.save(challenge);

                smsService.sendSms(
                        "+21655343916", // à remplacer par le vrai téléphone du user
                        "❌ Ton défi \"" + challenge.getTitle() + "\" a échoué : pas validation  + tes XP ont été perdus."
                );
            } else if (challenge.getStatus() == ChallengeStatus.COMPLETED) {
                try {
                    smsService.sendSms("+21655343916", "📅 Ton défi \"" + challenge.getTitle() + "\" commence dans 15 minutes !");
                } catch (Exception e) {
                    System.err.println("⚠️ Error sending SMS reminder: " + e.getMessage());
                }

            }
        }

    }

    @Async
    public void checkParticipation(Challenge challenge) {
        try {
            Thread.sleep(300000); // 5 minutes
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        Challenge latest = challengeRepository.findById(challenge.getChallengeId()).orElse(null);

        if (latest != null && !latest.isParticipation()) {
            latest.setStatus(ChallengeStatus.CANCELED);

            challengeRepository.save(latest);

            try {
                smsService.sendSms("+21655343916", "📅 Ton défi \"" + challenge.getTitle() + "\" commence dans 15 minutes !");
            } catch (Exception e) {
                System.err.println("⚠️ Error sending SMS reminder: " + e.getMessage());
            }

        }
}}