package fitrack.buddy.service;


import fitrack.buddy.entity.BuddyRequest;
import fitrack.buddy.entity.Goals;
import fitrack.buddy.entity.Status;
import fitrack.buddy.repository.BuddyRequestRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class BuddyRequestService implements IBuddyRequestService {
    private BuddyRequestRepository repository;

    @Override
    public List<BuddyRequest> retrieveBuddyRequests() { return repository.findAll(); }

    @Override
    public BuddyRequest addBuddyRequest(BuddyRequest buddyRequest) {
        return repository.save(buddyRequest);
    }

}
