package teht5;

public class Authorization {

    private Authorization(){}

    private static volatile Authorization instance;

    public static Authorization getInstance(){
        if(instance == null){
            synchronized (Authorization.class){
                if(instance == null){
                    instance = new Authorization();
                }
            }
        }

        return instance;
    }

    public void login(String username, String password){
        String rightUsername = "right_username";
        String rightPassword = "right_password";

        if(username.equals(rightUsername) && password.equals(rightPassword)){
            System.out.println("Logging to the system...");
        } else{
            System.out.println("Can not login. Check provided username or password");
        }
    }
}
