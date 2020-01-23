// oops i is always 3
function buildFunctions() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            function() {
                console.log(i);
            }
        )
    }

    return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

// the instructor overcomplicates the solutions in the video, but i guess it's just to illustrate closure; but the following are better...

// use an IFFE
function buildFunctions2() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            function() {
                console.log(i);
            }()
        )
    }

    return arr;
}

var fs2 = buildFunctions2();

fs2[0];
fs2[1];
fs2[2];


// use let
function buildFunctions3() {
    var arr = [];

    for (let i = 0; i < 3; i++) {
        arr.push(
            function() {
                console.log(i);
            }
        )
    }

    return arr;
}

var fs3 = buildFunctions3();

fs3[0]();
fs3[1]();
fs3[2]();