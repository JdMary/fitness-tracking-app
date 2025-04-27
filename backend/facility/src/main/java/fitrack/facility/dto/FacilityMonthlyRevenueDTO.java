package fitrack.facility.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FacilityMonthlyRevenueDTO {
    private String facilityName;
    private String month;
    private Double totalRevenue;
}