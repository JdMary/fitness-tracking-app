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

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteBuddyRequest(@PathVariable Long id) {
        buddyRequestService.removeBuddyRequest(id);
        return ResponseEntity.ok("Buddy request with ID " + id + " has been deleted.");
    }
    @PutMapping("addPotentialMatch/{id}")
    public BuddyRequestResponseDTO addPotentialMatch(@PathVariable Long id, @RequestBody Long requestId) {
        return buddyRequestService.addPotentialMatch(id, requestId);
    }
    @GetMapping("display/{id}")
    public BuddyRequest displayPotentialMatch(@PathVariable Long id) {
        return buddyRequestService.displayPotentialMatch(id);
    }
    @PostMapping("/addMatch/{id}")
    public BuddyMatch addBuddyMatch(@PathVariable Long id) {
        return buddyRequestService.acceptPotentialMatch(id);
    }
}
