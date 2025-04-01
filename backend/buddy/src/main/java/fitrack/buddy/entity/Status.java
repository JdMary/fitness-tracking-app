package fitrack.buddy.entity;

import lombok.Getter;

@Getter
public enum Status {

    PENDING("Pending"),
    WAITING("Waiting"),
    ACCEPTED("Accepted"),
    REJECTED("Rejected");
    private final String value;

    Status(String value) {
        this.value = value;
    }

}
