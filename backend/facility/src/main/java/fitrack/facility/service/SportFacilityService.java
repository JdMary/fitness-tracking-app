package fitrack.facility.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.fasterxml.jackson.databind.ObjectMapper;
import fitrack.facility.client.AuthClient;
import fitrack.facility.entity.FacilityDowntime;
import fitrack.facility.entity.SportFacility;
import fitrack.facility.entity.Subscription;
import fitrack.facility.entity.User;
import fitrack.facility.entity.enums.SubscriptionStatus;
import fitrack.facility.repository.SportFacilityRepository;
import fitrack.facility.repository.SubscriptionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import fitrack.facility.repository.FacilityDowntimeRepository;

import java.io.IOException;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class SportFacilityService implements ISportFacilityService {

    private final SportFacilityRepository repository;
    private final AuthClient authClient;
    private final ObjectMapper objectMapper; //
    private final FacilityDowntimeRepository downtimeRepository;
    private final SubscriptionRepository subscriptionRepository;
    private final Cloudinary cloudinary;

    @Override
    public List<SportFacility> retrieveAllFacilities() {
        return repository.findAll();
    }

    @Override
    public SportFacility addFacility(SportFacility facility, String token) {
        Object response = authClient.extractUserDetails(token).getBody();

        User user = objectMapper.convertValue(response, User.class);

        if (!"FACILITY_MANAGER".equals(user.getRole())) {
            throw new RuntimeException("Only FACILITY_MANAGER users are allowed to create a facility.");
        }

        facility.setOwnerEmail(user.getUsername());
        if (repository.existsByName(facility.getName())) {
            throw new RuntimeException("Facility name already exists!");
        }

        return repository.save(facility);
    }

    @Override
    public SportFacility updateFacility(SportFacility facility, String token) {
        Object response = authClient.extractUserDetails(token).getBody();
        User user = objectMapper.convertValue(response, User.class);

        if (!"FACILITY_MANAGER".equals(user.getRole())) {
            throw new RuntimeException("Seuls les FACILITY_MANAGER peuvent modifier une facility.");
        }



        SportFacility existing = repository.findById(facility.getId())
                .orElseThrow(() -> new RuntimeException("Facility non trouvée"));

        if (repository.existsByName(facility.getName()) && !existing.getName().equals(facility.getName())) {
            throw new RuntimeException("Facility name already exists!");
        }


        handleDowntimeLogic(existing, facility.isAvailability());

        existing.setAvailability(facility.isAvailability());
        existing.setDescription(facility.getDescription());
        existing.setImage(facility.getImage());
        existing.setLocation(facility.getLocation());
        existing.setMaxSubscription(facility.getMaxSubscription());
        existing.setName(facility.getName());
        existing.setNormalPrice(facility.getNormalPrice());
        existing.setPremiumPrice(facility.getPremiumPrice());
        existing.setSportType(facility.getSportType());

        return repository.save(existing);
    }
    public SportFacility findById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Facility not found"));
    }

    @Override
    public SportFacility retrieveFacility(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Facility non trouvée"));
    }

    @Override
    public void removeFacility(Long id,String token) {
        Object response = authClient.extractUserDetails(token).getBody();
        User user = objectMapper.convertValue(response, User.class);

        if (!"FACILITY_MANAGER".equals(user.getRole())) {
            throw new RuntimeException("Seuls les FACILITY_MANAGER peuvent supprimer une facility.");
        }
        SportFacility facility = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Facility not found"));

        String imageUrl = facility.getImage();

        if (imageUrl != null && !imageUrl.isEmpty()) {
            String publicId = extractPublicIdFromUrl(imageUrl);
            try {
                Map result = cloudinary.uploader().destroy(publicId, ObjectUtils.emptyMap());
                System.out.println("Cloudinary deletion result: " + result);
            } catch (IOException e) {
                System.err.println("Cloudinary deletion error: " + e.getMessage());
            }
        }

        repository.deleteById(id);
    }



    private String extractPublicIdFromUrl(String url) {
        String[] parts = url.split("/");
        String fileName = parts[parts.length - 1];
        return fileName.split("\\.")[0];
    }





    @Override

    public List<SportFacility> findAvailableFacilities() {
        return repository.findByAvailability(true);
    }
    private void handleDowntimeLogic(SportFacility existing, boolean newAvailability) {
        if (!existing.isAvailability() && newAvailability) {

            var downtimes = downtimeRepository.findByFacility(existing);
            var latest = downtimes.stream()
                    .filter(d -> d.getEndDate() == null)
                    .findFirst()
                    .orElse(null);

            if (latest != null) {
                LocalDate now = LocalDate.now();
                latest.setEndDate(now);
                downtimeRepository.save(latest);

                long days = ChronoUnit.DAYS.between(latest.getStartDate(), now);

                List<Subscription> affectedSubs = subscriptionRepository
                        .findBySportFacilityAndStatus(existing, SubscriptionStatus.ACTIVE);

                for (Subscription sub : affectedSubs) {
                    if (!sub.getEndDate().isBefore(latest.getStartDate())) {
                        sub.setEndDate(sub.getEndDate().plusDays(days));
                        subscriptionRepository.save(sub);

                        List<Subscription> futureSubs = subscriptionRepository
                                .findByOwnerEmailAndSportFacilityOrderByStartDateAsc(sub.getOwnerEmail(), existing);

                        boolean startAdjusting = false;
                        for (Subscription nextSub : futureSubs) {
                            if (startAdjusting) {
                                nextSub.setStartDate(nextSub.getStartDate().plusDays(days));
                                nextSub.setEndDate(nextSub.getEndDate().plusDays(days));
                                subscriptionRepository.save(nextSub);
                            }
                            if (nextSub.getId().equals(sub.getId())) {
                                startAdjusting = true;
                            }
                        }
                    }
                }

            }
        } else if (existing.isAvailability() && !newAvailability) {
            var downtime = FacilityDowntime.builder()
                    .startDate(LocalDate.now())
                    .facility(existing)
                    .build();
            downtimeRepository.save(downtime);
        }
    }
    public List<SportFacility> searchFacilities(String location, String sportType, Boolean availability) {
        return repository.findByFilters(location, sportType, availability);
    }
    @Override
    public List<String> findDistinctLocations() {
        return repository.findDistinctLocations();
    }

    @Override
    public List<String> findDistinctSportTypes() {
        return repository.findDistinctSportTypes();
    }

    public List<SportFacility> searchFacilitiesByName(String keyword) {
        return repository.searchByNameContaining(keyword);
    }



}
