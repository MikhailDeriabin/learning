#include <stdio.h>
#define maxInputSize 50

int main(){
    char userInput[maxInputSize];

    printf("Enter a string: ");
    scanf("%50s", &userInput);

    char* pUserInput = userInput;
    while(*pUserInput != '\0')
        pUserInput++;

    char reverseInput[maxInputSize];
    for(int i=0; pUserInput>=userInput; i++){
        pUserInput--;
        reverseInput[i] = *pUserInput;
    }
    reverseInput[maxInputSize-1] = '\0';

    printf("%s", reverseInput);

    return 0;
}