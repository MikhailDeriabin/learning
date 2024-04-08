#include <stdio.h>
#include "userInput.h"

int main(){
    char* userName[10];
    int userAge;
    int isEnd = 0;
    int userChoise;

    printMenu();

    while(!isEnd){
        askCommand(&userChoise);
        switch (userChoise){
        case 1:
            askName(userName);
            break;
        case 2:
            askAge(&userAge);
            break;
        case 3:
            printNameAndAge(userName, userAge);
            isEnd = 1;
            break;
        default:
            printf("Wrong command provided\n");
            break;
        }
    }

    return 0;
}