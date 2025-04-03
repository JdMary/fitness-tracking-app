package fitrack.user.service;


import feign.FeignException;
import fitrack.user.client.LeaderBoardClient;
import fitrack.user.entity.UserRegular;

import fitrack.user.entity.dtos.LeaderBoardDTO;
import fitrack.user.repository.UserRegularRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service

public class UserService {
    @Autowired
    private UserRegularRepository repository;


    private final LeaderBoardClient leaderBoardClient;


    public UserService(UserRegularRepository repository, LeaderBoardClient leaderBoardClient) {
        this.repository = repository;

        this.leaderBoardClient = leaderBoardClient;
    }
    public List<UserRegular> findAllUsers() {
        return repository.findAll();
    }

    public List<UserRegular> findAllUsersByBoard(String boardId) {
        return repository.findAllByBoardId(boardId);
    }


    public LeaderBoardDTO getBoard(String boardName) {
        try {
            return leaderBoardClient.findByName(boardName);

        } catch (FeignException.NotFound e) {
            throw new RuntimeException("Leaderboard not found: " + boardName);
        } catch (Exception e) {
            throw new RuntimeException("Erreur lors de l'appel à Achievement : " + e.getMessage());
        }
    }


    public void saveUser(UserRegular user) {

        if (user.getFitnessGoals() != null && user.getFitnessGoals().toLowerCase().contains("gain")) {
            try {
                LeaderBoardDTO board = leaderBoardClient.findByName("Weight Loss Challenge");
                user.setBoardId(board.id());
            } catch (Exception e) {
                throw new RuntimeException("Leaderboard 'Weight Loss Challenge' introuvable.");
            }
        }

        repository.save(user); // Assure-toi que ce repository est injecté et fonctionne
    }



}
