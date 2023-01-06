package teht19;

import teht19.collegues.Hyppääjä;
import teht19.collegues.Kisasihteeri;
import teht19.collegues.Mittamies;
import teht19.collegues.Tuomari;
import teht19.utils.Country;
import teht19.utils.NameGenerator;
import teht19.utils.RandomNums;
import teht19.utils.Settings;

import java.util.ArrayList;
import java.util.List;

import static teht19.utils.Country.*;

public class Main {
    public static void main(String[] args) {
        Country[] countries = { FINLAND, GERMANY, NORWAY, SWEDEN };
        NameGenerator nameGenerator = new NameGenerator();

        IMediator mediator = new Mediator();

        //Create all participants
        List<Hyppääjä> hyppääjät = new ArrayList<>();
        for(int i=0; i< Settings.hyppääjäCount; i++){
            String[] name = nameGenerator.generateFirstLastNameArr();
            Country country = countries[RandomNums.generateRandNum(0, countries.length)];
            Hyppääjä hyppääjä = new Hyppääjä(mediator, name[0], name[1], country);
            hyppääjät.add(hyppääjä);
            mediator.addHyppääjä(hyppääjä);
        }

        String[] mittamiesName = nameGenerator.generateFirstLastNameArr();
        Mittamies mittamies = new Mittamies(mediator, mittamiesName[0], mittamiesName[1]);
        mediator.registerMittamies(mittamies);

        for(int i=0; i< Settings.tuomariCount; i++){
            String[] name = nameGenerator.generateFirstLastNameArr();
            Tuomari tuomari = new Tuomari(name[0], name[1]);
            mediator.addTuomari(tuomari);
        }

        String[] kisaSihteeriName = nameGenerator.generateFirstLastNameArr();
        Kisasihteeri kisasihteeri = new Kisasihteeri(kisaSihteeriName[0], kisaSihteeriName[1]);
        mediator.registerKissasihteeri(kisasihteeri);

        //start tournament
        for(Hyppääjä hyppääjä : hyppääjät){
            hyppääjä.jump();
        }

        //print results
        kisasihteeri.printResults();
    }
}
