#include "TravelCard.h"

TravelCard::TravelCard(){
    owner = new string;
    saldo = new float;
    //this->setOwner("Anonymous");
    //this->setSaldo(0.0f);
}

TravelCard::~TravelCard(){
    delete owner;
    delete saldo;
}

TravelCard::TravelCard(const TravelCard& card){
    owner = new string;
    *owner = *card.owner;
    saldo = new float;
    *saldo = *card.saldo;
}

void TravelCard::addSaldo(float amount) {
	if (amount < 0) {
		cout << "Amount can not be less than 0";
		return;
	}

	*this->saldo += amount;
}

void TravelCard::clearTravelCard() {
	this->setOwner("Anonymus");
	this->setSaldo(0.0f);
}

string TravelCard::getOwner() { return *this->owner; }
void TravelCard::setOwner(string owner) { *this->owner = owner; }
float TravelCard::getSaldo() { return *this->saldo; }
void TravelCard::setSaldo(float saldo) {
	if (saldo >= 0)
        *this->saldo = saldo;
}

bool TravelCard::decreaseSaldo(float amount) {
	if (this->getSaldo() < amount) {
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

string TravelCard::toString() {
	string result =  "Card information:\n";
	result += "Owner: " + *owner + "\n";
	result += "Amount: " + to_string(*saldo) + "\n";
    return result;
}

ostream& operator<<(ostream& os, TravelCard card){
	os << card.toString();
	return os;
}
