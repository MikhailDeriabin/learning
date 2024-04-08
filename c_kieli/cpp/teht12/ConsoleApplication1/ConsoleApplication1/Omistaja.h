#ifndef OMISTAJA
#define OMISTAJA

#include <string>

class Omistaja
{
public:
	Omistaja(std::string nimi);
	virtual std::string toString();
	
protected:
	std::string nimi;
};

#endif

