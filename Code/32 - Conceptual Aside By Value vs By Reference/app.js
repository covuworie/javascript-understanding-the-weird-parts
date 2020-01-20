// by value (all primitives)
var a = 3;
var b;

b = a;
a = 2; // mutate

console.log(a);
console.log(b);

// by reference (all objects including functions)
var c = { greeting: 'hi'};
var d;

d = c;
c.greeting = 'hello'; // mutate

console.log(c);
console.log(d);

// by reference (all objects even as parameters)
function changeGreeting(obj) {
    obj.greeting = 'Hola'; // mutate
}

changeGreeting(d);

console.log(c);
console.log(d);

// equals operator sets up new memory space (new address)
c = { greeting: 'howdy' };

console.log(c);
console.log(d);