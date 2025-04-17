package fitrack.buddy.service;

import fitrack.buddy.client.AuthClient;
import fitrack.buddy.entity.BuddyMatch;
import fitrack.buddy.entity.BuddyRequest;
import fitrack.buddy.entity.Status;
import fitrack.buddy.repository.BuddyMatchRepository;
import fitrack.buddy.repository.BuddyRequestRepository;
import lombok.AllArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@AllArgsConstructor
public class BuddyMatchService implements IBuddyMatchService{

    private AuthClient authClient;
    BuddyMatchRepository repository;
    BuddyRequestRepository requestRepository;

    @Override
    public List<BuddyMatch> retrieveBuddyMatches() {
        return repository.findAll();
    }

    @Override
    public BuddyMatch addBuddyMatch(BuddyMatch buddyMatch) {
        return repository.save(buddyMatch);
    }

    @Override
    public List<BuddyMatch> findAllByUserEmail(String token) {
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        return repository.findAllByEmail(username);
    }

    @Override
    public void removeBuddyMatch(Long id) {
        repository.deleteById(id);
    }

    @Scheduled(fixedRate = 3600000)
    @Override
    public void deleteExpired() {
        List<BuddyMatch> b = repository.findAll();
        b.forEach(buddyMatch -> {
            if (buddyMatch.getWorkoutStartTime().isBefore(LocalDateTime.now())) {
                repository.deleteById(buddyMatch.getId());
            }
        });
    }
}
