package teht3;
/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author kamaj
 */
import java.util.Random;

public class Algoritmit {
    final static int MAX=500000;
    final static int maxNumValue = 1000;
    private static long selectionCount = 0;
    private static long mergeCount = 0;
    private static long quickCount = 0;

    public static void main(String[] args) {
        selectSort();
        mergeSort();
        quickSortLoop();

        System.out.println("Selection algorithm: " + selectionCount);
        System.out.println("Merge algorithm: " + mergeCount);
        System.out.println("Quick algorithm: " + quickCount);
    }

    public static void selectSort() {
        int[] taul = new int[MAX]; //taul tallettaa lajiteltavat tiedot
        int i, j, k, apu, pienin;
        Random r = new Random(); //luodaan satunnaislukugeneraattori
        for (i=0;i<MAX;i++) {
            taul[i] = r.nextInt(maxNumValue); //generoidaan luvut
        }

        for (i=0;i<MAX;i++) {
            pienin=i;
            for (j=i+1;j<MAX;j++) {
                /* löytyykö taulukon loppupäästä pienempää alkiota? */
                if (taul[j] < taul[pienin]) {
                    pienin=j;
                }
                selectionCount++;
            }
            if (pienin != i) {
                /* jos löytyi suoritetaan alkioiden vaihto */
                apu=taul[pienin];
                taul[pienin]=taul[i];
                taul[i]=apu;
            }
            selectionCount++;
        }
    }

    public static void mergeSort() {
        int[] a= new int[MAX];
        int i;
        Random r = new Random(); //luodaan satunnaislukugeneraattori
        for (i=0;i<MAX;i++) {
            a[i] = r.nextInt(maxNumValue); //generoidaan luvut
        }

        mergeSort(a, 0, MAX-1);
    }

    private static int[] tau = new int[MAX]; // aputaulukko (ei varata tätä pinosta!)

    //oletus: osataulukot t[p..q] ja t[q+1...r] ovat järjestyksess„
    public static void merge(int t[], int p, int q, int r) {
        //i osoittaa 1. osataulukkoa, j osoittaa 2. osataulukkoa
        // k osoittaa aputaulukkoa, johon yhdiste kirjoitetaan.
        int i=p, j=q+1, k=0;
        while(i<q+1 && j<r+1) {
            if (t[i]<t[j]) {
                tau[k++]=t[i++];
            }
            else {
                tau[k++]=t[j++];
            }
            mergeCount++;
        }
        //toinen osataulukko käsitelty, siirretään toisen käsittelemättömät
        while (i<q+1) {
            tau[k++] = t[i++];
            mergeCount++;
        }
        while (j<r+1) {
            tau[k++] = t[j++];
            mergeCount++;
        }
        //siirretään yhdiste alkuperäiseen taulukkoon
        for (i=0;i<k;i++) {
            t[p+i]=tau[i];
            mergeCount++;
        }
    }

    public static void mergeSort(int t[],  int alku,  int loppu) {
        int ositus;
        long la, ll, lt;
        if (alku<loppu) { //onko väh. 2 alkiota, että voidaan suorittaa ositus

            la=alku; ll=loppu;
            lt=(la+ll)/2;
            ositus=(int)lt;
            mergeSort(t, alku, ositus);//lajitellaan taulukon alkupää
            mergeSort(t, ositus+1, loppu);//lajitellaan taulukon loppupää
            merge(t, alku, ositus, loppu);//yhdistetään lajitellut osataulukot
        }
    }



    public static void quickSortLoop() {
        int taulukko[] = new int[MAX];
        Random r = new Random();

        for (int i = 0; i < MAX; i++) {
            taulukko[i] = r.nextInt(maxNumValue);
        }
        qs(taulukko, MAX);
    }

    public static void quickSort(int table[], int lo0, int hi0) {
        int lo = lo0;
        int hi = hi0;
        int mid, swap;

        mid = table[ (lo0 + hi0) / 2];
        while (lo <= hi) {
            while (table[lo] < mid) {
                ++lo;
                quickCount++;
            }

            while (table[hi] > mid) {
                --hi;
                quickCount++;
            }

            if (lo <= hi) {
                swap = table[lo];
                table[lo] = table[hi];
                ++lo;
                table[hi] = swap;
                --hi;
            }
            quickCount++;
        }

        if (lo0 < hi) {
            quickSort(table, lo0, hi);
        }
        if (lo < hi0) {
            quickSort(table, lo, hi0);
        }
    }

    public static void qs(int table[], int values) {
        quickSort(table, 0, values - 1);
    }
}


