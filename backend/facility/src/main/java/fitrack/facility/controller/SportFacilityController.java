package fitrack.facility.controller;


import fitrack.facility.service.SportFacilityService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/facility")
@AllArgsConstructor
public class SportFacilityController {
    private SportFacilityService service;
}
