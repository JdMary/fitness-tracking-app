package fitrack.gateway.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;
import reactor.core.publisher.Mono;

@Component
public class AuthenticationFilter implements WebFilter {

    @Autowired
    private JwtUtil jwtUtil;

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {
        ServerHttpRequest request = exchange.getRequest();
        String path = request.getURI().getPath();

        System.out.println("Incoming Request: " + request.getMethod() + " " + path);

        if (path.startsWith("/api/v1/auth/")|| request.getMethod().equals(HttpMethod.OPTIONS)) {
            System.out.println("Bypassing authentication for: " + path);
            return chain.filter(exchange);
        }

        if (!request.getHeaders().containsKey(HttpHeaders.AUTHORIZATION)) {
            System.out.println("Unauthorized Request: " + path + " - Missing Authorization Header");
            System.out.println(request.getHeaders());
            return this.onError(exchange, "Missing Authorization Header", HttpStatus.UNAUTHORIZED);
        }


        String token = request.getHeaders().getFirst(HttpHeaders.AUTHORIZATION);
        System.out.println("Token: " + token);
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
        }

        System.out.println("Extracted Token: " + token);

        if (!jwtUtil.validateToken(token)) {
            System.out.println("Invalid Token for request: " + path);
            return this.onError(exchange, "Invalid Token", HttpStatus.UNAUTHORIZED);
        }

        System.out.println("Token Validated Successfully for: " + path);

        ServerHttpRequest modifiedRequest = exchange.getRequest().mutate()
                .header(HttpHeaders.AUTHORIZATION, "Bearer " + token)
                .build();

        return chain.filter(exchange.mutate().request(modifiedRequest).build());
    }

    private Mono<Void> onError(ServerWebExchange exchange, String err, HttpStatus status) {
        ServerHttpResponse response = exchange.getResponse();
        response.setStatusCode(status);
        return response.setComplete();
    }
}
