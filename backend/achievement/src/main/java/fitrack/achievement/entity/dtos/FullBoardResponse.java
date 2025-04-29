package fitrack.achievement.entity.dtos;

import fitrack.achievement.entity.User;
import lombok.*;

import java.util.List;


@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class FullBoardResponse {
    private String boardId;
    private String name;
    private String description;
    private List<User> users;

    public void setBoardId(String boardId) {
        this.boardId = boardId;
    }

    public String getBoardId() {
        return boardId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

}
