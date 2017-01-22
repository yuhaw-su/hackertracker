/**
 * This file gets all the information for a hackathon.
 */
public class AHackathon {
    /**
     * event id
     */
    private int eventID;
    /**
     * the name of it
     */
    private String name;
    /**
     * url
     */
    private String url;
    /**
     * start date
     */
    private String startDate;
    /**
     * end date
     */
    private String endDate;
    /**
     * location
     */
    private String location;
    /**
     * image wrap
     */
    private String imageWrapLink;
    /**
     * event logo
     */
    private String eventLogoLink;

    /**
     * the constructor for hackathon event
     */
    public AHackathon() {
        this.name = "";
        this.startDate = "";
        this.endDate = "";
        this.location = "";
    }

    /**
     * the constructor for hackathon event
     * @param name the name
     * @param startDate the start date
     * @param endDate the end date
     * @param location the location
     */
    public AHackathon(String name, String startDate, String endDate, String location) {
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.location = location;
    }
}
