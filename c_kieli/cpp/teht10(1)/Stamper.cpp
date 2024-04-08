#include "Stamper.h"

Stamper::Stamper(Travel place){
	this->place = place;
	if (place == Travel::HELSINKI) 
		travelPrice = HELSINKI_PRICE;
	else if (place == Travel::METROPOLITAN_AREA) 
		travelPrice = METROPOLITAN_AREA_PRICE;
}

TravelCard Stamper::addStamp(TravelCard card) {
    cout << "Saldo before: " << card.getSaldo() << endl;
	bool isSuccess = card.decreaseSaldo(travelPrice);
    cout << "Saldo after: " << card.getSaldo() << endl;

	if (isSuccess) {
        cout << "Success!" << endl;
		auto timeNow = chrono::system_clock::now();
		time_t time = chrono::system_clock::to_time_t(timeNow);
		Stamp stamp(time, place);
        stamp.setPersonName(card.getOwner());
		card.addStamp(stamp);
	}

	return card;
}

TravelCard Stamper::operator<<(TravelCard card){
    return this->addStamp(card);
}

Travel Stamper::getPlace() { return this->place; }