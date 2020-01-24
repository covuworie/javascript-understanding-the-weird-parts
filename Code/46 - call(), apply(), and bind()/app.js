var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {
        var fullname = [this.firstname, this.lastname].join(' ');
        return fullname;
    }
}

var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName()); // exception as the this variable points at the global object
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('------------------------');
}

//logName();

// The bind() method makes a copy of the logName function and binds person to the this variable
var logPersonName = logName.bind(person); 
logPersonName('en');

// The call() method invokes the logName function using person as the this variable
logName.call(person, 'en', 'es');


// The apply() method also invokes the logName function using person as the this variable except it expects an argument array
logName.apply(person, ['en', 'es']);


// It's also possible to do this on the fly using a function expression!
(function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName()); // exception as the this variable points at the global object
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('------------------------');
}).apply(person, ['es', 'en']);


// When would you use this?

// function borrowing
var person2 = {
    firstname: 'John',
    lastname: 'Doe'
    // note this person object does not have a getFullName function
}

console.log(person.getFullName.apply(person2));

// function currying
function multiply(a, b) {
    return a * b;
}

var multuplyByTwo = multiply.bind(this, 2); // makes a copy of the function

// this is essentially the same as creating the following function
// seems like default arguments solves this issue better
// function multiplyByTwo(b) {
//     var a = 2;
//     return a * b;
// }

console.log(multuplyByTwo(4));

var multuplyByThree = multiply.bind(this, 3);
console.log(multuplyByThree(4));