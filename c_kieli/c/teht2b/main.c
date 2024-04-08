#include <stdio.h>
#define maxInputSize 50

int main(){
    char userInput[maxInputSize];

    printf("Enter a string: ");
    scanf("%50s", &userInput);

    char* pUserInput = userInput;
    while(*pUserInput != '\0')
        pUserInput++;

    int inputSize = pUserInput - userInput;
    for(int i=0; i<inputSize; i++){
        char currentChar = userInput[i];
        if(currentChar>='a' && currentChar<='z')
            userInput[i] = currentChar - ('a'-'A');        
    }

    printf("%s", userInput);

    return 0;
}