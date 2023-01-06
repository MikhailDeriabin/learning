import org.example.Valinta;
import org.example.ValintaVaihtoehto;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class ValintaTest {
    @Test
    @DisplayName("isGreater: Should return false for KIVI KIVI combination")
    public void isGreaterKiviKivi() {
        Valinta v1 = new Valinta(ValintaVaihtoehto.KIVI);
        Valinta v2 = new Valinta(ValintaVaihtoehto.KIVI);

        boolean result = v1.isGreater(v2);

        assertFalse(result);
    }
    @Test
    @DisplayName("isGreater: Should return true for KIVI SAKSET combination")
    public void isGreaterKiviSakset() {
        Valinta v1 = new Valinta(ValintaVaihtoehto.KIVI);
        Valinta v2 = new Valinta(ValintaVaihtoehto.SAKSET);

        boolean result = v1.isGreater(v2);

        assertTrue(result);
    }
    @Test
    @DisplayName("isGreater: Should return false for KIVI PAPERI combination")
    public void isGreaterKiviPaperi() {
        Valinta v1 = new Valinta(ValintaVaihtoehto.KIVI);
        Valinta v2 = new Valinta(ValintaVaihtoehto.PAPERI);

        boolean result = v1.isGreater(v2);

        assertFalse(result);
    }

    @Test
    @DisplayName("isGreater: Should return false for SAKSET KIVI combination")
    public void isGreaterSaksetKivi() {
        Valinta v1 = new Valinta(ValintaVaihtoehto.SAKSET);
        Valinta v2 = new Valinta(ValintaVaihtoehto.KIVI);

        boolean result = v1.isGreater(v2);

        assertFalse(result);
    }
    @Test
    @DisplayName("isGreater: Should return false for SAKSET SAKSET combination")
    public void isGreaterSaksetSakset() {
        Valinta v1 = new Valinta(ValintaVaihtoehto.SAKSET);
        Valinta v2 = new Valinta(ValintaVaihtoehto.SAKSET);

        boolean result = v1.isGreater(v2);

        assertFalse(result);
    }
    @Test
    @DisplayName("isGreater: Should return true for SAKSET PAPERI combination")
    public void isGreaterSaksetPaperi() {
        Valinta v1 = new Valinta(ValintaVaihtoehto.SAKSET);
        Valinta v2 = new Valinta(ValintaVaihtoehto.PAPERI);

        boolean result = v1.isGreater(v2);

        assertTrue(result);
    }

    @Test
    @DisplayName("isGreater: Should return true for PAPERI KIVI combination")
    public void isGreaterPaperiKivi() {
        Valinta v1 = new Valinta(ValintaVaihtoehto.PAPERI);
        Valinta v2 = new Valinta(ValintaVaihtoehto.KIVI);

        boolean result = v1.isGreater(v2);

        assertTrue(result);
    }
    @Test
    @DisplayName("isGreater: Should return false for PAPERI SAKSET combination")
    public void isGreaterPaperiSakset() {
        Valinta v1 = new Valinta(ValintaVaihtoehto.PAPERI);
        Valinta v2 = new Valinta(ValintaVaihtoehto.SAKSET);

        boolean result = v1.isGreater(v2);

        assertFalse(result);
    }
    @Test
    @DisplayName("isGreater: Should return false for PAPERI PAPERI combination")
    public void isGreaterPaperiPaperi() {
        Valinta v1 = new Valinta(ValintaVaihtoehto.PAPERI);
        Valinta v2 = new Valinta(ValintaVaihtoehto.PAPERI);

        boolean result = v1.isGreater(v2);

        assertFalse(result);
    }



    @Test
    @DisplayName("isLess: Should return false for KIVI KIVI combination")
    public void isLessKiviKivi() {
        Valinta v1 = new Valinta(ValintaVaihtoehto.KIVI);
        Valinta v2 = new Valinta(ValintaVaihtoehto.KIVI);

        boolean result = v1.isLess(v2);

        assertFalse(result);
    }
    @Test
    @DisplayName("isLess: Should return false for KIVI SAKSET combination")
    public void isLessKiviSakset() {
        Valinta v1 = new Valinta(ValintaVaihtoehto.KIVI);
        Valinta v2 = new Valinta(ValintaVaihtoehto.SAKSET);

        boolean result = v1.isLess(v2);

        assertFalse(result);
    }
    @Test
    @DisplayName("isLess: Should return true for KIVI PAPERI combination")
    public void isLessKiviPaperi() {
        Valinta v1 = new Valinta(ValintaVaihtoehto.KIVI);
        Valinta v2 = new Valinta(ValintaVaihtoehto.PAPERI);

        boolean result = v1.isLess(v2);

        assertTrue(result);
    }

    @Test
    @DisplayName("isLess: Should return true for SAKSET KIVI combination")
    public void isLessSaksetKivi() {
        Valinta v1 = new Valinta(ValintaVaihtoehto.SAKSET);
        Valinta v2 = new Valinta(ValintaVaihtoehto.KIVI);

        boolean result = v1.isLess(v2);

        assertTrue(result);
    }
    @Test
    @DisplayName("isLess: Should return false for SAKSET SAKSET combination")
    public void isLessSaksetSakset() {
        Valinta v1 = new Valinta(ValintaVaihtoehto.SAKSET);
        Valinta v2 = new Valinta(ValintaVaihtoehto.SAKSET);

        boolean result = v1.isLess(v2);

        assertFalse(result);
    }
    @Test
    @DisplayName("isLess: Should return false for SAKSET PAPERI combination")
    public void isLessSaksetPaperi() {
        Valinta v1 = new Valinta(ValintaVaihtoehto.SAKSET);
        Valinta v2 = new Valinta(ValintaVaihtoehto.PAPERI);

        boolean result = v1.isLess(v2);

        assertFalse(result);
    }

    @Test
    @DisplayName("isLess: Should return false for PAPERI KIVI combination")
    public void isLessPaperiKivi() {
        Valinta v1 = new Valinta(ValintaVaihtoehto.PAPERI);
        Valinta v2 = new Valinta(ValintaVaihtoehto.KIVI);

        boolean result = v1.isLess(v2);

        assertFalse(result);
    }
    @Test
    @DisplayName("isLess: Should return true for PAPERI SAKSET combination")
    public void isLessPaperiSakset() {
        Valinta v1 = new Valinta(ValintaVaihtoehto.PAPERI);
        Valinta v2 = new Valinta(ValintaVaihtoehto.SAKSET);

        boolean result = v1.isLess(v2);

        assertTrue(result);
    }
    @Test
    @DisplayName("isLess: Should return false for PAPERI PAPERI combination")
    public void isLessPaperiPaperi() {
        Valinta v1 = new Valinta(ValintaVaihtoehto.PAPERI);
        Valinta v2 = new Valinta(ValintaVaihtoehto.PAPERI);

        boolean result = v1.isLess(v2);

        assertFalse(result);
    }



    @Test
    @DisplayName("toString: Should return kivi for KIVI")
    public void toStringKivi() {
        Valinta v = new Valinta(ValintaVaihtoehto.KIVI);
        assertEquals(v.toString(), "kivi");
    }
    @Test
    @DisplayName("toString: Should return sakset for SAKSET")
    public void toStringSakset() {
        Valinta v = new Valinta(ValintaVaihtoehto.SAKSET);
        assertEquals(v.toString(), "sakset");
    }
    @Test
    @DisplayName("toString: Should return paperi for PAPERI")
    public void toStringPaperi() {
        Valinta v = new Valinta(ValintaVaihtoehto.PAPERI);
        assertEquals(v.toString(), "paperi");
    }



    @Test
    @DisplayName("getValintaVaihtoehto: Should return KIVI for KIVI")
    public void getValintaVaihtoehtoKivi() {
        Valinta v = new Valinta(ValintaVaihtoehto.KIVI);
        assertEquals(v.getValintaVaihtoehto(), ValintaVaihtoehto.KIVI);
    }
    @Test
    @DisplayName("getValintaVaihtoehto: Should return SAKSET for SAKSET")
    public void getValintaVaihtoehtoSakset() {
        Valinta v = new Valinta(ValintaVaihtoehto.SAKSET);
        assertEquals(v.getValintaVaihtoehto(), ValintaVaihtoehto.SAKSET);
    }
    @Test
    @DisplayName("getValintaVaihtoehto: Should return PAPERI for PAPERI")
    public void getValintaVaihtoehtoPaperi() {
        Valinta v = new Valinta(ValintaVaihtoehto.PAPERI);
        assertEquals(v.getValintaVaihtoehto(), ValintaVaihtoehto.PAPERI);
    }
}
