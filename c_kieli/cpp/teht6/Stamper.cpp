#include "Stamper.h"

Stamper::Stamper(Travel place){
	this->place = place;
	if (place == Travel::HELSINKI) 
		travelPrice = HELSINKI_PRICE;
	else if (place == Travel::METROPOLITAN_AREA) 
		travelPrice = METROPOLITAN_AREA_PRICE;
}

bool Stamper::addStamp(shared_ptr<TravelCard> card) {
	bool isSuccess = card->decreaseSaldo(travelPrice);
	if (isSuccess) {
		auto timeNow = chrono::system_clock::now();
		time_t time = chrono::system_clock::to_time_t(timeNow);
		Stamp stamp(time, place);
        stamp.setPersonName(*card->getOwner());
		card->addStamp(stamp);

		return true;
	}

	return false;
}

bool Stamper::operator<<(shared_ptr<TravelCard> card){
    return this->addStamp(card);
}

Travel Stamper::getPlace() { return this->place; }