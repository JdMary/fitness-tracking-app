package fitrack.achievement.entity;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Getter
@Entity

@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class LeaderBoard {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)

    @JsonProperty("board_id")
    private String boardId;

    @JsonProperty("name")
    private String name;

    @JsonProperty("description")
    private String description;


    public void setBoardId(String boardId) {
        this.boardId = boardId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getBoardId() {
        return boardId;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }
}
