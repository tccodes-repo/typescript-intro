// Basics
let decimal: number = 6;
let color: string = "blue";

// Arrays
let list: number[] = [1,2,3];

// Tuple
let t: [string, number] = ["hello", 10];

// Enum
enum Color { Red, Green, Blue };
let c: Color = Color.Green;


// Any
let whatever: any = 12;
// void
function doesNothing(): void {}
// null and undefined
let u: undefined = undefined;
let n: null = null;
// never 
function error(): never {
    throw new Error("error");
}
let o: Object = { name: "John" };