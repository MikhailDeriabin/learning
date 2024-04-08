#include <iostream>

#include "Omistaja.h"
#include "Henkilokortti.h"
#include "Lompakko.h"
#include "Matkakortti.h"


int main(){
    std::cout << "Creating 4 different classes...\n";

    Omistaja omistaja("Pekka");
    Henkilokortti henkilokortti("Leena");
    Lompakko lompakko("Antti");
    Matkakortti matkakortti("Jukka");

    std::cout << omistaja.toString() << "\n";
    std::cout << henkilokortti.toString() << "\n";
    std::cout << lompakko.toString() << "\n";
    std::cout << matkakortti.toString() << "\n";
}
