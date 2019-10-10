// source: http://www.typescriptlang.org/docs/handbook/variable-declarations.html

var a = 10;

function f() {
    var message = "Hello, world!";

    return message;
}

function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    }
}

var g = f();
g(); // returns '11'

