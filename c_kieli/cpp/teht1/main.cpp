// C-kielinen Levyluettelo 
//

#include <stdio.h>
#include <tchar.h>
#include <conio.h>
#include <stdlib.h>
#include <iostream>
#include <string>

#define MAX 10

using namespace std;

typedef struct kokoelma {
	string nimi;
	string tekija;
	int jvuosi;
} aanite;

aanite levy, * levyOsoitin, levyt[MAX];


int kysyTiedot()
{
	/* pyyt„„ „„nitteiden tiedot k„ytt„j„lt„. palauttaa arvonaan sy”tettyjen lukum„„r„n*/
	string rivi;
	int i;
	//levyOsoitin=&levy; // asetetaan osoitin osoitamaan levy-muuttujaa
	cout << "kirjoita „„nilevykokoelmasi tiedot. Lopetus: \"teoksen nimi\"-kent„ss„ = *\n";
	i = 0;
	do
	{
		cout << "\nteoksen nimi? (40 merkki„) ";
		levyOsoitin = &levyt[i];
		getline(cin, levyOsoitin->nimi);

		if (levyOsoitin->nimi[0] != '*')
		{
			cout << "\ntekij„? (30 merkki„) ";
			getline(cin, levyOsoitin->tekija);
			int riviInt = 0;
			while (riviInt <= 0) {
				cout << "\njulkaisuvuosi? ";
				getline(cin, rivi);
				try {
					riviInt = stoi(rivi);
				}
				catch (...) {
					cout << "Vuosi on annettu väärin";
				}
			}
			i++;
		}
	} while ((levyOsoitin->nimi[0] != '*') && (i < MAX));
	return(i);
}

void tulostaTiedot(int lkm)
/* tulostetaan levyt */
{
	int i = 0;
	system("cls");
	if (lkm == 0)
	{
		cout << "Et sy”tt„nyt yht„k„„n levy„\n";
	}
	else
		for (i = 0; i < lkm; i++)
		{
			cout << "\n" << levyt[i].nimi << " " << levyt[i].tekija << " " << levyt[i].jvuosi;
		}
	cout << "\n"; // rivinvaihto
	//_getch();
}

void main()
{
	tulostaTiedot(kysyTiedot());
}