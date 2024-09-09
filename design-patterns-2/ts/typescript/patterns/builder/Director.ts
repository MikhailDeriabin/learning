import IBuilder from "./IBuilder";

/**
 * Builder user.
 *
 * Notice that u can use builder directly inseide your client code 
 * or use separate class, that builds a product for the client code
 */
export class Director{
    private builder: IBuilder;

    setBuilder(builder: IBuilder){
        this.builder = builder;
    }

    buildMinProduct(){
        this.builder.setPartA();

        return this.builder.getProduct();
    }

    buildFullProduct(){
        this.builder.setPartA();
        this.builder.setPartB();
        this.builder.setPartC();

        return this.builder.getProduct();
    }
}

