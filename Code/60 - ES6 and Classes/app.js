class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname,
        this.lastname = lastname
    }

    greet() {
        return 'Hi ' + this.firstname;
    }
}

// Person is an object
console.log(Person); 
console.log(Person.name);
console.log(Person.prototype);

// Create new objects
var john = new Person('John', 'Doe');
console.log(john);
console.log(john.greet());

// Extends an object by setting the prototype (__proto__)
class InformalPerson extends Person {
    constructor(firstname, lastname) {
        super(firstname, lastname); // calls the prototype constructor
    }

    // hide / override the function
    greet() {
        return 'Yo ' + this.firstname;
    }
}

var jane = new InformalPerson('Jane', 'Doe');
console.log(jane);
console.log(jane.greet());