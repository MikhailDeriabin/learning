#include "TravelCard.h"

TravelCard::TravelCard(){
    this->setOwner("Anonymous");
    this->setSaldo(0.0f);
}

TravelCard::~TravelCard(){
    cout << "TravelCard object deleted" << endl;
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

shared_ptr<string> TravelCard::getOwner() { return this->owner; }
void TravelCard::setOwner(string owner) { this->owner = make_shared<string>(owner); }
shared_ptr<float> TravelCard::getSaldo() { return this->saldo; }
void TravelCard::setSaldo(float saldo) {
	if (saldo >= 0)
        this->saldo = make_shared<float>(saldo);
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

string TravelCard::toString() {
	string result =  "Card information:\n";
	result += "Owner: " + *owner + "\n";
	result += "Amount: " + to_string(*saldo) + "\n";
    return result;
}

ostream& operator<<(ostream& os, shared_ptr<TravelCard> card){
	os << card->toString();
	return os;
}
