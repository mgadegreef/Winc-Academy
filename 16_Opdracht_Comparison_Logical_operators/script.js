const age = 25;
const isFemale = true;
const driverStatus = "bob";

if (isFemale == true){
    if (age >= 18){
        console.log("You are Female and 18 or above. Come on in and enjoy");
    } else {
        console.log("You are Female but to young. You cannot enter");
    }}
else{
    console.log("You are not Female. This is Girls night, get out!");
}

if (driverStatus == "bob"){
    console.log("You are allowed to drive");
} else {
    console.log("You are not allowed to drive");
}


// Bovenstaande is oefening 15, hieronder staat oefening 16


if (age >= 18 && age <= 25){
    console.log("You get 50% off!");
} else {
    console.log("You have to pay 100% of the beerprice.");
}

const firstName = "Piet";

if (firstName == "Bram" || firstName == "Sarah"){
    console.log("You get a free beer!");
} else {
    console.log("Your name isn't Bram or Sarah, so you won't get a free beer!");
}

const totalAmount = 99;

if (totalAmount >= 100){
    console.log("Your bill is (more than) 100€. Your gift is: 1 bottle of champagne for free!");
} else if (totalAmount >= 50){
    console.log("Your bill is (more than) 50€. Your gift is: 1 portion of Nachos for free!");
} else if (totalAmount >= 25){
    console.log("Your bill is (more than) 25€. Your gift is: 1 portion (veggie) bitterballen for free!");
} else {
    console.log("Your bill is less than 25€, so your won't recieve a gift. Sorry!");
}