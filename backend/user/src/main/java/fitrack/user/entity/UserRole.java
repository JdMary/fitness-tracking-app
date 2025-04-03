package fitrack.user.entity;

public enum UserRole {
    ADMIN("admin"),
    USER("user"),
    TRAINER("trainer"),
    FACILITY_MANAGER("facility_manager");

    private String role;

    UserRole(String role) {
        this.role = role;
    }

    public String getRole() {
        return this.role;
    }
}