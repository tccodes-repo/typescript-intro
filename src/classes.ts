
interface Animal {
    name: string;
    talk: () => string;
}

class Dog implements Animal {
    name: string;    
    constructor() {
        this.name = 'Dog';
    }
    talk(): string {
        return 'Bark';
    }
}

class Cat implements Animal {
    name: string;
    constructor() {
        this.name = 'Cat';
    }
    talk(): string {
        return 'Meow';
    }
}

new Dog().talk(); // prints Bark
new Cat().talk(); // prints Meow
