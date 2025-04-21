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

        if (request.getMethod() == HttpMethod.OPTIONS || 
            path.startsWith("/api/v1/auth/login") || 
            path.startsWith("/api/v1/auth/register")) {
            return chain.filter(exchange);
        }

        String authHeader = request.getHeaders().getFirst(HttpHeaders.AUTHORIZATION);
        System.out.println("Auth Header: " + authHeader);

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            System.out.println("Invalid Authorization header format");
            return this.onError(exchange, "Invalid Authorization header format", HttpStatus.UNAUTHORIZED);
        }

        String token = authHeader.substring(7);
        System.out.println("Extracted Token: " + token);

        try {
            if (!jwtUtil.validateToken(token)) {
                System.out.println("Token validation failed");
                return this.onError(exchange, "Invalid Token", HttpStatus.UNAUTHORIZED);
            }
        } catch (Exception e) {
            System.out.println("Token validation error: " + e.getMessage());
            return this.onError(exchange, "Token validation error", HttpStatus.UNAUTHORIZED);
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
