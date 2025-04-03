package fitrack.user.controller;

import fitrack.user.entity.Order;
import fitrack.user.service.PaypalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.paypal.api.payments.Links;
import com.paypal.api.payments.Payment;
import com.paypal.base.rest.PayPalRESTException;

@Controller
public class PaypalController {

	@Autowired
	PaypalService service;

	public static final String SUCCESS_URL = "pay/success";
	public static final String CANCEL_URL = "pay/cancel";

	@GetMapping("/")
	public String home() {
		return "home";
	}

//	@PostMapping("/pay")
//	public String payment(@RequestBody Order order) {
//		try {
//			Payment payment = service.createPayment(order.getPrice(), order.getCurrency(), order.getMethod(),
//					order.getIntent(), order.getDescription(), "http://localhost:8222/" + CANCEL_URL,
//					"http://localhost:8222/" + SUCCESS_URL);
//			for (Links link : payment.getLinks()) {
//				if (link.getRel().equals("approval_url")) {
//					System.out.println(link.getRel());
//					System.out.println(link.getHref());
//					return "redirect:" + link.getHref();
//				}
//			}
//
//		} catch (PayPalRESTException e) {
//			e.printStackTrace();
//		}
//		return "redirect:/";
//	}
@GetMapping("/pay")
public String payment() {
	Order order = new Order();
	order.setPrice(10.0);
	order.setCurrency("USD");
	order.setMethod("paypal");
	order.setIntent("sale");
	order.setDescription("Payment description");

	try {
		Payment payment = service.createPayment(order.getPrice(), order.getCurrency(), order.getMethod(),
				order.getIntent(), order.getDescription(), "http://localhost:8222/" + CANCEL_URL,
				"http://localhost:8222/" + SUCCESS_URL);
		for (Links link : payment.getLinks()) {
			if (link.getRel().equals("approval_url")) {
				System.out.println(link.getRel());
				System.out.println(link.getHref());
				return "redirect:" + link.getHref();
			}
		}

	} catch (PayPalRESTException e) {
		e.printStackTrace();
	}
	return "redirect:/";
}

	@GetMapping(value = CANCEL_URL)
	public String cancelPay() {
		return "cancel";
	}

	@GetMapping(value = SUCCESS_URL)
	public String successPay(@RequestParam("paymentId") String paymentId, @RequestParam("PayerID") String payerId) {
		try {
			Payment payment = service.executePayment(paymentId, payerId);
			System.out.println(payment.toJSON());
			if (payment.getState().equals("approved")) {
				return "success";
			}
		} catch (PayPalRESTException e) {
			System.out.println(e.getMessage());
		}
		return "redirect:/";
	}

}
