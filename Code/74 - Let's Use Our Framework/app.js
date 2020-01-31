// gets a new object (the architecture allows us not to have to use the 'new' keyword)
var g = G$('John', 'Doe');

// use our chainable methods
g.greet().setLang('es').greet(true).log();

// let's use our object on the click of the login button
$('#login').click(function() {

    // create a new 'Greetr' object (let's pretend we know the name from the login)
    var loginGrtr = G$('John', 'Doe');

    // hide the login on screen
    $('#logindiv').hide();

    // fire off a HTML greeting, passing the '#greeting' as the selector and the chosen language and also log the welcome
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
})