package fitrack.buddy.service;


import fitrack.buddy.entity.BuddyMatch;
import fitrack.buddy.entity.BuddyRequest;
import fitrack.buddy.entity.BuddyRequestResponseDTO;
import fitrack.buddy.entity.Status;
import fitrack.buddy.repository.BuddyMatchRepository;
import fitrack.buddy.repository.BuddyRequestRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import fitrack.buddy.client.AuthClient;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;

@Service
@AllArgsConstructor
public class BuddyRequestService implements IBuddyRequestService {

    private BuddyRequestRepository repository;
    private BuddyMatchRepository matchRepository;
    private AuthClient authClient;
    private static final String BUDDY_REQUEST_NOT_FOUND = "BuddyRequest not found";
    private static final String POTENTIAL_MATCH_NOT_FOUND = "Potential match not found";


    @Override
    public List<BuddyRequest> retrieveBuddyRequests() { return repository.findAll(); }

    @Override
    public BuddyRequest addBuddyRequest(BuddyRequest buddyRequest, String token) {
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        buddyRequest.setUserEmail(username);
        return repository.save(buddyRequest);
    }

    @Override
    public List<BuddyRequest> findAllByUserEmail(String token) {
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        return repository.findAllByUserEmail(username);
    }

    @Override
    public void removeBuddyRequest(Long id) {
        repository.deleteById(id);
    }

    @Override
    public BuddyRequest changeWorkoutStartTime(Long id, LocalDateTime workoutStartTime) {
        BuddyRequest buddyRequest = repository.findById(id)
                .orElseThrow(() -> new RuntimeException(BUDDY_REQUEST_NOT_FOUND));
        buddyRequest.setWorkoutStartTime(workoutStartTime);
        return repository.save(buddyRequest);
    }

    @Override
    public BuddyRequestResponseDTO addPotentialMatch(Long id, Long requestId) {
        BuddyRequest buddyRequest = repository.findById(id)
                .orElseThrow(() -> new RuntimeException(BUDDY_REQUEST_NOT_FOUND));
        BuddyRequest buddyRequest1 = repository.findById(requestId)
                .orElseThrow(() -> new RuntimeException(BUDDY_REQUEST_NOT_FOUND));

        String message = "Same start time";

        if (!buddyRequest1.getWorkoutStartTime().equals(buddyRequest.getWorkoutStartTime())) {
            Duration difference = Duration.between(buddyRequest1.getWorkoutStartTime(), buddyRequest.getWorkoutStartTime()).abs();
            message = "The workout start time is off by: " + difference.toMinutes() + " minutes.";
        }

        buddyRequest.setPotentialMatch(requestId);
        buddyRequest.setStatus(Status.WAITING);
        BuddyRequest savedRequest = repository.save(buddyRequest);

        return new BuddyRequestResponseDTO(savedRequest, message);
    }


    @Override
    public BuddyRequest displayPotentialMatch(Long id) {
        BuddyRequest buddyRequest = repository.findById(id)
                .orElseThrow(() -> new RuntimeException(BUDDY_REQUEST_NOT_FOUND));
        return repository.findById(buddyRequest.getPotentialMatch())
                .orElseThrow(() -> new RuntimeException(POTENTIAL_MATCH_NOT_FOUND));
    }

    @Override
    public BuddyMatch acceptPotentialMatch(Long id) {
        BuddyRequest buddyRequest = repository.findById(id)
                .orElseThrow(() -> new RuntimeException(BUDDY_REQUEST_NOT_FOUND));
        BuddyRequest buddyRequest1 = repository.findById(buddyRequest.getPotentialMatch())
                .orElseThrow(() -> new RuntimeException(BUDDY_REQUEST_NOT_FOUND));
        buddyRequest.setStatus(Status.ACCEPTED);
        buddyRequest1.setStatus(Status.ACCEPTED);
        //BuddyMatch buddyMatch = new BuddyMatch(buddyRequest.getId(),buddyRequest1.getId(),buddyRequest.getUserEmail(),buddyRequest1.getUserEmail());
        BuddyMatch buddyMatch = new BuddyMatch();
        buddyMatch.setRequestId1(buddyRequest.getId());
        buddyMatch.setRequestId2(buddyRequest1.getId());
        buddyMatch.setEmail1(buddyRequest.getUserEmail());
        buddyMatch.setEmail2(buddyRequest1.getUserEmail());
        return matchRepository.save(buddyMatch);
    }
}
