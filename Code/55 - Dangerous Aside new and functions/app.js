function Person(firstname, lastname) {
    console.log(this);
    this.firstname = firstname,
    this.lastname = lastname
    console.log('This function is invoked');
}

// It is better to put methods on the prototype than in the function constructor in order to save memory. Every object shares the same prototype. 
Person.prototype.getFullName = function() {
    return [this.firstname, this.lastname].join(' ');
}

// oops the new operator has been forgotten
// ES6 doesn't have this issue
var john = Person('John', 'Doe'); 
console.log(john);

var jane = Person('Jane', 'Doe'); 
console.log(jane);

Person.prototype.getFormalFullName = function() {
    return [this.lastname, this.firstname].join(', ');
}

console.log(john.getFormalFullName());