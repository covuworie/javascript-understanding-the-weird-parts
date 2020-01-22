// function statement
function greet(name) {
    console.log('Hello ' + name);
}
greet('John');

// function expression
var greetFunc = function(name) {
    console.log('Hello ' + name);
};
greetFunc('John');

// using an Immediately Invoked Function Expression (IIFE)
// notice the parentheses around the function to trick the syntax parser that this is a function expression rather than a function statement! 
var firstname = 'John';

(function(name) {
    var greeting = 'Hello ';
    console.log(greeting + name);
}(firstname));


// Also an IIFE
var greeting = function(name) {
    return 'Hello ' + name;
}('John');

console.log(greeting);