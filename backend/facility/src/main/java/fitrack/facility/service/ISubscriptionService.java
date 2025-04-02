package fitrack.facility.service;

import fitrack.facility.entity.Subscription;

import java.util.List;

public interface ISubscriptionService {
    List<Subscription> retrieveAllSubscriptions();

    Subscription addSubscription(Subscription subscription);

    Subscription updateSubscription(Subscription subscription);

    Subscription retrieveSubscription(Long id);
    void removeSubscription(Long id);
    boolean canUserCancelSubscription(Long userId, Long subscriptionId);
    Subscription cancelSubscription(Long id);
    List<Subscription> getSubscriptionsByUser(Long userId);
    Subscription subscribeUserToFacility(Long userId, Long facilityId);
}

