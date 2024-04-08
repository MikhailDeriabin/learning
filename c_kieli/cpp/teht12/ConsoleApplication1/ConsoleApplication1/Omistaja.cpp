#include "Omistaja.h"

Omistaja::Omistaja(std::string nimi) {
	this->nimi = nimi;
}

std::string Omistaja::toString() {
	return "Omistaja " + nimi;
}