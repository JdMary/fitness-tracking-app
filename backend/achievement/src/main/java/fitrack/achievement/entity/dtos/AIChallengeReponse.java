package fitrack.achievement.entity.dtos;


public class AIChallengeReponse {


    private String title;
    private String description;
    private int xpPoints;
    private String startDate;
    private String endDate;

    // Getters et Setters
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public int getXpPoints() { return xpPoints; }
    public void setXpPoints(int xpPoints) { this.xpPoints = xpPoints; }

    public String getStartDate() { return startDate; }
    public void setStartDate(String startDate) { this.startDate = startDate; }

    public String getEndDate() { return endDate; }
    public void setEndDate(String endDate) { this.endDate = endDate; }
}

