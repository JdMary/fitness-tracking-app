package fitrack.achievement.controller;


import fitrack.achievement.entity.Challenge;
import fitrack.achievement.entity.dtos.FullBoardResponse;
import fitrack.achievement.entity.LeaderBoard;
import fitrack.achievement.service.LeaderBoardService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.ErrorResponse;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/leaderBoard")
public class LeaderBoardController {
    private final LeaderBoardService service;

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateLeaderboard(
            @PathVariable("id") String boardId,
            @RequestBody LeaderBoard newData) {
        try {
            service.updateLeaderboard(boardId, newData);
            return ResponseEntity.ok("✅ Leaderboard successfully updated !");
        } catch (IllegalArgumentException e) {
            String errorMessage = e.getMessage();
            String[] errors = errorMessage.split(" \\| ");
            return ResponseEntity.badRequest().body(Map.of(
                    "errors", errors,
                    "message", "❌ Erreurs de validation détectées"
            ));
        } catch (Exception e) {

            return ResponseEntity.badRequest().body(Map.of(
                    "message", "❌ Erreur lors de la mise à jour du leaderboard : " + e.getMessage()
            ));
        }
    }

    @GetMapping("/test")
    public String test() {
        return "Service Achievement fonctionne";
    }


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
    public ResponseEntity<?> save(@RequestBody LeaderBoard board) {
        try {
            System.out.println("Received Board: " + board);
            LeaderBoard savedboard = service.save(board);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedboard);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
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

    @GetMapping("/myLeaderBoard")
    public ResponseEntity<FullBoardResponse> getFullBoardByToken(@RequestHeader("Authorization") String token) {
        FullBoardResponse response = service.findByToken(token);
        return ResponseEntity.ok(response);
    }


    @DeleteMapping("/remove-user-from-board/{userId}")
    public ResponseEntity<String> removeUserFromBoard(@PathVariable String userId) {
        try {
            service.removeUserFromLeaderboard(userId);
            return ResponseEntity.status(HttpStatus.OK).body("User removed from leaderboard successfully.");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred: " + e.getMessage());
        }
    }

}