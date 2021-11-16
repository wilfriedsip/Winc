// Function Decleration

function multiply1(num1, num2) {
    return num1 * num2;
}

let resulMultiply1 = multiply1(5, 5);
let resultMultiply1 = multiply1(8, 8);
let resultPlus1 = resulMultiply1 + resultMultiply1;
let resultEnd1 = resultPlus1 * resultPlus1;

console.log(resulMultiply1);
console.log(resultMultiply1);
console.log(resultPlus1);
console.log(resultEnd1)

//Function Expressionclear

const multiply2 = function (num1, num2) {
    return num1 * num2;
};

let resulMultiply2 = multiply2(5, 5);
let resultMultiply2 = multiply2(8, 8);
let resultPlus2 = resulMultiply2 + resultMultiply2;
let resultEnd2 = resultPlus2 * resultPlus2;

console.log(resulMultiply2);
console.log(resultMultiply2);
console.log(resultPlus2);
console.log(resultEnd2)

//Arrow Function
const multiply3 = (num1, num2) => {
    return num1 * num2;
};

let resulMultiply3 = multiply3(5, 5);
let resultMultiply3 = multiply3(8, 8);
let resultPlus3 = resulMultiply3 + resultMultiply3;
let resultEnd3 = resultPlus3 * resultPlus3;

console.log(resulMultiply3);
console.log(resultMultiply3);
console.log(resultPlus3);
console.log(resultEnd3)
