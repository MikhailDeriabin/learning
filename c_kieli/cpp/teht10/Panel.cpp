#include <thread>
#include "Panel.h"

Panel::Panel(int width, int height){
    this->width = width;
    this->height = height;
    this->body = generateBody(width, height);
}

void Panel::blinkRed(int timeCount, int intervalMS){
    blinkColor(BACKGROUND_RED, timeCount, intervalMS);
}

void Panel::blinkGreen(int timeCount, int intervalMS){
    blinkColor(BACKGROUND_GREEN, timeCount, intervalMS);
}

std::string Panel::generateBody(int width, int height){
    std::string row = "";
    for(int i=0; i<width; i++)
        row += " ";

    std::string result = "";
    for(int i=0; i<height-1; i++)
        result += row + "\n";
    result += row;

    return result;
}

void Panel::printBody(HANDLE handler, WORD color) {
    SetConsoleTextAttribute(handler,  color);
    std::cout << body;
}

void Panel::clearConsole(HANDLE handler) {
    SetConsoleTextAttribute(handler, FOREGROUND_RED | FOREGROUND_GREEN | FOREGROUND_BLUE);
    system("cls");
}

void Panel::blinkColor(WORD color, int timeCount, int intervalMS) {
    HANDLE console_color = GetStdHandle(STD_OUTPUT_HANDLE);
    clearConsole(console_color);
    for(int i=0; i<timeCount-1; i++){
        printBody(console_color, color);
        Sleep(intervalMS);
        clearConsole(console_color);
        Sleep(intervalMS);
    }
    printBody(console_color, color);
    Sleep(intervalMS);
    clearConsole(console_color);
}
