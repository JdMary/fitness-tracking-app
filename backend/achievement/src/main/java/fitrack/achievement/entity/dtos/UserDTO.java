package fitrack.achievement.entity.dtos;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDTO {
    private String id;
    private String name;
    private String email;
    private UserRole role;
}

