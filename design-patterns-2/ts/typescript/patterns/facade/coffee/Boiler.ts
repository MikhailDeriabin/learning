export default class Boiler {
    boilWater(){
        console.log('Warming water...');
        console.log('Now water is boiled');

        return new BoiledWater();
    }
}

export class BoiledWater { }