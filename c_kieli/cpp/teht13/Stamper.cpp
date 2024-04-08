#include "Stamper.h"

Stamper::Stamper(Travel place){
	this->place = place;
	if (place == Travel::HELSINKI) 
		travelPrice = HELSINKI_PRICE;
	else if (place == Travel::METROPOLITAN_AREA) 
		travelPrice = METROPOLITAN_AREA_PRICE;
}

bool Stamper::addStamp(IStampable& stampable) {
	bool isSuccess = stampable.decreaseSaldo(travelPrice);
	if (isSuccess) {
		auto timeNow = chrono::system_clock::now();
		time_t time = chrono::system_clock::to_time_t(timeNow);
		Stamp stamp(time, place);
        stamp.setPersonName(*stampable.getOwner());
		stampable.addStamp(stamp);

		return true;
	}

	return false;
}

Travel Stamper::getPlace() { return this->place; }