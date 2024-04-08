#include "TravelCard.h"

TravelCard::TravelCard(){
    this->setOwner("Anonymous");
    this->setSaldo(0.0f);
}

TravelCard::~TravelCard(){
    delete owner;
    delete saldo;
}

void TravelCard::addSaldo(float amount) {
	if (amount < 0) {
		cout << "Amount can not be less than 0";
		return;
	}

	*this->saldo += amount;
}
/*
TravelStatus TravelCard::travel(Travel travel) {
	bool isSuccess = false;
	switch (travel) {
	case Travel::HELSINKI:
		isSuccess = decreaseSaldo(HELSINKI_PRICE);
		return isSuccess ? TravelStatus::SUCCESS : TravelStatus::INSUFFICIENT_MONEY_AMOUNT;
	case Travel::METROPOLITAN_AREA:
		isSuccess = decreaseSaldo(METROPOLITAN_AREA_PRICE);
		return isSuccess ? TravelStatus::SUCCESS : TravelStatus::INSUFFICIENT_MONEY_AMOUNT;
	default:
		return TravelStatus::NOT_PROCESSED;;
	}
}*/

void TravelCard::clearTravelCard() {
	this->setOwner("Anonymus");
	this->setSaldo(0.0f);
}

string* TravelCard::getOwner() { return this->owner; }
void TravelCard::setOwner(string owner) { *this->owner = owner; }
float* TravelCard::getSaldo() { return this->saldo; }
void TravelCard::setSaldo(float saldo) {
	if (saldo >= 0)
        *this->saldo = saldo;
}

bool TravelCard::decreaseSaldo(float amount) {
	if ((*this->getSaldo()) < amount) {
		return false;
	}
	else {
        *this->saldo -= amount;
		return true;
	}
}

FixedSizeQueue<Stamp, MAX_HISTORY_SIZE> TravelCard::getHistory() { return this->StampHistory; }

void TravelCard::addStamp(Stamp& stamp) {
	StampHistory.push(stamp);
}