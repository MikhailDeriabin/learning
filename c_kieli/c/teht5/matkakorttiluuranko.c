#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "matkakorttiluuranko.h"

#define HELSINKIHINTA (float)3.0
#define SEUTUHINTA (float)4.80

int main(int argc, char* argv[]){
	tulostaValikko();
	return 0;
}

void tulostaValikko(){	
	char valinta;
	struct Matkakortti kortti;
	nollaaKortti(&kortti); // huolehditaan ettei kortti nayta kamalalta, jos sita ei alusteta

	do{
		//system("clear");
		tulostaValikkoOhje();		

		scanf(" %c", &valinta);
		switch (valinta){
		case '1': 	
			alustaKortti(&kortti);
			break;
		
		case '2':   
			lataaSaldo(&kortti);
			break;

		case '3': 	
			matkusta(&kortti, HELSINKI);
			break;

		case '4':	 
			matkusta(&kortti, SEUTU);
			break;

		case '5':   
			printf("\n\n\n\t\t\tKortin tiedot:");
			printf("\n\t\t\tNimi: %s ", kortti.omistaja);
			printf("\n\t\t\tSaldo: %.2f\n", kortti.saldo);
			break;

		case '6':
			printf("Näkemiin");
			break;

		default:
			printf("Väärä komento");
			break;		
		}
	}
	while (valinta!='6');

}

void alustaKortti(struct Matkakortti *kortti){
	printf("Mikä sun nimi on (max 41 merkkia)? ");
	char nimi[41] = "Anonyymi";
	scanf("%41s", nimi);
	strcpy(kortti->omistaja, nimi);

	printf("Selvä\n");
	printf("%s, haluatko lataa rahat kortille?\n", kortti->omistaja);
	char valinta[3] = "\0";
	while(!isStrEqual(valinta, "joo") && !isStrEqual(valinta, "ei")){
		printf("joo/ei? ");
		scanf("%3s", valinta);
		printf("\n");
	}

	if(isStrEqual(valinta, "joo"))
		lataaSaldo(kortti);

	printf("Kiitos %s, sun kortti nyt on valmis\n", kortti->omistaja);
}

void nollaaKortti(struct Matkakortti *kortti){
	strcpy(kortti->omistaja, "Anonyymi");
	kortti->saldo = 0.0f;
}

void lataaSaldo(struct Matkakortti *kortti){
	printf("Paljonko haluat ladata?\n");
	printf("0 - lopeta latauksen\n");

	char maaraStr[5];
	float maara = -1.0f;
	int peruutettu = 0;
	while(maara < 0){
		printf("00.00 (€): ");
		scanf("%5s", maaraStr);
		maara = atof(maaraStr);
		if(maara < 0)
			printf("Maara ei voi olla alle 0\n");

		if(maara == 0){
			printf("Lataus peruutettu\n");
			peruutettu = 1;
			break;
		}		
	}
	
	if(!peruutettu){
		kortti->saldo += maara;
		printf("Saldo on ladattu\n");
		printf("Saldo yhteensä: %0.2f\n", kortti->saldo);
	}
}

int matkusta(struct Matkakortti *kortti, enum Matkatyyppi tyyppi){
	int status = 0;
	switch (tyyppi){
	case HELSINKI:
		status = vahennaSaldo(kortti, HELSINKIHINTA);
		break;
	case SEUTU:
		status = vahennaSaldo(kortti, SEUTUHINTA);
		break;
	default:
		break;
	}

	return status;
}

int vahennaSaldo(struct Matkakortti *kortti, float maara){
	if(kortti->saldo < maara){
		printf("\n\n\t\t\tRahasi eivat riita.");
		printf("\n\t\t\tSaldo: %.2f ", kortti->saldo);
		return 0;
	}else{
		kortti->saldo -= maara;
		printf("\n\n\t\t\tHyvaa matkaa!");
		printf("\n\t\t\tSaldo: %.2f ", kortti->saldo);
		return 1;
	}
}

void tulostaValikkoOhje(){
	printf("\n---------------------------------Valikko------------------------------");
		printf("\n\n\n\n");
		printf("\t\t\tAlusta matkakortti\t\t1");
		printf("\n\t\t\tLataa saldoa\t\t\t2");
		printf("\n\t\t\tMatkusta Helsingissa\t\t3");
		printf("\n\t\t\tMatkusta seutuliikenteessa\t4");
		printf("\n\t\t\tTulosta kortin tiedot\t\t5");
		printf("\n\t\t\tLopetus\t\t\t\t6");
		printf("\n\t\t\tValitse:");
}

int isStrEqual(const char* str1, const char* str2){
	return strcmp(str1, str2) == 0 ? 1 : 0;
}