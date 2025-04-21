package fitrack.achievement.entity.dtos;

import lombok.Getter;

@Getter
public enum UserRole {
    ADMIN("admin"),
    USER("user"),
    TRAINER("trainer"),
    FACILITY_MANAGER("facility_manager");

    private final String role;

    UserRole(String role) {
        this.role = role;
    }

}
