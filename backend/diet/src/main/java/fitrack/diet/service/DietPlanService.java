package fitrack.diet.service;


import fitrack.buddy.repository.BuddyRequestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BuddyRequestService {
    private final BuddyRequestRepository repository;
}
