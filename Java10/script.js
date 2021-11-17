const ageAdult = function (age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

const ageGreeting = function (age) {
    if (ageAdult(age)) {
        return "Hello there";
    } else {
        return "Hey kiddo";
    }
};

console.log(ageGreeting(18));
console.log(ageGreeting(1));

//VAT exercise 1

const vatCalculation = function (basePrice, VATPercentage) {
    return basePrice * (VATPercentage / 100);
};

const priceIncludingVAT = function (basePrice, VATPercentage) {
    const VAT = vatCalculation(basePrice, VATPercentage);
    return basePrice + VAT;
};

console.log(priceIncludingVAT(1000, 21));
console.log(priceIncludingVAT(2, 9));

//VAT exercise 2

const calculateBasePrice = function (priceIncludingVAT, VATPercentage) {
    const basePrice = priceIncludingVAT / ((100 + VATPercentage) / 100);
    return basePrice;
};

const calcBasePriceVat = function (priceIncludingVAT, VATPercentage) {
    const basePrice = calculateBasePrice(priceIncludingVAT, VATPercentage);
    const VAT = priceIncludingVAT - basePrice;
    return [basePrice, VAT];
};

console.log(calcBasePriceVat(1210, 21));
console.log(calcBasePriceVat(2.18, 9));