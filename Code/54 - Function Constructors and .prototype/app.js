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

var john = new Person('John', 'Doe'); 
console.log(john);

var jane = new Person('Jane', 'Doe'); 
console.log(jane);

Person.prototype.getFormalFullName = function() {
    return [this.lastname, this.firstname].join(', ');
}

console.log(john.getFormalFullName());