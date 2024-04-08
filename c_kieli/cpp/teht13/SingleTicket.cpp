#include "SingleTicket.h"

SingleTicket::SingleTicket(float amount) {
    type = "SingleTicket";
    saldo = amount;
}

void SingleTicket::addStamp(Stamp &stamp) {
    this->stamp = &stamp;
}

bool SingleTicket::decreaseSaldo(float amount) {
    if(saldo >= amount){
        saldo = 0;
        isTicketUsed = true;
        return true;
    }

    return false;
}

bool SingleTicket::isUsed() {
    return isTicketUsed;
}
