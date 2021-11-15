const biggerNumber = function (bigger) {

    if (bigger > 100) {
        console.log("True")
    } else {
        console.log("False")
    }
};
biggerNumber(99);
biggerNumber(140);


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
