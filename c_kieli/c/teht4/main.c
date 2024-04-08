/*
Tehtävä 4. Määrittele kokonaislukutyyppinen taulukko, jonka nollaat aluksi. Lue sen
jälkeen näppäimistöltä arvot taulukon joka toiselle arvolle. Tulosta tämän jälkeen taulukon
alkioiden arvot sekä muistiosoitteet (sekä heksadesimaalimuodossa (”%p”) että 10-
järjestelmän lukuina (”%d”)), joissa taulukon alkiot sijaitsevat. Käytä taulukon käsittelyyn
osoitinta
*/

#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>
#include "main.h"

#define numsSize 5

int main(){
    int nums[numsSize];
    int* pNums = nums;
    pNums++;
    zeroIntArr(nums, numsSize);

    int maxInputNumCount = floor(numsSize/2);
    char maxInputNumCountStr[5];
    intToStr(maxInputNumCount, maxInputNumCountStr);
    int inputedNumCount = 1;

    while (inputedNumCount <= maxInputNumCount){
        int input;

        char inputedNumCountStr[5];
        intToStr(inputedNumCount, inputedNumCountStr);
        char* messages[] = { inputedNumCountStr, "/",  maxInputNumCountStr, " num: "};
        char msg[20] = "\0";
        concatStings(msg, messages, 4);

        askIntNum(&input, msg, 1, 1000);
        *pNums = input;
        pNums+=2;
        inputedNumCount++;
    }
    pNums = nums;

    printIntArr(nums, numsSize);

    return 0;
}

void zeroIntArr(int* arr, int size){
    for(int i=0; i<size; i++){
        *arr = 0;
        arr++;
    }
}

void printIntArr(int* arr, int size){
    for(int i=0; i<size; i++)
        printf("Elem %d has value %d and RAM address %p\n", i+1, arr[i], &arr[i]);     
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

void intToStr(int num, char* str){
    snprintf(str, sizeof(str), "%d\0", num);
}

void concatStings(char* result, char** strings, int stringsSize){
    for(int i=0; i<stringsSize; i++){
        strcat(result, strings[i]);
    }
}