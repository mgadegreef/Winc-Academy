// Exercise: Hey Kiddo

const checkAge = function (age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

const openingLine = function (age) {
    const ageResult = checkAge(age);
    if (ageResult) {
        console.log("Hello there");
    } else {
        console.log("Hey kiddo...")
    }
};

openingLine(19);


// Exercise: VAT calculations Exercise 1:

//function to round a number to 2 decemals. (carefully taken from stackoverflow :) )
const rounded = function (num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

const calucateVAT = function (basePrice, percVAT) {
    if (percVAT === 21) {
        return basePrice * 0.21;
    } else if (percVAT === 9) {
        return basePrice * 0.09;
    } else if ( percVAT === 0) {
        return 0;
    } else {
        console.log("wrong VAT-percentage");
    }
}

const calculateTotal = function ( basePrice, percVAT) {
    const total = basePrice + (calucateVAT(basePrice, percVAT));
    return total;
}

const totalPrice = calculateTotal(123, 9)
console.log("the price with VAT is: € " + rounded(totalPrice));



// Exercise: VAT calculations Exercise 2:

const calculateVATamount = function (total, VATpercentage) {
    let VATamount;
    if (VATpercentage === 21) {
        VATamount = total - (total / 1.21);
    } else if (VATpercentage === 9) {
        VATamount = total - (total / 1.09);
    } else if (VATpercentage === 0) {
        VATamount = 0;
    } else {
        console.log("wrong VAT-percentage");
    }
    return VATamount;
}

let priceAndTax = [0,0];        // index [0] = baseprice  index [1] = VAT amount

const calculateBaseprice = function (total, VATpercentage) {
    priceAndTax[1] = calculateVATamount(total, VATpercentage);
    priceAndTax[0] = total - priceAndTax[1];
}

calculateBaseprice(95, 1);
console.log("the baseprice is: € " + rounded(priceAndTax[0]));
console.log("the VATamount is: € " + rounded(priceAndTax[1]));