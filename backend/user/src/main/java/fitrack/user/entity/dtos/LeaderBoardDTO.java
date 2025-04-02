package fitrack.user.entity.dtos;


import com.fasterxml.jackson.annotation.JsonProperty;

public record LeaderBoardDTO(@JsonProperty("board_id") String id,String name, String description) {
}
