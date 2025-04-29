package fitrack.workout.repository;

import fitrack.workout.entity.Video;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VideoRepository extends JpaRepository<Video, Long> {
        List<Video> findByUsername(String username);


}
