package fitrack.diet.repository;

import fitrack.diet.entity.Preference;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PreferenceRepository extends JpaRepository<Preference, Long> {
    //List<Preference> findByUserId(String userId);

}
