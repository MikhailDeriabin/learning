package teht19;

import teht19.collegues.*;

public interface IMediator {
    void addHyppääjä(Hyppääjä jumper);

    void registerMittamies(Mittamies mittamies);

    void addTuomari(Tuomari tuomari);

    void registerKissasihteeri(Kisasihteeri kisasihteeri);

    void triggerMittaus(Hyppääjä jumper);

    void triggerArvaaminen(Hyppääjä jumper);

    void triggerTallentaminen(Hyppääjä jumper);

    Kisasihteeri getKisasihteeri();
}
