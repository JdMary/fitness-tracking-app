package fitrack.buddy.controller;

import fitrack.buddy.entity.BuddyRequest;
import fitrack.buddy.service.IBuddyRequestService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("retrieve/{userEmail}")
    public List<BuddyRequest> retrieveBuddyRequestsByUserEmail(@PathVariable String userEmail) {
        return buddyRequestService.findAllByUserEmail(userEmail);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteBuddyRequest(@PathVariable Long id) {
        buddyRequestService.removeBuddyRequest(id);
        return ResponseEntity.ok("Buddy request with ID " + id + " has been deleted.");
    }

}
