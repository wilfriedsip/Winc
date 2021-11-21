//Part 1

var myButton = document.getElementById("mybutton");

myButton.addEventListener("click", function () {
    alert("Button Clicked");
});


//Part 2
/*
const changeBlueBackground = function () {
    const bodyBackground = document.body;
    bodyBackground.classList.add("red-background");
};

const changeEventBlue = function () {
    const colorButton = document.getElementById("buttonBackground");
    colorButton.addEventListener("click", function () {
        changeBlueBackground();
    })
}
changeEventBlue();
*/
// Part 3

const changeBlueBackgroundToggle = function () {
    const bodyBackground = document.body;
    bodyBackground.classList.toggle("red-background");
};

const changeEventBlue = function () {
    const colorButton = document.getElementById("buttonBackground");
    colorButton.addEventListener("click", function () {
        changeBlueBackgroundToggle();
    })
}
changeEventBlue();
