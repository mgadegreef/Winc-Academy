// Old style: loops
// While loop
let colors = ['yellow', 'blue', 'red', 'orange'];

let i = 0;
while ( i < colors.length) {
    console.log(`While loop: Color ${i} is ${colors[i]}.`)
    i++
}

// For loop
for (i=0; i < colors.length; i++) {
    console.log(`For loop: Color ${i} is ${colors[i]}.`)
}

// New style: array methods
colors.forEach (element => console.log("Array Method : Color " + element));


/*
Questions:
1) How many lines does my for loop and my while loop take?
While loop: 3 lines of code
For loop: 2 lines of code

2) How many lines does my forEach method take?
1 line of code

3) What other advantages do using an array method have over a for or a while loop? For example, which method do you find easier to read? Why?
Array method is easier to read becuase the syntax is very logical.

4) Can you use an array method on an object? The answer is no. Suppose you have an object with 45 properties. Try to find out (use Google) how you can still console.log those 45 properties with a loop: Looping through the properties of an object. Try this piece of code and use an object with 5 properties for it. Are you iterating now?
*/

let person = {
    naam: 'Martin',
    leeftijd: 38,
    geslacht: 'man',
    haarkleur: 'bruin',
    lengte: 1.84
};
// person.forEach (element => console.log(element));        Werkt inderdaad niet: TypeError: person.forEach is not a function
// forEach is geen functie van een object

//OPLOSSINGEN
// Dit leest alle properties en waarden in een object met een for loop en logt deze. 
for (const element in person) {
    console.log(`${element}: ${person[element]}`);
}
//Documentatie vertelt dat hier wel eens iets fout mee kan gaan.


/* Even verder gezocht en gepuzzeld: "Object.keys". Dit leest alle properties van een object en zet ze in een array. 
Vervolgens kun je met een array method ".forEach" door de array itereren, de property loggen en diezelfde property gebruiken om de bijbehorende waarde uit het object te trekken.
*/

const personPropertyArray = Object.keys(person); // 
console.log(personPropertyArray); // check wat de output is

personPropertyArray.forEach (property => console.log(`${property}: ${person[property]}`));