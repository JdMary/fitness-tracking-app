package fitrack.buddy.service;

import fitrack.buddy.client.AuthClient;
import fitrack.buddy.entity.BuddyMatch;
import fitrack.buddy.repository.BuddyMatchRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class BuddyMatchService implements IBuddyMatchService{

    private AuthClient authClient;
    BuddyMatchRepository repository;

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
        return repository.findAllByEmail1(username);
    }

    @Override
    public void removeBuddyMatch(Long id) {
        repository.deleteById(id);
    }
}
