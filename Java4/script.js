const age = 18;

if (age >= 18 && age <= 25) {
    console.log("You get 50% off!")
}
if (age >= 18) {
    console.log(age, 'You are allowed to go in');
}
else {
    (age < 18)
    console.log(age, 'You are NOT allowed to go in');
}

const isFemale = false;

if (isFemale == true) {
    console.log(isFemale, 'You are a lady, Please come in');
} else {
    (isFemale == false)
    console.log(isFemale, 'You are a men, NO entry');
}

const driverStatus = 'bob';

if (driverStatus == 'bob') {
    console.log(driverStatus, 'Drive Safe');
} else {
    (driverStatus != 'bob')
    console.log(driverStatus, 'STAY HOME');
}

const firstName = 'Sarah';

if (firstName == 'Bob') {
    console.log(firstName, 'You will get a Fee beer');
} else if (firstName == 'Sarah') {
    console.log(firstName, 'You will get a Free beer');
} else {
    console.log('NO FREE BEER')
}

const totalAmount = 99;
if (totalAmount > 50 && totalAmount < 100) {
    console.log('You get FREE Vega bitterballen');
    console.log('Free portion of Nachos');
} else {
    (totalAmount >= 100)
    console.log('You will get a Free bottle of Champagne');
}
