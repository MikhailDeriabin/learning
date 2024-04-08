#ifndef STAMP_H
#define STAMP_H

#include <ctime>
#include <string>
#include "Travel.h"
#include "TravelString.h"
using namespace std;

class Stamp{
public:
	Stamp(time_t time, Travel travel);
	time_t getTime();
	Travel getTravel();
    void setPersonName(string name);
	string toString();

private:
	time_t time;
	Travel travel;
    string placeName;
    string personName;
    string addZero(int num);

};

#endif