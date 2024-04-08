#ifndef ISTAMPABLE_H
#define ISTAMPABLE_H

#include "Stamp.h"

#define HELSINKI_PRICE (float)3.0
#define METROPOLITAN_AREA_PRICE (float)4.80

class IStampable {
protected:
    std::string type;
    std::string* owner = new string;

public:
    IStampable();
    std::string toString();
    std::string* getOwner();
    void setOwner(string owner);
    virtual void addStamp(Stamp& stamp) = 0;
    virtual bool decreaseSaldo(float amount) = 0;
};


#endif
