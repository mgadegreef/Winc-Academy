// Random nummer pakken
const getRandomNumber = function (min, max) {
    return Math.floor( Math.random () * ( max - min + 1 ) + min );
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
let promptNumber = ("Voer een getal in tussen 0 en 25 om te beginnen met raden!");

const getNumberInput = function () {
    numberInput = prompt(promptNumber, "");
    promptNumber = ("Voer een getal in tussen 0 en 25 om verder te raden!");

    while (numberInput < 0 || numberInput > 25) {
        alert("Deze input is niet geldig.");
        numberInput = prompt("Voer een getal in tussen 0 en 25 om nogmaals te raden!", "");
    }
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

    const randomNumber = getRandomNumber(0, 25);
    console.log(randomNumber);


    getNumberInput();
    console.log(numberInput);

    for (i = 4; checkNumber(numberInput, randomNumber) == false && i > 0; i--) {
        promptWinLose = ("Je hebt verkeerd geraden. Je hebt nog " + i + " pogingen over.")
        alert(promptWinLose);
        promptWinLose = ("Helaas, je hebt geen pogingen meer over. je hebt verloren!")
        getNumberInput();
        console.log(numberInput);
    }

    alert(promptWinLose);
    alert("Tot ziens " + person + ". Leuk dat je dit spel gespeeld hebt!");

    /*
    Ik had een probleem met de variabele: 'promptNumber', die bevatte nog een waarde bij het opnieuw spelen van het spel zonder de pagina te refreshen. Deze code herlaadt de pagina.
    Beter zou zijn, om het script opnieuw te laten laden, maar daar heb ik nog geen oplossing voor.
    */
    location.reload();
}