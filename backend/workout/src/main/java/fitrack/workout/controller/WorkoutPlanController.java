package fitrack.workout.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/facility")
@RequiredArgsConstructor
public class SportFacilityController {
    private final SportFacilityService service;
}
