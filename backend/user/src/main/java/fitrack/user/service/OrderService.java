package fitrack.user.service;

import fitrack.user.entity.Order;
import fitrack.user.repository.OrderRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@AllArgsConstructor
public class OrderService implements IOrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Override
    public List<Order> retrieveAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Order addOrder(Order o) {
        return orderRepository.save(o);
    }

    @Override
    public Order updateOrder(Order o) {
        return orderRepository.save(o);
    }

    @Override
    public Order retrieveOrder(Long idOrder) {
        return orderRepository.findById(idOrder).orElse(null);
    }

    @Override
    public void removeOrder(Long idOrder) {
        orderRepository.deleteById(idOrder);
    }

    @Override
    public List<Order> addOrders(List<Order> Orders) {
        return orderRepository.saveAll(Orders);
    }
}
