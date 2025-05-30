package fitrack.facility.service;

import fitrack.facility.entity.SportFacility;

import java.util.List;

public interface ISportFacilityService {
    List<SportFacility> retrieveAllFacilities();
    SportFacility addFacility(SportFacility facility, String token);
    SportFacility updateFacility(SportFacility facility, String token);
    SportFacility retrieveFacility(Long id);
     void removeFacility(Long id,String token);
    List<SportFacility> findAvailableFacilities();

    List<String> findDistinctLocations();

    List<String> findDistinctSportTypes();
}
