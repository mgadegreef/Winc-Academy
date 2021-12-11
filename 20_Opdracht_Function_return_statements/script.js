
// Checking if a number is big
const numberCheck = function (numberInput){
    if (numberInput > 100){
        return true;
    } else {
        return false;
    }
}

const result = numberCheck(88);
console.log(result);



// Bouncer at a club
let response;
let result2;
const bouncer = function (maxVisitors, currentVisitorNumber, age){
    if ( age < 18 ) {
        response =  "This is a club for adults";
    } else if ( maxVisitors >= currentVisitorNumber ){
        response = "Come in!";
    } else {
        response = "It's too busy noq, come back later.";
    }
    return response;
}

result2 = bouncer(100, 99, 18);
console.log(result2);

result2 = bouncer(100, 99, 17);
console.log(result2);

result2 = bouncer(100, 101, 18);
console.log(result2);



// Calculating the average
const getAverage = function (number1, number2, number3, number4, number5) {
    const sum = number1 + number2 + number3 + number4 + number5;
    const average = Math.round(sum / 5);
    return average;
}

const result3 = getAverage(6, 45, 32, 578, 3);
console.log("The average is rounded to: " + result3);
