
interface IAnimal {
    name: string;
    talk: () => string;
}

class DogDuck {
    name: string;    
    constructor() {
        this.name = 'Dog';
    }
    talk(): string {
        return 'Bark';
    }
}

function MakeAnimalTalk(animal: IAnimal) {
    console.log(animal.talk());
}

MakeAnimalTalk(new DogDuck()); // prints Bark
MakeAnimalTalk({
    name: 'Frog',
    talk: () => 'Ribbit'
}); // prints Ribbit;
