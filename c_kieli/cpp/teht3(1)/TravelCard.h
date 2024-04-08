#ifndef TRAVELCARD_H
#define TRAVELCARD_H

#include <string>
#include <iostream>
#include "FixedSizeQueue.h"
#include "Travel.h"
#include "TravelStatus.h"
#include "Stamp.h"

#define HELSINKI_PRICE (float)3.0
#define METROPOLITAN_AREA_PRICE (float)4.80
#define MAX_HISTORY_SIZE (int)3

using namespace std;

class TravelCard {
private:
	string* owner = new string;
	float* saldo = new float;
	FixedSizeQueue<Stamp, MAX_HISTORY_SIZE> StampHistory;

public:
	TravelCard();
    ~TravelCard();

	void addSaldo(float amount);
	//TravelStatus travel(Travel travel);
	void clearTravelCard();

	string* getOwner();
	void setOwner(string owner);
	float* getSaldo();
	void setSaldo(float saldo);
	bool decreaseSaldo(float amount);
	FixedSizeQueue<Stamp, MAX_HISTORY_SIZE> getHistory();
	void addStamp(Stamp& stamp);
};

#endif