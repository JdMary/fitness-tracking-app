package fitrack.facility.entity;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
    private String username;
    private String role;
    private int coins;
    private int number;
}
