package fitrack.user.repository;

import fitrack.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import fitrack.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByEmail(String email);

}
