package fitrack.user.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
@Table(name = "`order`")
public class Order {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String sessionId;
	private double price;
	private String currency;
	private String method;
	private String intent;
	private String description;
	private String status;
	private LocalDateTime orderDate;
	@ManyToOne
	@JsonBackReference
	private User user;

	public Order() {
		orderDate = LocalDateTime.now();
	}
}
