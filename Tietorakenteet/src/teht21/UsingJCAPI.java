/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package teht21;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;

/**
 *
 * @author kamaj
 */
public class UsingJCAPI {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        ArrayList<TrafficCard> cardUsers = new ArrayList<>();
        RandomString rString = new RandomString(10);
        float genBalance;
        TrafficCard myCard;
        Random r = new Random();
        int i;
        for (i = 0; i < 10; i++) {
            genBalance = ((float) r.nextInt(1000) / 10);
            myCard = new TrafficCard(r.nextInt(100), rString.nextString(), genBalance);
            cardUsers.add(myCard);
        }

        System.out.println("------------ Sorted by number ---------------");
        Collections.sort(cardUsers,
                (first, last) -> first.getmTravellerNumber() - last.getmTravellerNumber()
        );
        for(TrafficCard card : cardUsers)
            System.out.println(card);
    }
    
}
