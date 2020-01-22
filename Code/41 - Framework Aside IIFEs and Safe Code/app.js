// IIFE
(function(global, name) {
    var greeting = 'Hello ';
    //global.greeting = 'Hello '; // deliberately overwrite in the global object
    console.log(greeting + name);
}(window, 'John'));

// What is stated in the video is also true for function statements and not only IIFEs. So what the instructor is saying is not completely true. The main difference between IIFEs and statement functions is that IIFE prevents the function polluting the global namespace (and memory considerations) if it only needs to be invoked once. The reasons are explained well in this stackoverflow post: https://stackoverflow.com/questions/37021349/benefit-of-immediately-invoked-function-expression-iife-over-a-normal-function. Good comments are made at the bottom about the fact that you can also name the IFFE if you want to make it's intention clearer.
function greet(name) {
    var greeting = 'Hello ';
    console.log(greeting + name);
};

greet('John');

console.log(greeting);