package fitrack.user.repository;

import fitrack.user.entity.UserRegular;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRegularRepository extends JpaRepository<UserRegular, String> {
    List<UserRegular> findAllByBoardId(String boardId);


}
