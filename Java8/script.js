const biggerNumber = function (bigger) {

    if (bigger > 100) {
        console.log("True")
    } else {
        console.log("False")
    }
};
biggerNumber(99);
biggerNumber(140);

//Bouncer at a club

const aiBouncer = function (amountVisitors, ageVisitors) {

    if (ageVisitors < 18) {
        return "This is a club for adults";
    }
    if (amountVisitors > 500) {
        return "It's too busy now, come back later";
    } else {
        return "Come in, have fun";
    }
}

console.log(aiBouncer(400, 0));
console.log(aiBouncer(400, 19));
console.log(aiBouncer(1400, 19));

//Calculating the average

const calAverage = function (number1, number2, number3, number4, number5) {

    const total = number1 + number2 + number3 + number4 + number5;
    const average = total / 5;
    return average;
};

console.log(calAverage(10, 14, 21, 100, 50));
