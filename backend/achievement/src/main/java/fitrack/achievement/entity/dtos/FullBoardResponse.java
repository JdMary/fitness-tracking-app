package fitrack.achievement.entity.dtos;

import fitrack.achievement.entity.dtos.UserRegularDTO;
import lombok.*;

import java.util.List;


@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class FullBoardResponse {
    private String name;
    private String description;
    private List<UserRegularDTO> users;

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

    public List<UserRegularDTO> getUsers() {
        return users;
    }

    public void setUsers(List<UserRegularDTO> users) {
        this.users = users;
    }
}
