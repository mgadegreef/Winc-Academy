/*  No arguments
const paintWalls = function (){
    console.log('The wall has been painted red')
};

paintWalls();           // The wall has been painted red.
*/

/*  Single argument
const paintWalls = function (color){
    console.log('The wall has been painted ' + color +  '.')
};

paintWalls('green');    // The wall has been painted green.
paintWalls('gray');     // The wall has been painted gray.
paintWalls();           // The wall has been painted undefined.
*/

const paintWalls = function (orientation, color){
    console.log('The ' + orientation + ' wall has been painted ' + color +  '.')
};

paintWalls('north', 'green');    // The north wall has been painted green.
paintWalls('south-east', 'vermilion');    // The south-east wall has been painted vermilion.

//   When calling the function with arguments in other order. The green wall has been painted north.

// When only switching arguments in the function definition: The green wall has been painted north.

//  Switching arguments in thefunction definition AND also when calling the order, everything is printed correctly. The north wall has been painted green.
