//om het makkelijker te maken, heb ik een kleine functie gemaakt om een getal te vermenigvuldigen met zichzelf
const square = function(number) {
    return number * number;
};




// function declaration
function calculate1 (number1, number2) {
    const calcPart1 = square(number1) + square(number2);
    const result = square(calcPart1);
    return result;
}
console.log(calculate1(3,6));



// function expression
const calculate2 = function(number1, number2) {
    const calcPart1 = square(number1) + square(number2);
    const result = square(calcPart1);
    return result;
};
console.log(calculate2(3,6));



// arrow function
const calculate3 = (number1, number2) => {
    const calcPart1 = square(number1) + square(number2);
    const result = square(calcPart1);
    return result;
};
console.log(calculate3(3,6));
