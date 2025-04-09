package fitrack.achievement.controller;


import fitrack.achievement.entity.dtos.FullBoardResponse;
import fitrack.achievement.entity.LeaderBoard;
import fitrack.achievement.service.LeaderBoardService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/leaderBoard")
public class LeaderBoardController {

    @PutMapping("/update/{id}")
    public ResponseEntity<LeaderBoard> updateLeaderboard(
            @PathVariable("id") String id,
            @RequestBody LeaderBoard newData) {
        LeaderBoard updatedLeaderboard = service.updateLeaderboard(id, newData);
        return ResponseEntity.ok(updatedLeaderboard);
    }
    @GetMapping("/test")
    public String test() {
        return "Service Achievement fonctionne";
    }

    private final LeaderBoardService service;

    public LeaderBoardController(LeaderBoardService service) {
        this.service = service;
    }


    @GetMapping("/liste")
    public ResponseEntity<List<LeaderBoard>> findAllBoard() {
        return ResponseEntity.ok(service.findAllBoard());
    }

    @GetMapping("/withUsers/{board-id}")
    public ResponseEntity<FullBoardResponse> findAllBoardWithUsers(
            @PathVariable("board-id") String boardId
    ) {
        return ResponseEntity.ok(service.findBoardWithUsers(boardId));
    }

    @PostMapping("/addBoard")
    @ResponseStatus(HttpStatus.CREATED)
    public void save(@RequestBody LeaderBoard board) {
        System.out.println("Received board: " + board);
        service.save(board);
    }
    @DeleteMapping("/delete/{board-id}")
    public ResponseEntity<String> deleteBoard(@PathVariable("board-id") String boardId) {
        try {
            service.deleteBoard(boardId);
            return ResponseEntity.ok("Leaderboard deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Error deleting leaderboard: " + e.getMessage());
        }
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<Optional<LeaderBoard>> findByName(@PathVariable("name") String name) {
        return ResponseEntity.ok(service.findName(name));
    }
    @GetMapping("/getById/{id}")
    public ResponseEntity<Optional<LeaderBoard>> findById(@PathVariable("id") String id) {
        return ResponseEntity.ok(service.findbyID(id));
    }
    // ✅ Endpoint : Get Leaderboard by boardId
    @GetMapping("/full/{boardId}")
    public ResponseEntity<FullBoardResponse> getLeaderboardWithUsers(@PathVariable String boardId) {
        FullBoardResponse response = service.findBoardWithUsers(boardId);
        return ResponseEntity.ok(response);
    }

    // ✅ Endpoint : Get Leaderboard by userId
    @GetMapping("/byUser/{userId}")
    public ResponseEntity<FullBoardResponse> getLeaderboardByUserId(@PathVariable String userId) {
        FullBoardResponse response = service.findByUserId(userId);
        return ResponseEntity.ok(response);
    }




}