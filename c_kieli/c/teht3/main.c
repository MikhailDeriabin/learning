#include <stdio.h>
#include "main.h"

#define maxInputSize 50
#define STR2(x) #x
#define STR(X) STR2(X)

int main(){
    char buffer[maxInputSize], concatedStr[maxInputSize*2] = {'\0'};

    printf("Enter first string: ");
    scanf("%" STR(maxInputSize) "s", &buffer);
    append(concatedStr, buffer);

    printf("Enter second string: ");
    scanf("%" STR(maxInputSize) "s", &buffer);
    append(concatedStr, buffer);

    printf("%s", concatedStr);

    return 0;
}

void append(char* pWhereStr, char* pToStr){
    //get pointer to end of the string
    while(*pWhereStr != '\0')
        pWhereStr++;
    
    //add second str values
    while(*pToStr != '\0'){
        *pWhereStr = *pToStr;
        pToStr++;
        pWhereStr++;
    }

    *pWhereStr = '\0';
}