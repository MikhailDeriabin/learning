/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package teht20;

import teht20.sorts.CardNameSort;
import teht20.sorts.CardNumberSort;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;
import java.util.TreeSet;
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
        Collections.sort(cardUsers, new CardNumberSort());
        for(TrafficCard card : cardUsers)
            System.out.println(card);

        System.out.println("\n------------ Sorted by name ---------------");
        Collections.sort(cardUsers, new CardNameSort());
        for(TrafficCard card : cardUsers)
            System.out.println(card);
    }
    
}
