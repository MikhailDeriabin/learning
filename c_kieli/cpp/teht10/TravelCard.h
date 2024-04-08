#ifndef TRAVELCARD_H
#define TRAVELCARD_H

#include <string>
#include <iostream>
#include <memory>
#include "FixedSizeQueue.h"
#include "Travel.h"
#include "TravelStatus.h"
#include "Stamp.h"

#define HELSINKI_PRICE (float)3.0
#define METROPOLITAN_AREA_PRICE (float)4.80
#define MAX_HISTORY_SIZE (int)3

using namespace std;

class TravelCard{
private:
    shared_ptr<string> owner;
    shared_ptr<float> saldo;
	FixedSizeQueue<Stamp, MAX_HISTORY_SIZE> StampHistory;

public:
	TravelCard();
    ~TravelCard();

	void addSaldo(float amount);
	void clearTravelCard();

    shared_ptr<string> getOwner();
	void setOwner(string owner);
    shared_ptr<float> getSaldo();
	void setSaldo(float saldo);
	bool decreaseSaldo(float amount);
	FixedSizeQueue<Stamp, MAX_HISTORY_SIZE> getHistory();
	void addStamp(Stamp& stamp);
    string toString();

    friend ostream& operator<<(ostream& os, shared_ptr<TravelCard> card);
};

#endif