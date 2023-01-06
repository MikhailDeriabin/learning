package Builder;

//Abstract builder
public interface AnimalBuilder {
    AnimalBuilder withName(String name);
    AnimalBuilder withColor(String color);
    AnimalBuilder withOwner(String owner);
    AnimalBuilder withAge(int age);

    Animal build();
}
