package fitrack.user.controller;

import fitrack.user.entity.Order;
import fitrack.user.repository.OrderRepository;
import fitrack.user.service.IOrderService;
import fitrack.user.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/users/orders")
public class OrderController {
    private final IOrderService orderService;

    private final OrderRepository orderRepository;
    private final UserService userService;
    OrderController(IOrderService orderService, OrderRepository orderRepository, UserService userService) {
        this.orderService = orderService;
        this.orderRepository = orderRepository;
        this.userService = userService;
    }

    @GetMapping("/retrieve-all-orders")
    public ResponseEntity<List<Order>> getAllOrders() {
        return ResponseEntity.ok(orderService.retrieveAllOrders());
    }

}
