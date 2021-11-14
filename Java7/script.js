
// No Argument

const paintWall = function () {

    console.log("The wall has been painted red");

};
paintWall();


//Single Argument

const paintWall1 = function (color) {

    console.log("The wall has been painted " + color);

    console.log("The wall has been painted " + color);
};

paintWall1("Green");
paintWall1("Yellow");

// Multiple Arguments

const paintWall2 = function (wallPlace, color) {
    console.log("The " + wallPlace + "has been painted" + color);
    console.log("The " + wallPlace + "has been painted" + color);
}

paintWall2("North", "Orange");
paintWall2("South", "Grey");

//6. // The order of arguments matters

