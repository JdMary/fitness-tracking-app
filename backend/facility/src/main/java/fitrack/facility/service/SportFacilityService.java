package fitrack.facility.service;


import fitrack.facility.repository.SportFacilityRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class SportFacilityService {
    private SportFacilityRepository repository;
}
