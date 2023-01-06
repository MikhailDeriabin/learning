package teht10;

import teht10.person.Employee;
import teht10.person.Person;
import teht10.person.boss.Boss;
import teht10.person.boss.CEOBoss;
import teht10.person.boss.ImmediateBoss;
import teht10.person.boss.UnitBoss;

public class Main {
    public static void main(String[] args) {
        Boss boss = createBossChain();

        //+1.8%
        Person person1 = new Employee("Leo", 2500);
        Application application1 = new Application(person1, 37.5f);
        boss.riseSalary(application1);
        System.out.println(person1 + ": " + person1.getSalary());
        System.out.println(application1);

        System.out.println("\n----------------------------------------\n");

        //+4%
        Person person2 = new Employee("George", 2000);
        Application application2 = new Application(person2, 80);
        boss.riseSalary(application2);
        System.out.println(person2 + ": " + person2.getSalary());
        System.out.println(application2);

        System.out.println("\n----------------------------------------\n");
        //+10%
        Person person3 = new Employee("Clark", 1500);
        Application application3 = new Application(person3, 150);
        boss.riseSalary(application3);
        System.out.println(person3 + ": " + person3.getSalary());
        System.out.println(application3);
    }

    public static Boss createBossChain(){
        CEOBoss ceoBoss = new CEOBoss("John", 5000, null);
        UnitBoss unitBoss = new UnitBoss("Steven", 4000, ceoBoss);
        return new ImmediateBoss("Jack", 3000, unitBoss);
    }
}
