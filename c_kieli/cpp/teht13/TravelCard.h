#ifndef TRAVELCARD_H
#define TRAVELCARD_H

#include <string>
#include <iostream>
#include "FixedSizeQueue.h"
#include "Travel.h"
#include "TravelStatus.h"
#include "Stamp.h"
#include "IStampable.h"

#define MAX_HISTORY_SIZE (int)3

using namespace std;

class TravelCard : public IStampable{
private:
	float* saldo = new float;
	FixedSizeQueue<Stamp, MAX_HISTORY_SIZE> StampHistory;

public:
	TravelCard();
    ~TravelCard();

	void addSaldo(float amount);
	void clearTravelCard();

	float* getSaldo();
	void setSaldo(float saldo);
	bool decreaseSaldo(float amount) override;
	FixedSizeQueue<Stamp, MAX_HISTORY_SIZE> getHistory();
	void addStamp(Stamp& stamp) override;
};

#endif