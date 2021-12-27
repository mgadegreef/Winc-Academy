// Part 1:

let button = document.getElementById('mybutton');

button.addEventListener('click', function () { alert('Button clicked') });


// Part 2:

let clickButton = function () {
    let myBody = document.getElementById('body');
    myBody.classList.add('red-background');
    console.log(myBody.classList);
};

let backgroundButton = document.getElementById('mybuttonBackground');
backgroundButton.addEventListener('click', function (e) { clickButton() });


// Part 3:

let toggleColor = function () {
    let myBody = document.getElementById('body');
    myBody.classList.toggle('red-background');
    console.log(myBody.classList);
};

let toggleButton = document.getElementById('mybuttonToggleBackground');
toggleButton.addEventListener('click', function (e) { toggleColor() });
