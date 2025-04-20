package fitrack.user.payload;

import lombok.Data;

@Data
public class OtpVerificationRequest {
    private String email;
    private String otp;
}
