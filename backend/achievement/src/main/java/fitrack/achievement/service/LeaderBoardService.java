package fitrack.achievement.service;

import fitrack.achievement.client.UserClient;
import fitrack.achievement.entity.dtos.FullBoardResponse;
import fitrack.achievement.entity.LeaderBoard;
import fitrack.achievement.repository.LeaderBoardRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LeaderBoardService {
    @Autowired
    private LeaderBoardRepository repository;

    private UserClient client;

    public LeaderBoardService(UserClient client) {
        this.client = client;
    }



    public List<LeaderBoard> findAllBoard() {
        return repository.findAll();
    }

    public FullBoardResponse findBoardWithUsers(String boardName) {
        var optionalBoard = repository.findByName(boardName);

        if (optionalBoard.isEmpty()) {
            FullBoardResponse response = new FullBoardResponse();
            response.setName("NOT_FOUND");
            response.setDescription("No leaderboard with name: " + boardName);
            response.setUsers(List.of());
            return response;
        }

        LeaderBoard board = optionalBoard.get();
        var users = client.findAllUsersByBoard(board.getBoardId());

        // 🔽 Tri décroissant par xpPoints
        users.sort((u1, u2) -> Integer.compare(u2.getXpPoints(), u1.getXpPoints()));
        for (int i = 0; i < users.size(); i++) {
            users.get(i).setRank(i + 1);
        }
        FullBoardResponse response = new FullBoardResponse();
        response.setName(board.getName());
        response.setDescription(board.getDescription());
        response.setUsers(users);

        return response;

    }



    public void save(LeaderBoard board) {repository.save(board);}



    public Optional<LeaderBoard> findByname(String name) {
        return repository.findByName(name);
    }


}