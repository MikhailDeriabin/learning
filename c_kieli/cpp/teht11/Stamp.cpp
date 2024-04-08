#include "Stamp.h"

Stamp::Stamp(time_t time, Travel travel) {
	this->time = time;
	this->travel = travel;
    this->personName = "Anonymous";

    placeName = TravelString().map[travel];
}

string Stamp::toString(){
    tm *timeLocal = localtime(&this->time);
    string timeStr = addZero(timeLocal->tm_mday) + "." + addZero(timeLocal->tm_mon+1) + "." + to_string(1900 + timeLocal->tm_year) + " ";
    timeStr += addZero(timeLocal->tm_hour) + ":" + addZero(timeLocal->tm_min) + ":" + addZero(timeLocal->tm_sec);

	return timeStr + " - " + placeName + " (" + personName + ")";
}

time_t Stamp::getTime() { return this->time; }

Travel Stamp::getTravel() { return this->travel; }

void Stamp::setPersonName(string name){ this->personName = name; }

string Stamp::addZero(int num){
    if(num < 10)
        return "0" + to_string(num);
    return to_string(num);
}