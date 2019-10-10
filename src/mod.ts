import { Queue } from './generics';

export interface IPerson {
    firstName: string;
    lastName: string;
    age: number;
}

export class PersonQueue 
    extends Queue<IPerson> {
    // inherited from Queue
}