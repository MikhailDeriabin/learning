export default class Grinder {
    grindBeans() {
        console.log('Grinding beans...');
        console.log('Now beans are grinded');
        return new GrindedBeans();
    }
}

export class GrindedBeans { }