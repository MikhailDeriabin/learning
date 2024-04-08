#ifndef TEHT10_PANEL_H
#define TEHT10_PANEL_H

#include <string>
#include <windows.h>
#include <unistd.h>
#include <iostream>

class Panel {
public:
    Panel(int width=10, int height=5);
    void blinkRed(int timeCount=3, int intervalMS=500);
    void blinkGreen(int timeCount=3, int intervalMS=500);

private:
    int width, height;
    std::string body;
    std::string generateBody(int width, int height);
    void printBody(HANDLE handler, WORD color);
    void clearConsole(HANDLE handler);
    void blinkColor(WORD color, int timeCount, int intervalMS=1000);
};

#endif