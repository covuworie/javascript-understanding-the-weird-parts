// function constructor
function Person(firstname, lastname) {
    console.log(this);
    this.firstname = firstname,
    this.lastname = lastname
    console.log('This function is invoked');

    // javascript engine returns the new empty object automatically unless you do something silly like this:
    // return { greeting: 'i got in the way'};
}

// creates an empty object, invokes the function and points the this variable to the object
var john = new Person('John', 'Doe'); 
console.log(john);

var jane = new Person('Jane', 'Doe'); 
console.log(jane);