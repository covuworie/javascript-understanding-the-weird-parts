
// this points at the global object
console.log(this);

// this points at the global object
function a() {
    console.log(this);
    this.newvariable = 'hello';
}

// this points at the global object
var b = function() {
    console.log(this);
}

a();

console.log(newvariable);

b();

var c = {
    name: 'The c object',
    // this points at the object on which the function was invoked
    log: function() {
        var self = this;

        self.name = 'Updated c object';
        console.log(self);

        // use self here to prevent this pointing at the global object
        // self is not found inside this function so JS looks up the scope chain
        var setname = function(newname) {
            self.name = newname;
        }
        setname('Updated again! The c object');
        console.log(self);
    }
}

c.log();