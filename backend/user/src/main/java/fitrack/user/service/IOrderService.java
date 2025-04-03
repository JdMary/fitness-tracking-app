package fitrack.user.service;

import fitrack.user.entity.Order;

import java.util.List;

public interface IOrderService {
    List<Order> retrieveAllOrders();

    Order addOrder(Order o);

    Order updateOrder(Order o);

    Order retrieveOrder(String idOrder);

    void removeOrder(String idOrder);

    List<Order> addOrders (List<Order> Orders);
}
