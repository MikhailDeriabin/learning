package teht1.aterioiva;

import teht1.ateria.Juoma;

public abstract class AterioivaOtus {

    Juoma juoma = null;

    public abstract Juoma createJuoma();

    public void aterioi(){
        syö();
        juo();
    }

    public void syö(){
        System.out.println("Kylläpä ruoka maistuukin hyvältä");
    }

    public void juo(){
        if (juoma == null)
            juoma = createJuoma();
        System.out.println("Aterian jälkeen " + juoma + " tekee terää");
    }
}
