package fitrack.achievement.client;

import fitrack.achievement.entity.User;
import fitrack.achievement.entity.dtos.UserDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@FeignClient(name = "auth-service", url = "${application.config.auth-url}")
public interface AuthClient {

    @GetMapping("/extract-username")
     ResponseEntity<String> extractUsername(@RequestHeader("Authorization") String bearerToken);

    @GetMapping("/extract-user-details")
     ResponseEntity<User> extractUserDetails(@RequestHeader("Authorization") String bearerToken);

    @GetMapping("/extract-name")
    public ResponseEntity<String> extractName(@RequestHeader("Authorization") String bearerToken);

    @GetMapping("/users-by-board/{boardId}")
    public ResponseEntity<List<User>> getUsersByBoardId(@PathVariable String boardId);


    @GetMapping("/board-id-by-user/{userId}")
    public ResponseEntity<String > getBoardIdByUserId(@PathVariable String userId);

    @PostMapping("/update-rank")
    public ResponseEntity<String> updateUserRank(@RequestParam String id, @RequestParam int rank);
    @PostMapping("/update-xp")
    public ResponseEntity<String> updateUserXp(@RequestParam String id, @RequestParam int xpPoints);
    @GetMapping("/user/{id}")
    ResponseEntity<User> getUserById(@PathVariable String id);
    @GetMapping("/retrieve-all-users")
    ResponseEntity<List<User>> getAllUsers();
    @PostMapping("/update-board")
    public ResponseEntity<String> updateUserboard(@RequestParam String id, @RequestParam(required = false)String boardId);


}

