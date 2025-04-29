package fitrack.achievement.entity;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class User {

    private String id;
    private String email;
    private String name;
    private String boardId;
    private int xpPoints;
    private int number;
    private int rank;
    private String fitnessGoals;
    private float height;
    private float weight;


}
