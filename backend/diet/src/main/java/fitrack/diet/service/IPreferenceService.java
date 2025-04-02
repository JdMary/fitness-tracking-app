package fitrack.diet.service;

import fitrack.diet.entity.Preference;

public interface IPreferenceService {
//    Preference savePreference(Preference preference);
//    Preference updatePreference(String preferenceId, Preference preference);
//
//    List<Preference> getUserPreferences(String userId);
//
//    Preference getPreferenceById(String preferenceId);
//    Preference getPreferenceByUserIdAndTimeFrame(String userId, String timeFrame);
//    void deletePreference(Long preferenceId);
//    ResponseEntity<String> getMealPlan(String userId);
    Preference addPreference(Preference preference,String token);

}
