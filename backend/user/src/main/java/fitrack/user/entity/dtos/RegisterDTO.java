package fitrack.user.entity.dtos;

import fitrack.user.entity.UserRole;

public record RegisterDTO(String name, String email, String password, UserRole role) {
}