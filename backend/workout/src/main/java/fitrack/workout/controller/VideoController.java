package fitrack.workout.controller;


import fitrack.workout.entity.Video;
import fitrack.workout.repository.VideoRepository;
import fitrack.workout.service.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/v1/workouts/videos")
@CrossOrigin(origins = "http://localhost:4200")
public class VideoController {

    @Autowired
    private VideoService videoService;


    @PostMapping("/save")
    public ResponseEntity<Video> saveVideo(@RequestBody Video video ,@RequestHeader("Authorization") String token) {

        return ResponseEntity.ok(videoService.saveVideo(video,token));
    }

}
