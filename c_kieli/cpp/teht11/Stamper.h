#ifndef STAMPER_H
#define STAMPER_H

#include "TravelCard.h"
#include "TravelStatus.h"
#include "Travel.h"
#include <chrono>
#include <ctime>
using namespace std;

#define HELSINKI_PRICE (float)3.0
#define METROPOLITAN_AREA_PRICE (float)4.80
#define MAX_HISTORY_SIZE (int)3

class Stamper {
public:
	Stamper(Travel place);
	bool addStamp(TravelCard& card);
	Travel getPlace();

private:
	Travel place;
	float travelPrice;
};

#endif 