package fitrack.buddy.entity;

import lombok.Getter;

@Getter
public enum Status {

    PENDING("Pending"),
    APPROVED("Approved"),
    REJECTED("Rejected");
    private final String value;

    Status(String value) {
        this.value = value;
    }

}
