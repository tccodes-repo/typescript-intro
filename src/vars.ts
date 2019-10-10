// source: http://www.typescriptlang.org/docs/handbook/variable-declarations.html

let hello = "Hello!";

function f(input: boolean) {
    let a = 100;

    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }

    // Error: 'b' doesn't exist here
    return b;
}

a++; // illegal to use 'a' before it's declared;
let a;

const numLivesForCat = 9;