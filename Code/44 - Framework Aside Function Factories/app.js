function makeGreeting(language) {
    return function(firstname, lastname) {
        if (language === 'en') {
            salutation = 'Hello ';
        }

        if (language === 'es') {
            salutation = 'Hola ';
        }

        console.log(salutation + [firstname, lastname].join(' '));
    }
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');