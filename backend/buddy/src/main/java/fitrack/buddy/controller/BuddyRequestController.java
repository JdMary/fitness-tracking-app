package fitrack.buddy.controller;

import fitrack.buddy.entity.BuddyMatch;
import fitrack.buddy.entity.BuddyRequest;
import fitrack.buddy.service.BuddyRequestService;
import fitrack.buddy.service.IBuddyRequestService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

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
    @GetMapping("findbyId/{id}")
    public BuddyRequest findBuddyRequestById(@PathVariable Long id) {
        return buddyRequestService.findBuddyRequestById(id);
    }
    @PutMapping("addPotentialMatch/{id}")
    public BuddyRequest addPotentialMatch(@PathVariable Long id, @RequestHeader("Authorization") String token) {
        return buddyRequestService.addPotentialMatch(id, token);
    }
    @PutMapping("update/{id}")
    public BuddyRequest updateBuddyRequest(@PathVariable Long id, @RequestBody BuddyRequest buddyRequest) {
        return  buddyRequestService.updateBuddyRequest(id,buddyRequest);
    }
    @PostMapping("/acceptMatch/{id}")
    public BuddyMatch addBuddyMatch(@PathVariable Long id) {
        return buddyRequestService.acceptPotentialMatch(id);
    }
    @PutMapping("/rejectMatch/{id}")
    public BuddyRequest rejectPotentialMatch(@PathVariable Long id) {
        return buddyRequestService.rejectPotentialMatch(id);
    }
    @GetMapping("/displayUser/{userEmail}")
    public String displayUser(@PathVariable String userEmail) {
        return buddyRequestService.displayUser(userEmail);
    }
    @GetMapping("countByStatus")
    public Map<String, Long> countByStatus() {
        return buddyRequestService.countByStatus();
    }

}
