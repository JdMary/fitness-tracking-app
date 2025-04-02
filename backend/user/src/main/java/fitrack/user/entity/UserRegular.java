package fitrack.user.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Builder
@Table(name = "user_regular")
public class UserRegular {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)

    @JsonProperty("id")
    private String id;

    @JsonProperty("name")
    private String name;

    @JsonProperty("email")
    private String email;
    @Column(name="fitness_goals")
    @JsonProperty("fitnessGoals")
    private String fitnessGoals;

    @JsonProperty("schedule")
    private LocalDateTime schedule;

    @JsonProperty("weight")
    private double weight;

    @JsonProperty("height")
    private double height;

    @Column(name = "workout_schedule")
    @JsonProperty("workoutSchedule")
    private String workoutSchedule;
    @Column(name = "xp_points")
    @JsonProperty("xpPoints")
    private int xpPoints;

    @JsonProperty("rank")
    private int rank;

    @JsonProperty("age")
    private int age;


    @Column(name = "board_id")

    private String boardId;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFitnessGoals() {
        return fitnessGoals;
    }

    public void setFitnessGoals(String fitnessGoals) {
        this.fitnessGoals = fitnessGoals;
    }

    public int getXpPoints() {
        return xpPoints;
    }

    public void setXpPoints(int xpPoints) {
        this.xpPoints = xpPoints;
    }

    public int getRank() {
        return rank;
    }

    public void setRank(int rank) {
        this.rank = rank;
    }

    public String getBoardId() {
        return boardId;
    }

    public void setBoardId(String boardId) {
        this.boardId = boardId;
    }
}