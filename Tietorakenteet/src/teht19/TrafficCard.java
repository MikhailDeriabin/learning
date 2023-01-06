/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package teht19;

import java.util.*;

/**
 *
 * @author kamaj
 */
public class TrafficCard implements Comparable<TrafficCard>{
    private int mTravellerNumber;
    private String mOwnerName;
    private float mBalance;

    public TrafficCard(int tNumber, String oName, float balance){
        mTravellerNumber = tNumber;
        mOwnerName = oName;
        mBalance = balance;
    }

    @Override
    public int compareTo(TrafficCard o) {
        return this.mTravellerNumber - o.mTravellerNumber;
    }

    @Override
    public String toString(){
        return mTravellerNumber + ". Owner: " + mOwnerName + ", balance: " + mBalance;
    }

    public int getmTravellerNumber() {
        return mTravellerNumber;
    }
    public void setmTravellerNumber(int mTravellerNumber) {
        this.mTravellerNumber = mTravellerNumber;
    }

    public String getmOwnerName() {
        return mOwnerName;
    }
    public void setmOwnerName(String mOwnerName) {
        this.mOwnerName = mOwnerName;
    }

    public float getmBalance() {
        return mBalance;
    }
    public void setmBalance(float mBalance) {
        this.mBalance = mBalance;
    }


}
