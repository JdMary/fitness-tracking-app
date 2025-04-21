package fitrack.achievement.service;

import fitrack.achievement.client.AuthClient;
import fitrack.achievement.client.UserClient;
import fitrack.achievement.entity.User;
import fitrack.achievement.entity.dtos.FullBoardResponse;
import fitrack.achievement.entity.LeaderBoard;
import fitrack.achievement.repository.LeaderBoardRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LeaderBoardService {
    @Autowired
    private LeaderBoardRepository repository;

    private final AuthClient authClient;

  //  private UserClient client;

  //  public LeaderBoardService(UserClient client) {
      //  this.client = client;
 //   }



    public List<LeaderBoard> findAllBoard() {
        return repository.findAll();
    }

    public FullBoardResponse findBoardWithUsers(String boardId) {
        var optionalBoard = repository.findById(boardId);

        if (optionalBoard.isEmpty()) {
            FullBoardResponse response = new FullBoardResponse();
            response.setBoardId(boardId);
            response.setName("NOT_FOUND");
            response.setDescription("No leaderboard with id: " + boardId);
            response.setUsers(List.of());
            return response;
        }

        LeaderBoard board = optionalBoard.get();

        // 🔥 Récupération des utilisateurs via le repository
        List<User> users = authClient.getUsersByBoardId(boardId).getBody();

        if (!users.isEmpty()) {
            users.sort((u1, u2) -> Integer.compare(u2.getXpPoints(), u1.getXpPoints()));
            for (int i = 0; i < users.size(); i++) {
                users.get(i).setRank(i + 1);
            }
        }

        // ✅ Construction correcte de la réponse
        FullBoardResponse response = new FullBoardResponse();
        response.setBoardId(board.getBoardId());
        response.setName(board.getName());
        response.setDescription(board.getDescription());
        response.setUsers(users);
        return response;
    }

    public FullBoardResponse findByUserId(String userId) {
        // 🔥 Récupération du LeaderBoard via le userId
        ResponseEntity<String> boardId= authClient.getBoardIdByUserId(userId);
        System.out.println("boardId: " + boardId.getBody());
        LeaderBoard board= repository.findById(boardId.getBody()).orElse(null);

        if (board == null || board.getBoardId() == null) {
            FullBoardResponse response = new FullBoardResponse();
            response.setBoardId(null); // ✅ car ici board est null
            response.setName("NOT_FOUND");
            response.setDescription("No leaderboard found for user ID: " + userId);
            response.setUsers(List.of());
            return response;
        }


        return findBoardWithUsers(board.getBoardId());
    }
    public void deleteBoard(String boardId) {
        repository.deleteById(boardId);
    }




    public void save(LeaderBoard board) {repository.save(board);}

    public Optional<LeaderBoard> findbyID(String id) {
        return repository.findById(id);
    }

    public Optional<LeaderBoard> findName(String name) {
        return repository.findByName(name);
    }

    public LeaderBoard updateLeaderboard(String id, LeaderBoard newData) {
        return repository.findById(id)
                .map(existingBoard -> {
                    // Mise à jour uniquement des champs title et description
                    existingBoard.setName(newData.getName());
                    existingBoard.setDescription(newData.getDescription());
                    return repository.save(existingBoard);
                })
                .orElseThrow(() -> new RuntimeException("Leaderboard not found with id: " + id));
    }
}
