import org.example.Pelaaja;
import org.example.Peli;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class PeliTest {
    @Test
    @Order(1)
    @DisplayName("lopetaPeli: should set lopeta peli to false")
    public void lopetaPeli() {
        Peli peli = new Peli("tes1", "test2");
        Pelaaja p = new Pelaaja("test");
        peli.lopetaPeli(p);
        assertTrue(peli.isPeliLoppui());
    }

    @Test
    @Order(2)
    @DisplayName("pelaaKierros: should not throw exceptions")
    public void pelaaKierros() {
        Peli peli = new Peli("tes1", "test2");
        peli.pelaaKierros();
        assertDoesNotThrow(() -> peli.pelaaKierros() );
    }

    @Test
    @Order(3)
    @DisplayName("pelaaKierros: should not end game after 2 rounds")
    public void pelaaKierrosTwice() {
        Peli peli = new Peli("tes1", "test2");
        peli.pelaaKierros();
        peli.pelaaKierros();
        assertFalse(peli.isPeliLoppui());
    }
}
