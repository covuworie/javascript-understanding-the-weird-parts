// polyfill
// add Object.create support for older browsers which do not support this. Unlikely to be an issue now in 2020. 
if (!Object.create) {
    Object.create = function (o) {
        if (arguments.length > 1) {
            throw new Error('Object.create implementation only accepts the first parameter.')
        }
        function F() {}
        F.prototype = o;
        return new F();
    }
}

// form an object that forms the basis of creation of all other objects
var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname;
    }
}

// creates an empty object with its prototype pointing at the object passed in as a parameter
var john = Object.create(person);
console.log(john);
console.log(john.greet());

// hide / override the properties and methods
john.firstname = 'John';
john.lastname = 'Doe';
john.greet = function() {
    return 'Hola ' + this.firstname;
}
console.log(john);
console.log(john.greet());

