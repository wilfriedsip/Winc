//Part 1

var myButton = document.getElementById("mybutton");

myButton.addEventListener("click", function () {
    alert("Button Clicked");
});

//Part 2


var buttonBackground = document.getElementById("buttonBackground");

buttonBackground.addEventListener("click", function () {
    document.body.style.backgroundColor = "red";
});
