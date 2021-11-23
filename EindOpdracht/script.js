const menu = document.querySelector(".menu-links");
const menuItems = document.querySelectorAll(".closeItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
    function (menuItem) {
        menuItem.addEventListener("click", toggleMenu);

    }
)


//Change background to Purple
const changeBackgroundPurple = function () {
    const bodyBackground = document.body;
    bodyBackground.classList.remove("redBackground");
    bodyBackground.classList.remove("yellowBackground");
    bodyBackground.classList.remove("greenBackground");
    bodyBackground.classList.remove("pinkBackground");
    bodyBackground.classList.add("purpleBackground");

};

const changePurple = function () {
    const paragraphPurple = document.getElementById("colorpurple");
    paragraphPurple.addEventListener("click", function () {
        changeBackgroundPurple();
    })
};

changePurple();

//Change background to Red
const changeBackgroundRed = function () {
    const bodyBackground = document.body;
    bodyBackground.classList.remove("purpleBackground");
    bodyBackground.classList.remove("yellowBackground");
    bodyBackground.classList.remove("greenBackground");
    bodyBackground.classList.remove("pinkBackground");
    bodyBackground.classList.add("redBackground");

};

const changeRed = function () {
    const paragraphRed = document.getElementById("colorred");
    paragraphRed.addEventListener("click", function () {
        changeBackgroundRed();
    })
};
changeRed();


//Change background to Yellow
const changeBackgroundYellow = function () {
    const bodyBackground = document.body;
    bodyBackground.classList.remove("redBackground");
    bodyBackground.classList.remove("purpleBackground");
    bodyBackground.classList.remove("greenBackground");
    bodyBackground.classList.remove("pinkBackground");
    bodyBackground.classList.add("yellowBackground");
};

const changeYellow = function () {
    const paragraphYellow = document.getElementById("coloryellow");
    paragraphYellow.addEventListener("click", function () {
        changeBackgroundYellow();
    })
};

changeYellow();

//Change background to Green
const changeBackgroundGreen = function () {
    const bodyBackground = document.body;
    bodyBackground.classList.remove("redBackground");
    bodyBackground.classList.remove("yellowBackground");
    bodyBackground.classList.remove("purpleBackground");
    bodyBackground.classList.remove("pinkBackground");
    bodyBackground.classList.add("greenBackground");
};

const changeGreen = function () {
    const paragraphGreen = document.getElementById("colorgreen");
    paragraphGreen.addEventListener("click", function () {
        changeBackgroundGreen();
    })
};

changeGreen();

//Change background to Pink
const changeBackgroundPink = function () {
    const bodyBackground = document.body;
    bodyBackground.classList.remove("redBackground");
    bodyBackground.classList.remove("yellowBackground");
    bodyBackground.classList.remove("greenBackground");
    bodyBackground.classList.remove("purpleBackground");
    bodyBackground.classList.add("pinkBackground");
};

const changePink = function () {
    const paragraphPink = document.getElementById("colorpink");
    paragraphPink.addEventListener("click", function () {
        changeBackgroundPink();
    })
};

changePink();

//Change background to Pink
const resetBackground = function () {
    const bodyBackground = document.body;
    bodyBackground.classList.remove("redBackground");
    bodyBackground.classList.remove("yellowBackground");
    bodyBackground.classList.remove("greenBackground");
    bodyBackground.classList.remove("purpleBackground");
    bodyBackground.classList.remove("pinkBackground");
};

const reset = function () {
    const paragraphPink = document.getElementById("reset-color");
    paragraphPink.addEventListener("click", function () {
        resetBackground();
    })
};

reset();

