#ifndef HENKILOKORTTI
#define HENKILOKORTTI

#include <string>
#include "Omistaja.h"

class Henkilokortti : virtual public Omistaja
{
public:
	Henkilokortti(std::string nimi) : Omistaja(nimi) {}
	std::string toString() override;
};

#endif

