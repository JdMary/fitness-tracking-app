package fitrack.buddy.service;

import fitrack.buddy.entity.BuddyMatch;
import fitrack.buddy.repository.BuddyMatchRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class BuddyMatchService implements IBuddyMatchService{

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
    public List<BuddyMatch> findAllByUserEmail(String email) {
        return repository.findAllByEmail1(email);
    }

    @Override
    public void removeBuddyMatch(Long id) {
        repository.deleteById(id);
    }
}
