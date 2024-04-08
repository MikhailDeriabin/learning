#include "IStampable.h"

IStampable::IStampable() {
    this->setOwner("Anonymous");
}

std::string IStampable::toString(){ return "Type: " + type; }
std::string* IStampable::getOwner() { return this->owner; }
void IStampable::setOwner(string owner) { *this->owner = owner; }