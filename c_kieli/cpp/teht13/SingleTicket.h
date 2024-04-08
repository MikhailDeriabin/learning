#ifndef SINGLETICKET_H
#define SINGLETICKET_H

#include "IStampable.h"
#include "Stamp.h"

class SingleTicket : public IStampable{
private:
    float saldo;
    bool isTicketUsed = false;
    Stamp* stamp;
public:
    SingleTicket(float amount);
    void addStamp(Stamp& stamp) override;
    bool decreaseSaldo(float amount) override;
    bool isUsed();
};


#endif
