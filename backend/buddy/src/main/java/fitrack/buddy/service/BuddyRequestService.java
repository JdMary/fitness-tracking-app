package fitrack.buddy.service;


import fitrack.buddy.client.UserClient;
import fitrack.buddy.entity.*;
import fitrack.buddy.repository.BuddyMatchRepository;
import fitrack.buddy.repository.BuddyRequestRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import fitrack.buddy.client.AuthClient;

import java.util.List;

@Service
@AllArgsConstructor
public class BuddyRequestService implements IBuddyRequestService {

    private BuddyRequestRepository repository;
    private BuddyMatchRepository matchRepository;
    private AuthClient authClient;
    private UserClient userClient;
    private static final String BUDDY_REQUEST_NOT_FOUND = "BuddyRequest not found";
    private static final String POTENTIAL_MATCH_NOT_FOUND = "Potential match not found";


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
        return repository.findAllByUserEmail(username);
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
    public BuddyMatch acceptPotentialMatch(Long id) {
        BuddyRequest buddyRequest = repository.findById(id)
                .orElseThrow(() -> new RuntimeException(BUDDY_REQUEST_NOT_FOUND));
        buddyRequest.setStatus(Status.ACCEPTED);
        BuddyMatch buddyMatch = BuddyMatch.builder()
                .requestId(buddyRequest.getId())
                .email1(buddyRequest.getUserEmail())
                .email2(buddyRequest.getPotentialMatch())
                .build();
        //buddyRequest.setMatch(buddyMatch);
        return matchRepository.save(buddyMatch);
    }

    @Override
    public ResponseEntity<UserDTO> displayUser(String userEmail) {
        System.out.println(userClient.retrieveUserByEmail(userEmail).getBody());
        return userClient.retrieveUserByEmail(userEmail);
    }

    @Override
    public List<BuddyRequest> findAllNotOwnedByUser(String token) {
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        return repository.findAllByUserEmailNot(username);
    }
}
