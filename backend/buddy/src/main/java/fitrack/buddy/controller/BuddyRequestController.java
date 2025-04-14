package fitrack.buddy.controller;

import fitrack.buddy.entity.BuddyMatch;
import fitrack.buddy.entity.BuddyRequest;
import fitrack.buddy.entity.BuddyRequestResponseDTO;
import fitrack.buddy.service.BuddyRequestService;
import fitrack.buddy.service.IBuddyRequestService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/buddies/request")
public class BuddyRequestController {
    private final IBuddyRequestService buddyRequestService;
    BuddyRequestController(BuddyRequestService buddyRequestService) {
        this.buddyRequestService = buddyRequestService;
    }
    @PostMapping("/add")
    public BuddyRequest addBuddyRequest(@RequestBody BuddyRequest buddyRequest,@RequestHeader("Authorization") String token) {
        return buddyRequestService.addBuddyRequest(buddyRequest, token);
    }
    @GetMapping("retrieve")
    public List<BuddyRequest> retrieveBuddyRequests() {
        return buddyRequestService.retrieveBuddyRequests();
    }

    @GetMapping("retrieveByEmail")
    public List<BuddyRequest> retrieveBuddyRequestsByUserEmail(@RequestHeader("Authorization") String token) {
        return buddyRequestService.findAllByUserEmail(token);
    }
    @GetMapping("retrieveByNotEmail")
    public List<BuddyRequest> retrieveBuddyRequestsByUserEmailNot(@RequestHeader("Authorization") String token) {
        return buddyRequestService.findAllNotOwnedByUser(token);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteBuddyRequest(@PathVariable Long id) {
        buddyRequestService.removeBuddyRequest(id);
        return ResponseEntity.ok("Buddy request with ID " + id + " has been deleted.");
    }
    @PutMapping("addPotentialMatch/{id}")
    public BuddyRequest addPotentialMatch(@PathVariable Long id, @RequestHeader("Authorization") String token) {
        return buddyRequestService.addPotentialMatch(id, token);
    }
    @PostMapping("/acceptMatch/{id}")
    public BuddyMatch addBuddyMatch(@PathVariable Long id) {
        return buddyRequestService.acceptPotentialMatch(id);
    }
}
