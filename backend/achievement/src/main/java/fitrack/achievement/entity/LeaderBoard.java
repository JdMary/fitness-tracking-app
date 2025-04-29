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

    @JsonProperty("boardId")
    private String boardId;

    @JsonProperty("name")
    private String name;

    @JsonProperty("description")
    private String description;


}