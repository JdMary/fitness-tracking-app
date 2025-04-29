package fitrack.workout.service;

import fitrack.workout.client.AuthClient;
import fitrack.workout.entity.Video;
import fitrack.workout.repository.VideoRepository;
import fitrack.workout.repository.WorkoutPlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class VideoService {
    @Autowired
    private VideoRepository videoRepository;
    @Autowired
    private AuthClient authClient;
    public List<Video> getVideosByUsername(String token){
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        return videoRepository.findByUsername(username);
    }
    public Video saveVideo(Video video,String token){
        String username = String.valueOf(authClient.extractUsername(token).getBody());
        return videoRepository.save(video);
    }
}
