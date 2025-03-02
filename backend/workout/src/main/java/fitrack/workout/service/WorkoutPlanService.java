package fitrack.workout.service;


import fitrack.facility.repository.SportFacilityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SportFacilityService {
    private final SportFacilityRepository repository;
}
