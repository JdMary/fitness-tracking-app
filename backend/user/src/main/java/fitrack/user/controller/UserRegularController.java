package fitrack.user.controller;

import fitrack.user.entity.UserRegular;
import fitrack.user.entity.dtos.LeaderBoardDTO;
import fitrack.user.service.UserRegularService;
import fitrack.user.service.UserService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/usersRegular")
public class UserRegularController {

    private  final UserRegularService service;

    public UserRegularController(UserRegularService service) {
        this.service = service;
    }

    @GetMapping("/test")
    public String testUser() {
        return "User controller fonctionne ✅";
    }


    @PostMapping("/addUser")
    @ResponseStatus(HttpStatus.CREATED)
    public void save(
            @RequestBody UserRegular user
    ) {
        service.saveUser(user);
    }

    @GetMapping("/listUsers")
    public ResponseEntity<List<UserRegular>> findAll() {
        return ResponseEntity.ok(service.findAllUsers());
    }

    @GetMapping("/board/{board-id}")
    public ResponseEntity<List<UserRegular>> findAllUsers(
            @PathVariable("board-id") String boardId
    ) {
        return ResponseEntity.ok(service.findAllUsersByBoard(boardId));
    }


    @GetMapping("/with-name/{name}")
    public ResponseEntity<LeaderBoardDTO> getBoardByName(@PathVariable("name") String name){

        return ResponseEntity.ok(service.getBoard(name));
    }




}

