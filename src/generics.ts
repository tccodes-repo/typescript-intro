
export class Queue<T>  {
    data: T[];

    constructor() {
        this.data = [];
    }

    push(item: T) {
        this.data.push(item);
    }

    pop(): T | undefined {
        return this.data.shift();
    }
}


const numberQueue = new Queue<number>();
const stringQueue = new Queue<string>();

//numberQueue.push('one'); // not allowed
numberQueue.push(1);

//const s: string = numberQueue.pop(); // not allowed

//stringQueue.push({ name: 'John' }); // also not allowed
stringQueue.push('one');

