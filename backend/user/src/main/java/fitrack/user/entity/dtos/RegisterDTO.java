package fitrack.user.entity.dtos;

import fitrack.user.entity.UserRole;

public record RegisterDTO(String name, int number , String email, String password, UserRole role) {
}