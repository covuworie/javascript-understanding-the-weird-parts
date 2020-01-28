Array.prototype.myCustomFeature = 'cool!';

var arr = ['John', 'Jane', 'Jim'];

// never do this due to the fact that properties may be added to the Array prototype as above
for (var prop in arr) {
    console.log([prop, arr[prop]].join(': '));
}

// do this instead
for (var i = 0; i < arr.length; i++) {
    console.log([i, arr[i]].join(': '));
}