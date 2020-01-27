var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return [this.firstname, this.lastname].join(' ');
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;

// look over all members of the john object (remember these are name value pairs!)
for (var prop in john) {
    if (john.hasOwnProperty(prop)) {  // do not get properties on the prototype
        console.log([prop, john[prop]].join(': '));
    }
}

var jane = {
    address: '111 Main St.',
    getFormalFullName: function() {
        return [this.lastname, this.firstname].join(', ');
    }
}

var jim = {
    getFirstName: function() {
        return this.firstname;
    }
}

// takes all the properties and methods of the jane and jim objects and physically adds them to the john object (note the difference here is that these are not using the prototype scope chain)
_.extend(john, jane, jim);

console.log(john);