package fitrack.facility.dto;

import fitrack.facility.entity.EventRegistration;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegistrationResponse {
    private String message;
    private EventRegistration registration;
}
