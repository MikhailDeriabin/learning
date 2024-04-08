#include "main.h"

using namespace std;

int main(int argc, char* argv[]){
	run();
	return 0;
}

void run(){
    int command;
	TravelCard* card = new TravelCard();
	card->clearTravelCard();

    SingleTicket ticket(HELSINKI_PRICE);

	Stamper helsinkiStamper(Travel::HELSINKI);
	Stamper metropolitanStamper(Travel::METROPOLITAN_AREA);

	do{
		//system("clear");
		printCommands();

        string commandStr;
        bool result;
		getline(cin, commandStr);
        try {
            command = stoi(commandStr);
        } catch (...){
            command = -1;
        }

		switch (command){
		case 1:
			initTravelCard(card);
			break;
		
		case 2:
            addSaldo(card);
			break;

		case 3:
			result = helsinkiStamper.addStamp(*card);
            printTravelResult(result);
			break;

		case 4:
			result = metropolitanStamper.addStamp(*card);
            printTravelResult(result);
			break;

		case 5:
            cout << "Card information:\n";
			cout << "Name: " << *card->getOwner() << endl;
            cout << "Saldo: " << *card->getSaldo() << endl;
			break;

        case 6:
            printCardHistory(card);
            break;

        case 7:
            result = helsinkiStamper.addStamp(ticket);
            printTravelResult(result);
            break;

        case 8:
            result = metropolitanStamper.addStamp(ticket);
            printTravelResult(result);
            break;

		case 9:
            cout <<"See you\n";
            delete card;
			break;

		default:
            cout << "Wrong command\n";
			break;		
		}
	}
	while (command != 9);

}

void printCommands(){
    cout << "\nCommands-------------------------";
    cout << "\n\n";
    cout << "Initialize a card\t\t1";
    cout << "\nAdd saldo\t\t\t2";
    cout << "\nTravel in Helsinki\t\t3";
    cout << "\nTravel at Metropolitan area\t4";
    cout << "\nPrint card info\t\t\t5";
    cout << "\nPrint travel history\t\t6";
    cout << "\nTravel in Helsinki by ticket\t\t7";
    cout << "\nTravel at Metropolitan area by ticket\t8";
    cout << "\nEnd\t\t\t\t9";
    cout << "\nCommand: ";
}

void initTravelCard(TravelCard* card) {
	cout << "What is your name? ";
	string name;
	getline(cin, name);
	card->setOwner(name);

	cout << "Thanks\n";
	cout << *card->getOwner() << ", would you like to put some money?\n";
	string choice;
	while (choice != "yes" && choice != "no") {
		cout << "yes/no? ";
		getline(cin, choice);
		cout << "\n";
	}

	if (choice == "yes")
        addSaldo(card);

	cout << "Thank you " << *card->getOwner() << ", your card is ready\n";
}

void addSaldo(TravelCard* card) {
    cout << "How much you want to add?\n";
    cout << "0 - cancel\n";

	string amountStr;
	float amount = -1.0f;
	bool isCanceled = false;
	while (amount < 0) {
        cout << "00.00 (euro): ";
		getline(cin, amountStr);
        try {
            amount = stof(amountStr);
        } catch (...){
            amount = -1;
        }
		if (amount < 0)
			cout << "Amount can not be below 0\n";

		if (amount == 0) {
			cout << "Canceled\n";
            isCanceled = true;
			break;
		}
	}

	if (!isCanceled) {
		card->addSaldo(amount);
        cout << "Saldo is added\n";
        cout << "Saldo total: " << *card->getSaldo() << endl;
	}
}

void printTravelResult(bool isSuccess){
    if(isSuccess)     
		cout << "Have a nice trip!\n";
    else
		cout << "Sorry, but there is not enough money\n";
}

void printCardHistory(TravelCard* card){
    FixedSizeQueue<Stamp, MAX_HISTORY_SIZE> history = card->getHistory();
    stack<string> historyStack;
    while (!history.empty()) {
        cout << card->toString() << ", ";
        historyStack.push(history.front().toString());
        history.pop();
    }
    while (!historyStack.empty()) {
        cout << historyStack.top() << endl;
        historyStack.pop();
    }
}