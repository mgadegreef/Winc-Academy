// Random nummer pakken
const getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max + 1) + min);
}

// Invoeren naam
let person = "";
const getPerson = function () {
    person = prompt("Welkom! Wat is je naam?", "");
    if (person != null) {
        alert("Hey " + person + ". Leuk dat je dit spel wilt spelen!");
    }
}

// Invoeren getal
// kijk of de input geldig is
let numberInput = null;
let promptNumber = ("Voer een getal in tussen 0 en 25 om te beginnen met raden!");

const getNumberInput = function () {
    numberInput = prompt(promptNumber, "");
    promptNumber = ("Voer een getal in tussen 0 en 25 om verder te raden!")
    while (numberInput < 0 || numberInput > 25) {
        alert("Deze input is niet geldig.");
        numberInput = prompt("Voer een getal in tussen 0 en 25 om nogmaals te raden!", "");
    }
    return numberInput;
}

// vergelijken getal
let checkNumber = function (inputnumber, randomnumber) {
    if (inputnumber != randomnumber) {
        return false;
    } else {
        return true;
    }
}

// --------------------------------------------------------
// Start Game
const startGame = function () {
    const randomNumber = getRandomNumber(0, 25);
    console.log(randomNumber);

    getPerson();
    console.log(person);

    getNumberInput();
    console.log(numberInput);

    while (checkNumber(numberInput, randomNumber) == false) {
        alert("Je hebt verkeerd geraden. Probeer het nog een keer.");
        getNumberInput();
        console.log(numberInput);
    }

    alert("Gefeliciteerd. Je hebt het geraden. Je hebt gewonnen!");
    alert("Tot ziens " + person + ". Leuk dat je dit spel gespeeld hebt!");
}