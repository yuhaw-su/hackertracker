import com.mongodb.*;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
  * This reads a file and gets all the data for hackathons online and then puts them into a database
  */
public class ReadFile {

    private Document doc;

    /**
     *     * list of names
     *     
     */
    private List<String> nameList = new ArrayList<String>();
    /**
     *     * list of urls
     *    
     */
    private List<String> urlList = new ArrayList<String>();
    /**
     *     * list of start dates
     *     
     */
    private List<String> startDateList = new ArrayList<String>();
    /**
     *     * list of end dates
     *     
     */
    private List<String> endDateList = new ArrayList<String>();
    /**
     *     * list of locations
     *    
     */
    private List<String> locationList = new ArrayList<String>();
    /**
     *     * list of event logos
     *    
     */
    private List<String> eventLogoImageWrapLinkList = new ArrayList<String>();

    private boolean printMode = false;
    /*char[] password = {'h', 'a', 'c', 'k', 'e', 'r', '1'};

    MongoCredential credential = MongoCredential.createCredential("hacker1", "hackertracker", password);*/

    // Since 2.10.0, uses MongoClient
    MongoClient mongoClient = new MongoClient("mongodb://1:1@ds117109.mlab.com:17109/hackertracker", 17109);

    private DB hackertracker = mongoClient.getDB("hackertracker");

    private DBCollection hackathonDataCollection = hackertracker.getCollection("hackathonDataCollection");

    private BasicDBObject document = new BasicDBObject();

    /**
     *     * constructor that runs the function readFile()
     */
    public ReadFile() {
    /*serverConnection();*/
        readFileAndWriteDataToList();
    }

    /**
     *      * this is a function that reads the
     *     
     */
    private void readFileAndWriteDataToList() {
        try {
            doc = Jsoup.connect("https://mlh.io/seasons/na-2017/events").get();
            getEventLogoImageWrap();
            System.out.println("event logo image wrap");
            printList(eventLogoImageWrapLinkList);
            getNames();
            System.out.println("names");
            printList(nameList);
            getUrls();
            System.out.println("urls");
            printList(urlList);
            getDates();
            System.out.println("start date");
            printList(startDateList);
            System.out.println("end date");
            printList(endDateList);
            getLocations();
            System.out.println("location");
            printList(locationList);
            hackathonDataCollection.insert(document);
        } catch (IOException io) {
        }
    }

    /**
     *     * get event logo urls, one can use the urls to create a new, better-looking, website
     *   
     */
    private void getEventLogoImageWrap() {
        Elements eventLogoLinks = doc.select("img");
        for (Element element : eventLogoLinks) {
            if (!(element.attr("alt").contains("Windows")
                    || element.attr("alt").contains("Dell")
                    || element.attr("alt").contains("light")
                    || element.attr("alt").isEmpty())) {
                eventLogoImageWrapLinkList.add(element.absUrl("src"));
                document.append("event logo & image wrap", element.absUrl("src"));
            }
        }
    }

    /**
     *     * get the names for the hackathons
     *   
     */
    private void getNames() {
        Elements names = doc.select("h3[itemprop]");
        for (Element name : names) {
            if (name.attr("itemprop").equals("name")) {
                nameList.add(name.text());
                document.append("name", name.text());
            }
        }
    }

    /**
     *     * get the urls for all the hackathon events so one can click on them
     *    
     */
    private void getUrls() {
        Elements urls = doc.select("a[href]");
        for (Element url : urls) {
            if (url.attr("itemprop").equals("url")) {
                urlList.add(url.attr("href"));
                document.append("url", url.attr("href"));
            }
        }
    }

    /**
     *     * get the start dates and end dates for the hackathon events
     *   
     */
    private void getDates() {
        Elements dates = doc.select("meta[itemprop]");
        for (Element date : dates) {
            if (date.attr("itemprop").equals("startDate")) {
                startDateList.add(date.attr("content"));
                document.append("startDate", date.attr("content"));
            }
            if (date.attr("itemprop").equals("endDate")) {
                endDateList.add(date.attr("content"));
                document.append("endDate", date.attr("content"));
            }
        }
    }

    /**
     * get the locations for the hackathons
     */
    private void getLocations() {
        Elements locations = doc.select("span[itemprop]");
        String tempLocationString = "";
        boolean locationDoneFlag = false;
        for (Element location : locations) {
            if (location.attr("itemprop").equals("addressLocality")) {
                tempLocationString += location.text();
                document.append("addressLocality", location.text());
                locationDoneFlag = false;
            }
            if (location.attr("itemprop").equals("addressRegion")) {
                tempLocationString += location.text();
                document.append("addressRegion", location.text());
                locationDoneFlag = true;
            }
            if (!locationDoneFlag) {
                tempLocationString += ", ";
            } else {
                locationList.add(tempLocationString);
                tempLocationString = "";
            }
        }
    }

    private void printList(List<String> data) {
        for(String datum : data) {
            System.out.println(datum);
        }
    }
}

    /**
     * connect to mySQL server
     */
    /*private boolean serverConnection() {
        String url = "jdbc:mysql://localhost:3306";
        String username = "root";
        String password = "";

        System.out.println("Connecting database...");

        try (Connection connection = DriverManager.getConnection(url, username, password)) {
            Class.forName("com.mysql.jdbc.Driver");
            System.out.println("Database connected!");
            return true;
        } catch (SQLException e) {
            throw new IllegalStateException("Cannot connect the database!", e);
        } catch (ClassNotFoundException cnfe) {
            throw new IllegalStateException("No class found!", cnfe);
        }
    }*/
