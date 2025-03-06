package fitrack.buddy.controller;


import fitrack.buddy.entity.BuddyMatch;
import fitrack.buddy.service.IBuddyMatchService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/buddies/match")
@AllArgsConstructor
public class BuddyMatchController {
    private IBuddyMatchService buddyMatchService;

    @PostMapping("/add")
    public BuddyMatch addBuddyMatch(@RequestBody BuddyMatch buddyMatch) {
        return buddyMatchService.addBuddyMatch(buddyMatch);
    }
    @GetMapping("retrieve")
    public List<BuddyMatch> retrieveBuddyMatches() {
        return buddyMatchService.retrieveBuddyMatches();
    }

    @GetMapping("retrieve/{userEmail}")
    public List<BuddyMatch> retrieveBuddyMatchesByUserEmail(@PathVariable String userEmail) {
        return buddyMatchService.findAllByUserEmail(userEmail);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteBuddyMatch(@PathVariable Long id) {
        buddyMatchService.removeBuddyMatch(id);
        return ResponseEntity.ok("Buddy match with ID " + id + " has been deleted.");
    }
}
