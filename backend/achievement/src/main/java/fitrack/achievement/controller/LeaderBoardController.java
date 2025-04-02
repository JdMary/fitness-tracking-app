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

@RequestMapping("/api/v1/achievements/board")
public class LeaderBoardController {


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

    @GetMapping("/name/{name}")
    public ResponseEntity<Optional<LeaderBoard>> findByName(@PathVariable("name") String name) {
        return ResponseEntity.ok(service.findByname(name));
    }


}