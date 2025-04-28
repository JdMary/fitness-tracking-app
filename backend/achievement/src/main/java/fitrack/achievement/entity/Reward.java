package fitrack.achievement.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
public class Reward {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String rewardId;

    private String userId;

    private String promoCode;

    private String description;

    private boolean used = false;

    private int rankAwarded;

    private LocalDateTime createdAt = LocalDateTime.now();
}
