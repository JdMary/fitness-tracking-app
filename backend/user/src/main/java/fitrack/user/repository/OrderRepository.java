package fitrack.user.repository;

import fitrack.user.entity.Order;
import fitrack.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    Order findTopByUserOrderByIdDesc(User user);
    List<Order> findByUser(User user);
}
