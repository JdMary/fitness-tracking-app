package fitrack.buddy.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class BuddyRequestResponseDTO {
    private BuddyRequest buddyRequest;
    private String message;
}

