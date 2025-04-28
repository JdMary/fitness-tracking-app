package fitrack.achievement.service;

import fitrack.achievement.client.AuthClient;
import fitrack.achievement.client.UserClient;
import fitrack.achievement.entity.User;
import fitrack.achievement.entity.dtos.FullBoardResponse;
import fitrack.achievement.entity.LeaderBoard;
import fitrack.achievement.repository.LeaderBoardRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LeaderBoardService {

    private final LeaderBoardRepository repository;
    private final RewardService rewardService;
    private final AuthClient authClient;
    private final UserClient userClient;


    public List<LeaderBoard> findAllBoard() {
        return repository.findAll();
    }

    private FullBoardResponse buildEmptyBoard(String boardId, String reason) {
        FullBoardResponse response = new FullBoardResponse();
        response.setBoardId(boardId);
        response.setName("NOT_FOUND");
        response.setDescription(reason);
        response.setUsers(Collections.emptyList());
        return response;
    }

    public FullBoardResponse findBoardWithUsers(String boardId) {
        Optional<LeaderBoard> optionalBoard = repository.findById(boardId);

        if (optionalBoard.isEmpty()) {
            return buildEmptyBoard(boardId, "No leaderboard found with ID: " + boardId);
        }

        LeaderBoard board = optionalBoard.get();
        List<User> users;

        try {
            ResponseEntity<List<User>> response = authClient.getUsersByBoardId(boardId);
            users = response.getBody() != null ? response.getBody() : List.of();
        } catch (Exception e) {
            System.err.println("❌ Error while fetching users for boardId: " + e.getMessage());
            return buildEmptyBoard(boardId, "Error while fetching users.");
        }

        if (users.isEmpty()) {
            // Si la liste des utilisateurs est vide, on crée une réponse indiquant qu'il n'y a pas de participants
            FullBoardResponse response = new FullBoardResponse();
            response.setBoardId(board.getBoardId());
            response.setName(board.getName());
            response.setDescription(board.getDescription());
            response.setUsers(List.of());  // Aucune participation

            System.out.println("👥 No users for board " + boardId + ".");
            return response;
        }

        // Si la liste des utilisateurs n'est pas vide, on trie et on met à jour le classement
        users.sort((u1, u2) -> Integer.compare(u2.getXpPoints(), u1.getXpPoints()));

        for (int i = 0; i < users.size(); i++) {
            User user = users.get(i);
            int rank = i + 1;
            user.setRank(rank);

            try {
                authClient.updateUserRank(user.getId(), rank);

                if (rank <= 3) {
                    rewardService.createRewardIfEligible(user.getId(), rank);
                }

            } catch (Exception e) {
                System.err.println("❌ Error updating rank for user " + user.getEmail());
            }
        }

        FullBoardResponse response = new FullBoardResponse();
        response.setBoardId(board.getBoardId());
        response.setName(board.getName());
        response.setDescription(board.getDescription());
        response.setUsers(users);

        System.out.println("👥 Users for board " + boardId + ":");
        users.forEach(u -> System.out.println(" - " + u.getEmail()));

        return response;
    }


    public FullBoardResponse findByToken(String token) {
        if (!token.startsWith("Bearer ")) {
            token = "Bearer " + token;
        }

        ResponseEntity<User> response = authClient.extractUserDetails(token);

        if (response.getBody() == null || response.getBody().getBoardId() == null) {

            FullBoardResponse fbResponse = new FullBoardResponse();
            fbResponse.setBoardId(null);
            fbResponse.setName("NOT_FOUND");
            fbResponse.setDescription("No leaderboard found for the connected user.");
            fbResponse.setUsers(Collections.emptyList());
            return fbResponse;
        }

        return findBoardWithUsers(response.getBody().getBoardId());
    }


    public FullBoardResponse findByUserId(String userId) {

        ResponseEntity<String> boardId = authClient.getBoardIdByUserId(userId);
        System.out.println("boardId: " + boardId.getBody());
        LeaderBoard board = repository.findById(boardId.getBody()).orElse(null);

        if (board == null || board.getBoardId() == null) {
            FullBoardResponse response = new FullBoardResponse();
            response.setBoardId(null);
            response.setName("NOT_FOUND");
            response.setDescription("No leaderboard found for user ID: " + userId);
            response.setUsers(List.of());
            return response;
        }


        return findBoardWithUsers(board.getBoardId());
    }

    public void deleteBoard(String boardId) {
        // 1. Récupérer les utilisateurs associés au leaderboard
        ResponseEntity<List<User>> response = authClient.getUsersByBoardId(boardId);
        List<User> users = response.getBody();

        // 2. Vérifier si des utilisateurs sont associés au leaderboard
        if (users != null && !users.isEmpty()) {
            for (User user : users) {


                try {
                    authClient.updateUserRank(user.getId(), 0);
                    authClient.updateUserboard(user.getId(), null);
                } catch (Exception e) {
                    System.err.println("Erreur lors de la mise à jour de l'utilisateur : " + e.getMessage());
                }
            }
        }


        try {
            repository.deleteById(boardId);  // Suppression du leaderboard
            System.out.println("Leaderboard avec ID " + boardId + " supprimé.");
        } catch (Exception e) {
            throw new RuntimeException("Erreur lors de la suppression du leaderboard : " + e.getMessage());
        }
    }


    public LeaderBoard save(LeaderBoard board) {
        List<String> errors = new ArrayList<>();

        if (board.getName() == null || board.getName().trim().isEmpty()) {
            errors.add("The title is required.");
        } else if (board.getName().trim().length() < 10) {
            errors.add("The title must be at least 10 characters long.");
        }

        if (board.getDescription() == null || board.getDescription().trim().isEmpty()) {
            errors.add("The description is required.");
        } else if (board.getDescription().trim().length() < 10) {
            errors.add("The description must be at least 10 characters long.");
        }

        if (!errors.isEmpty()) {
            throw new IllegalArgumentException(String.join(" | ", errors));
        }

        return repository.save(board);
    }


    public Optional<LeaderBoard> findbyID(String id) {
        return repository.findById(id);
    }

    public Optional<LeaderBoard> findName(String name) {
        return repository.findByName(name);
    }

    public void updateLeaderboard(String id, LeaderBoard newData) {

        List<String> errors = new ArrayList<>();

        LeaderBoard existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("❌ Leaderboard not found."));

        if (newData.getName() == null || newData.getName().trim().isEmpty()) {
            errors.add("name: The title is required.");
        } else if (newData.getName().trim().length() < 10) {
            errors.add("name: The title must be at least 10 characters long.");
        }

        if (newData.getDescription() == null || newData.getDescription().trim().isEmpty()) {
            errors.add("description: The description is required.");
        } else if (newData.getDescription().trim().length() < 10) {
            errors.add("description : The description must be at least 10 characters long.");
        }
        if (!errors.isEmpty()) {
            throw new IllegalArgumentException(String.join(" | ", errors));
        }

        existing.setName(newData.getName());
        existing.setDescription(newData.getDescription());

        repository.save(existing);
    }

    public void removeUserFromLeaderboard(String userId) {
        List<String> errors = new ArrayList<>();

        // Vérifier si l'utilisateur existe
        ResponseEntity<User> userResponse = authClient.getUserById(userId);
        if (userResponse.getBody() == null) {
            errors.add("User not found.");  // L'utilisateur n'a pas été trouvé
        } else {
            User user = userResponse.getBody();

            // Vérifier si l'utilisateur est affecté à un leaderboard
            if (user.getBoardId() == null || user.getBoardId().isEmpty()) {
                errors.add("User is not assigned to a leaderboard.");  // L'utilisateur n'est pas affecté à un leaderboard
            }

            // Si des erreurs sont trouvées, on les lance sous forme d'exception
            if (!errors.isEmpty()) {
                throw new IllegalArgumentException(String.join(" | ", errors));
            }

            // Suppression de l'utilisateur du leaderboard
            try {
                authClient.updateUserboard(userId, null);  // Mise à jour pour retirer l'utilisateur du leaderboard
                System.out.println("User removed successfully from the leaderboard.");
            } catch (Exception e) {
                // Gestion des erreurs lors de la mise à jour
                errors.add("Failed to remove user from leaderboard: " + e.getMessage());
                throw new IllegalArgumentException(String.join(" | ", errors));
            }
        }
    }
}