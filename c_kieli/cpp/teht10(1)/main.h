#ifndef MAIN_H
#define MAIN_H

#include <iostream>
#include <string>
#include <deque>
#include <stack>
#include <memory>
#include "TravelCard.h"
#include "Travel.h"
#include "TravelStatus.h"
#include "Stamper.h"
#include "Stamp.h"

void printCommands();
void initTravelCard(TravelCard* card);
void addSaldo(TravelCard* card);
void printTravelResult(bool isSuccess);
void printCardHistory(TravelCard card);
void run();

#endif