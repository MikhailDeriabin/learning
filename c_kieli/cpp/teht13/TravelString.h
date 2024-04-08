#ifndef TRAVEL_STRING_H
#define TRAVEL_STRING_H

#include <map>
#include <string>
#include "Travel.h"

class TravelString{
public:
    std::map<Travel, std::string> map = {
        {Travel::HELSINKI, "Helsinki"},
        {Travel::METROPOLITAN_AREA, "Metropolitan area"}
    };
};

#endif
