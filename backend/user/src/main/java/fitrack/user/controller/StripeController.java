package fitrack.user.controller;

import fitrack.user.entity.dtos.CreatePaymentRequest;
import fitrack.user.entity.dtos.StripeResponse;
import fitrack.user.service.StripeService;
import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/pay/stripe")
@RequiredArgsConstructor
public class StripeController {

    private final StripeService stripeService;

    @PostMapping("/create-payment")
    public ResponseEntity<StripeResponse> createPayment(@RequestBody CreatePaymentRequest createPaymentRequest, @RequestHeader("Authorization") String token) {
        StripeResponse stripeResponse = stripeService.createPayment(token, createPaymentRequest);
        return ResponseEntity
                .status(stripeResponse.getHttpStatus())
                .body(stripeResponse);
    }

    @GetMapping("/capture-payment")
    public ResponseEntity<StripeResponse> capturePayment(@RequestParam String sessionId) {
    StripeResponse stripeResponse = stripeService.capturePayment(sessionId);
          return ResponseEntity
                 .status(stripeResponse.getHttpStatus())
                 .body(stripeResponse);
     }
}

