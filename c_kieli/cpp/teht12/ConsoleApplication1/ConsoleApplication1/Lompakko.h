#ifndef LOMPAKKO
#define LOMPAKKO

#include "Omistaja.h"

class Lompakko : virtual public Omistaja
{
public:
	Lompakko(std::string nimi) : Omistaja(nimi){}
	std::string toString() override;
};

#endif

