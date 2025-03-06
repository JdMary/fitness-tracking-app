package fitrack.buddy.controller;

import fitrack.buddy.entity.BuddyRequest;
import fitrack.buddy.service.IBuddyRequestService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/buddies/request")
@AllArgsConstructor
public class BuddyRequestController {
    private IBuddyRequestService buddyRequestService;
    @PostMapping("/add")
    public BuddyRequest addBuddyRequest(@RequestBody BuddyRequest buddyRequest) {
        return buddyRequestService.addBuddyRequest(buddyRequest);
    }
    @GetMapping("retrieve")
    public List<BuddyRequest> retrieveBuddyRequests() {
        return buddyRequestService.retrieveBuddyRequests();
    }

}
