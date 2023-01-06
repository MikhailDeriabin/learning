import org.example.Pelaaja;
import org.example.Valinta;
import org.example.ValintaVaihtoehto;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

public class PelaajaTest {
    @Test
    @DisplayName("toString: should return pelaajanNimi specified in the constructor")
    public void toStringTest() {
        String testName = "testName";
        Pelaaja p = new Pelaaja(testName);
        assertEquals(p.toString(), testName);
    }

    @Test
    @DisplayName("lisaaVoitto: should increase voitot by 1 each time")
    public void lisaaVoitto() {
        Pelaaja p = new Pelaaja("testName");
        p.lisaaVoitto();
        p.lisaaVoitto();
        assertEquals(p.getVoitot(), 2);
    }

    @Test
    @DisplayName("pelaajanValinta: should return random Valinta object")
    public void pelaajanValinta() {
        Pelaaja p = new Pelaaja("testName");
        Valinta v = p.pelaajanValinta();
        assertNotNull(v);
    }
}
