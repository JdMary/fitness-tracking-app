package fitrack.buddy.service;


import fitrack.buddy.repository.BuddyRequestRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class BuddyRequestService {
    private BuddyRequestRepository repository;
}
