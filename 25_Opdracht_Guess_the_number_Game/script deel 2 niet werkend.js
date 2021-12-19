/* 
Deze code heb ik nog niet werkend gekregen.
- Soms pakt hij een verkeerd random nummer, buiten de min en max.
- Soms ligt input tussen de min en max, maar triggert while loop waar gechecked wordt of de invoer juist is.
*/

let minInput;
let maxInput;
//Functies

// Random nummer pakken

const getRandomNumber = function (min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

// Invoeren naam
let person = "";
const getPerson = function () {
    person = prompt("Welkom! Wat is je naam?", "");
    if (person != null) {
        alert("Hey " + person + ". Leuk dat je dit spel wilt spelen!");
    }
}

// Invoeren getal en kijken of de input geldig is
let numberInput = null;
//let promptNumber = ("Voer een getal in tussen 0 en 25 om te beginnen met raden!");

let promptNumber;


let getNumberInput = function () {

    numberInput = prompt(promptNumber, "");
    console.log(minInput + " voor while");
    console.log(maxInput + " voor while");

    while (numberInput < minInput || numberInput > maxInput) {
        alert("Deze input is niet geldig.");
        console.log(numberInput + " nalezen slechte input");
        console.log(minInput + " in while");
        console.log(maxInput + " in while");


        promptNumber = ("Voer een getal in tussen " + minInput + " en " + maxInput + " om nogmaals te raden!!")
        numberInput = prompt(promptNumber, "");
    }

    promptNumber = ("Voer een getal in tussen " + minInput + " en " + maxInput + " om verder te raden!")
    console.log(numberInput + " nalezen goede input");

    return numberInput;
}

// vergelijken getal
let promptWinLose = ("Helaas, je hebt geen pogingen meer over. je hebt verloren!");
let checkNumber = function (inputnumber, randomnumber) {
    if (inputnumber != randomnumber) {
        return false;
    } else {
        promptWinLose = ("Gefeliciteerd. Je hebt het geraden. Je hebt gewonnen!")
        return true;
    }
}


// --------------------------------------------------------
// Start Game
const startGame = function () {

    getPerson();
    console.log(person);
    /*let*/ minInput = prompt(person + ", we gaan een getal raden tussen getal A (laag) en getal B (hoog). Voer het laagste getal in.", "");
    console.log(minInput);
    /*let*/ maxInput = prompt(person + ", Voer het hoogste getal in.", "");
    console.log(maxInput);

    const randomNumber = getRandomNumber(minInput, maxInput);
    console.log(randomNumber);
    console.log(minInput + "Na get random nummer");
    console.log(maxInput + "Na get random nummer");


    promptNumber = ("Voer een getal in tussen " + minInput + " en " + maxInput + " om te beginnen met raden!");

    getNumberInput();
    console.log(numberInput + " 1e functie get nummer");

    for (i = 4; checkNumber(numberInput, randomNumber) == false && i > 0; i--) {
        promptWinLose = ("Je hebt verkeerd geraden. Je hebt nog " + i + " pogingen over.")
        alert(promptWinLose);
        promptWinLose = ("Helaas, je hebt geen pogingen meer over. je hebt verloren!")
        getNumberInput();
        console.log(numberInput + " na 1e functie get nummer");
    }

    alert(promptWinLose);
    alert("Tot ziens " + person + ". Leuk dat je dit spel gespeeld hebt!");

    /*
    Ik had een probleem met de variabele: 'promptNumber', die bevatte nog een waarde bij het opnieuw spelen van het spel zonder de pagina te refreshen. Deze code herlaadt de pagina.
    Beter zou zijn, om het script opnieuw te laten laden, maar daar heb ik nog geen oplossing voor.
    */
    location.reload();
}


