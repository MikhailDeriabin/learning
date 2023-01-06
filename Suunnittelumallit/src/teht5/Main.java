package teht5;

public class Main {
    public static void main(String[] args) {
        Authorization auth = Authorization.getInstance();
        auth.login("admin", "admin");
        auth.login("right_username", "right_password");
    }
}
