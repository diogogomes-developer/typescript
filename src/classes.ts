class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    move(distance: number): void {
        console.log(`${this.name} moved ${distance}m.`);
    }
}

class Dog extends Animal {
    bark(): void {
        console.log('Woof! Woof!');
    }
}

let dog = new Dog('Rex');

dog.bark();
dog.move(10);
