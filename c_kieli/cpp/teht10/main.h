#ifndef MAIN_H
#define MAIN_H

#include <iostream>
#include <string>
#include <deque>
#include <stack>
#include <memory>
#include <windows.h>
#include "TravelCard.h"
#include "Travel.h"
#include "TravelStatus.h"
#include "Stamper.h"
#include "Stamp.h"

void printCommands();
void initTravelCard(shared_ptr<TravelCard> card);
void addSaldo(shared_ptr<TravelCard> card);
void printTravelResult(bool isSuccess);
void printCardHistory(shared_ptr<TravelCard> card);
void run();

#endif