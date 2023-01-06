package org.example;

/**
 * The class represents move of Player.
 */
public class Valinta implements Comparable<Valinta> {
    /**
     * Player's move enum.
     */
    private final ValintaVaihtoehto valintaVaihtoehto;

    /**
     * The constructor sets pLayer's move.
     * @param valintaVaihtoehto pLayer's move.
     */
    public Valinta(ValintaVaihtoehto valintaVaihtoehto){
        this.valintaVaihtoehto = valintaVaihtoehto;
    }

    /**
     * Getter for valintaVaihtoehto field.
     * @return valintaVaihtoehto field.
     */
    public ValintaVaihtoehto getValintaVaihtoehto() { return valintaVaihtoehto; }

    /**
     * The method determines whenever this is greater than given.
     * @param valinta Valinta-object to compare with.
     * @return true, if this object is greater.
     */
    public boolean isGreater(Valinta valinta) { return this.compareTo(valinta) > 0; }

    /**
     * The method determines whenever this object is less than given.
     * @param valinta Valinta-object to compare with.
     * @return true, if this object is less.
     */
    public boolean isLess(Valinta valinta) { return this.compareTo(valinta) < 0; }

    @Override
    public String toString(){
        return switch (valintaVaihtoehto) {
            case KIVI -> "kivi";
            case SAKSET -> "sakset";
            case PAPERI -> "paperi";
        };
    }

    @Override
    public int compareTo(Valinta toinenValinta) {
        int result = 0;

        switch (valintaVaihtoehto) {
            case KIVI:
                if(toinenValinta.getValintaVaihtoehto() == ValintaVaihtoehto.SAKSET)
                    result = 1;
                else if (toinenValinta.getValintaVaihtoehto() == ValintaVaihtoehto.PAPERI)
                    result = -1;
                break;
            case SAKSET:
                if(toinenValinta.getValintaVaihtoehto() == ValintaVaihtoehto.KIVI)
                    result = -1;
                else if (toinenValinta.getValintaVaihtoehto() == ValintaVaihtoehto.PAPERI)
                    result = 1;
                break;
            case PAPERI:
                if(toinenValinta.getValintaVaihtoehto() == ValintaVaihtoehto.KIVI)
                    result = 1;
                else if (toinenValinta.getValintaVaihtoehto() == ValintaVaihtoehto.SAKSET)
                    result = -1;
                break;
        }

        return result;
    }
}
