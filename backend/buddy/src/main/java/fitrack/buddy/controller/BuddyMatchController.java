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

    @GetMapping("retrieveByEmail")
    public List<BuddyMatch> retrieveBuddyMatchesByUserEmail(@RequestHeader("Authorization") String token) {
        return buddyMatchService.findAllByUserEmail(token);
    }
    @GetMapping("findbyId/{id}")
    public BuddyMatch findBuddyMatchById(@PathVariable Long id) {
        return buddyMatchService.getBuddyMatchById(id);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteBuddyMatch(@PathVariable Long id) {
        buddyMatchService.removeBuddyMatch(id);
        return ResponseEntity.ok("Buddy match with ID " + id + " has been deleted.");
    }

    @PostMapping("setReminder/{id}")
    public void setReminder(@PathVariable Long id, @RequestHeader("Authorization") String token) {
        buddyMatchService.setReminder(id, token);
    }
    @PostMapping("unsetReminder/{id}")
    public void unsetReminder(@PathVariable Long id, @RequestHeader("Authorization") String token) {
        buddyMatchService.unsetReminder(id, token);
    }

    @GetMapping("getEmail")
    public String getEmail(@RequestHeader("Authorization") String token) {
        return buddyMatchService.getEmail(token);
    }

}
