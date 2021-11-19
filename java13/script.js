// Maak deze oplossing af.
// Hij is niet perfect gemaakt, krijg hem niet uit zijn loop

let numberToBeGuessed = 5;
let name;
let guess;
const min = 0;
const max = 25;

while (name === undefined || name === null || name.length === 0) {
    name = prompt("What is your name ? ");
}

alert("Welkom bij Guess the Number " + name + "!!");


// kies hier een random getal
//while (guess === undefined || guess === null || guess.length === 0) {
guess = prompt("Choose a number between 0 and 25");
//}

// numberToBeGuessed = ;
//alert("Pssst het nummer is: " + numberToBeGuessed);

// onder welke voorwaarde moeten we blijven loopen?
while (guess) {
    //guess = ..vraag om het nummer..
    alert("Je gok is: " + guess);
    if (guess > 5) {
        alert("Je gok was te hoog");
    } else if (guess < 5) {
        alert("Je gok was te laag");

    } else {
        alert("Goed geraden, het nummer was inderdaad " + guess);
    }
}

alert("We sluiten de game af. Bedankt voor het spelen, tot de volgende keer!");