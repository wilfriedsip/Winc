const age = 118;

if (age > 18) {
    console.log(age, 'You are allowed to go in');
}
if (age == 18) {
    console.log(age, 'You are allowed to go in');
} else {
    if (age < 18)
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


