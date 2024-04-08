#ifndef USERINPUT_H
#define USERINPUT_H

void printMenu();
void askName(char** name);
void askAge(int* age);
void askCommand(int* command);
void printNameAndAge(char** name, int age);
void askIntNum(int* result, char* msg, int min, int max);

#endif