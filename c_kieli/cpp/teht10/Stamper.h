#ifndef STAMPER_H
#define STAMPER_H

#include "TravelCard.h"
#include "TravelStatus.h"
#include "Travel.h"
#include "Panel.h"
#include <chrono>
#include <ctime>
using namespace std;

#define HELSINKI_PRICE (float)3.0
#define METROPOLITAN_AREA_PRICE (float)4.80
#define MAX_HISTORY_SIZE (int)3

class Stamper {
public:
	Stamper(Travel place);
	bool addStamp(shared_ptr<TravelCard> card);
    bool operator<<(shared_ptr<TravelCard> card);
	Travel getPlace();

private:
	Travel place;
	float travelPrice;
    shared_ptr<Panel> panel = std::make_shared<Panel>(12,6);
};

#endif 