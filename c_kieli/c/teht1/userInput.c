#include "userInput.h"
#include <stdio.h>
#include <stdlib.h>

void printMenu(){
    printf("Choose one of the options:\n");
    printf("1 - input name\n");
    printf("2 - input age\n");
    printf("3 - print inputs and exit\n");
    printf("-------------------------\n");
}

void askName(char** name){
    printf("Enter your name: ");
    scanf("%s", name);
}

void askAge(int* age){ 
    askIntNum(age, "Enter your age: ", 1, 150);
}

void askCommand(int* command){
    askIntNum(command, "Command: ", 1, 3);
}

void askIntNum(int* result, char* msg, int min, int max){
    char input[10];
    printf(msg);
    scanf("%10s", input);
    int inputInt = atoi(input);
    if(inputInt>=min && inputInt<=max){
        *result = inputInt;
    } else{
        printf("Wrong value, please try again\n");
        askIntNum(result, msg, min, max);
    }
}

void printNameAndAge(char** name, int age){
    printf("-------------------------\n");
    printf("Your name is %s, your age is %d\n", name, age);
    printf("Exit...\n");
}