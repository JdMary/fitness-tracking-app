package fitrack.facility.service;

import fitrack.facility.entity.Subscription;

import java.util.List;

public interface ISubscriptionService {
    List<Subscription> getAllSubscriptions();
    Subscription getSubscriptionById(Long id);
    Subscription createSubscription(Subscription subscription, String token, String priceType, Long promotionId);
    Subscription updateSubscription(Subscription subscription, String token);
    void deleteSubscription(Long id, String token);
    List<Subscription> getUserSubscriptions(String token);
    //boolean canUserCancelSubscription(Long userId, Long subscriptionId);
    //Subscription cancelSubscription(Long id);
    //List<Subscription> getSubscriptionsByUser(Long userId);
    //Subscription subscribeUserToFacility(Long userId, Long facilityId);
}

