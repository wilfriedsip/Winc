//Part 1

var myButton = document.getElementById("mybutton");

myButton.addEventListener("click", function () {
    alert("Button Clicked");
});

//Part 2
const blueBackground = function () {
    const bodyElement = document.body;
    bodyElement.classList.add("red-background");
};
const changeColorButton = function () {
    const changeColorButton = document.getElementById("buttonBackground");
    changeColorButton.addEventListener("click", function () {
        blueBackground();
    });
};

changeColorButton();
