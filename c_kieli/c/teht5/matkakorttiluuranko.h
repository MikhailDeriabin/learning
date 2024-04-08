#ifndef MATKAKORTTILUURANKO_H
#define MATKAKORTTILUURANKO_H

enum Matkatyyppi {HELSINKI, SEUTU};

struct Matkakortti{
	char omistaja[41];
	float saldo;
};

void tulostaValikko(); 
void tulostaValikkoOhje();
void alustaKortti(struct Matkakortti *kortti);
void nollaaKortti(struct Matkakortti *kortti);
void lataaSaldo(struct Matkakortti *kortti);
int matkusta(struct Matkakortti *kortti, enum Matkatyyppi tyyppi);
int vahennaSaldo(struct Matkakortti *kortti, float maara);

int isStrEqual(const char* str1, const char* str2);

#endif