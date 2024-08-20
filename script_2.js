"use strict" // it needs to be the very first code
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio"; // interface word is reserved by strict mode

// const private = 543; // same here

//const if = 23; // same here
*/
/*
function logger() {
    console.log("My name is Bianka.");
}
// calling / running / invoking function
logger();
logger();
logger();
*/
/*
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
*/

//function calAge1(birthYear) {
//    const age = 2037 - birthYear;
//    return age;
//}
/*
// Function declaration
function calAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calAge1(1991);
console.log(age1);

// Function expression
const calAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calAge2(1991);

console.log(age1, age2);
*/

/*
// Arrow function
const calAge3 = birthYear => 2037 - birthYear;
const age3 = calAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));
*/
/*
// Function calling another function

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/
/*
// Arrow function
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(1971, "Erika"));

// Function expression
const yearsUntilRetirement2 = function (birthYear, firstName) {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement2(1992, "Bianka"));

// Function declarination
function yearsUntilRetirement3(birthYear, firstName) {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement3(1992, "Bianka"));

// Function calling a function

const calAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement4 = function (birthYear, firstName) {
    const age = calAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired.`);
        return -1;
    }
}
console.log(yearsUntilRetirement4(1992, "Bianka"));
console.log(yearsUntilRetirement4(1968, "Mike"));
*/
/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"]
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ["Bob", "Alice"]

const firstName = "Jonas";
const jonas = [firstName, 2037 - 1991, "teacher", friends];
console.log(jonas);


// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1998, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

