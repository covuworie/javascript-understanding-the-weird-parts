greet();

// function statement:
// hoisted into memory at creation phase of execution context
function greet() {
    console.log('hi');
}


// exception is created as variable is undefined during the creation phase
//anonymousGreet();

// function expression:
// only the variable is hoisted at creation phase of execution context and set to undefined
var anonymousGreet = function() {
    console.log('hi');
}

anonymousGreet();


function log(a) {
    a();
}

// function expression:
// function passed as parameter to another function
log(function() {
    console.log('hi');
});