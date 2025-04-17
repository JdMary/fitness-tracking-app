package fitrack.buddy.service;


import fitrack.buddy.client.UserClient;
import fitrack.buddy.entity.*;
import fitrack.buddy.repository.BuddyMatchRepository;
import fitrack.buddy.repository.BuddyRequestRepository;
import fitrack.buddy.repository.CountBuddyRequestsRepository;
import lombok.AllArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import fitrack.buddy.client.AuthClient;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@AllArgsConstructor
public class BuddyRequestService implements IBuddyRequestService {

    private BuddyRequestRepository repository;
    private BuddyMatchRepository matchRepository;
    private CountBuddyRequestsRepository r;
    private AuthClient authClient;
    private UserClient userClient;
    private static final String BUDDY_REQUEST_NOT_FOUND = "BuddyRequest not found";


    @Override
    public List<BuddyRequest> retrieveBuddyRequests() { return repository.findAll(); }

    @Override
    public BuddyRequest addBuddyRequest(BuddyRequest buddyRequest, String token) {
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        buddyRequest.setUserEmail(username);
        buddyRequest.setStatus(Status.PENDING);
        return repository.save(buddyRequest);
    }

    @Override
    public List<BuddyRequest> findAllByUserEmail(String token) {
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        return repository.findAllPendingOrWaitingByUserEmail(username);
    }

    @Override
    public void removeBuddyRequest(Long id) {
        repository.deleteById(id);
    }

    @Override
    public BuddyRequest addPotentialMatch(Long id, String token) {
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        BuddyRequest buddyRequest = repository.findById(id)
                .orElseThrow(() -> new RuntimeException(BUDDY_REQUEST_NOT_FOUND));
        buddyRequest.setPotentialMatch(username);
        buddyRequest.setStatus(Status.WAITING);
        return repository.save(buddyRequest);
    }

    @Override
    public BuddyRequest findBuddyRequestById(Long id) {
        return repository.findBuddyRequestById(id);
    }

    @Override
    public BuddyRequest updateBuddyRequest(Long id, BuddyRequest buddyRequest) {
        BuddyRequest oldBuddyRequest = repository.findBuddyRequestById(id);
        oldBuddyRequest.setGoal(buddyRequest.getGoal());
        oldBuddyRequest.setWorkoutStartTime(buddyRequest.getWorkoutStartTime());
        oldBuddyRequest.setDuration(buddyRequest.getDuration());
        return repository.save(oldBuddyRequest);
    }


    @Override
    public BuddyMatch acceptPotentialMatch(Long id) {
        BuddyRequest buddyRequest = repository.findById(id)
                .orElseThrow(() -> new RuntimeException(BUDDY_REQUEST_NOT_FOUND));
        buddyRequest.setStatus(Status.ACCEPTED);
        BuddyMatch buddyMatch = BuddyMatch.builder()
                .requestId(buddyRequest.getId())
                .email1(buddyRequest.getUserEmail())
                .email2(buddyRequest.getPotentialMatch())
                .goal(buddyRequest.getGoal())
                .workoutStartTime(buddyRequest.getWorkoutStartTime())
                .duration(buddyRequest.getDuration())
                .build();
        return matchRepository.save(buddyMatch);
    }

    @Override
    public BuddyRequest rejectPotentialMatch(Long id) {
        BuddyRequest buddyRequest = repository.findById(id)
                .orElseThrow(() -> new RuntimeException(BUDDY_REQUEST_NOT_FOUND));
        buddyRequest.setStatus(Status.REJECTED);
        return repository.save(buddyRequest);
    }

    @Override
    public String displayUser(String userEmail) {
        return userClient.retrieveUserByEmail(userEmail).getBody().getName();
    }

    @Override
    public List<BuddyRequest> findAllNotOwnedByUser(String token) {
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        return repository.findAllByUserEmailNot(username);
    }

    @Override
    public Map<String, Long> countByStatus() {
        List<Object[]> results = repository.countByStatus();
        Object[] row = results.get(0);

        Map<String, Long> map = new HashMap<>();
        map.put("PENDING", ((Number) row[0]).longValue());
        map.put("WAITING", ((Number) row[1]).longValue());
        map.put("ACCEPTED", ((Number) row[2]).longValue());
        map.put("REJECTED", ((Number) row[3]).longValue());
        map.put("EXPIRED", ((Number) row[4]).longValue());

        return map;
    }

    @Override
    public Map<String, Long> countByAcceptedOrRejected() {
        List<Object[]> results = repository.countByAcceptedOrRejected();
        Object[] row = results.get(0);

        Map<String, Long> map = new HashMap<>();
        map.put("ACCEPTED", ((Number) row[0]).longValue());
        map.put("REJECTED OR EXPIRED", ((Number) row[1]).longValue());
        return map;
    }


    @Scheduled(fixedRate = 3600000)
    @Override
    public void setExpired() {
        List<BuddyRequest> b = repository.findAll();
        b.forEach(buddyRequest -> {
            if (buddyRequest.getStatus() == Status.PENDING && buddyRequest.getWorkoutStartTime().isBefore(LocalDateTime.now())) {
                buddyRequest.setStatus(Status.EXPIRED);
                repository.save(buddyRequest);
            }
        });
    }

    @Scheduled(cron = "0 0 0 * * *")
    @Override
    public void logDailyRequestCount() {
        Long count = repository.countRequestsToday();

        CountBuddyRequests stat = CountBuddyRequests.builder()
                .count(count.intValue())
                .date(LocalDate.now())
                .build();

        r.save(stat);
    }
}
