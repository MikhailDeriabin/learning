#ifndef MATKAKORTTI
#define MATKAKORTTI

#include "Henkilokortti.h"
#include "Lompakko.h"
#include "Omistaja.h"

class Matkakortti : public Henkilokortti, public Lompakko{
public:
	Matkakortti(std::string nimi) : Henkilokortti(nimi), Lompakko(nimi), Omistaja(nimi) {}
	std::string toString() override;
};

#endif

