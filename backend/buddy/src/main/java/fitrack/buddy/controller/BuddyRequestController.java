package fitrack.buddy.controller;

import fitrack.buddy.service.BuddyRequestService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/buddies/request")
@AllArgsConstructor
public class BuddyRequestController {
    private BuddyRequestService service;
}
