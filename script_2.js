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
/*
const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop(); // Last
console.log(friends);
const popped = friends.pop();
console.log(popped);


friends.shift(); // First
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
    console.log("You have a friend called Steven")
}
*/

// Arrays vs. objects
/*
const biankaArray = ["Bianka", "Csitari", 2024 - 1992, "developer", ["Anna", "Nori", "Barbi"]];
*/
/*
const bianka = {
    firstName: "Bianka",
    lastName: "Csitari",
    age: 2024 - 1992,
    job: "developer",
    friends: ["Anna", "Nori", "Barbi"]
};
console.log(bianka);

console.log(bianka.lastName);
console.log(bianka["lastName"]);

const nameKey = "Name";
console.log(bianka["first" + nameKey]);
console.log(bianka["last" + nameKey]);

// console.log(bianka."last" + nameKey) this version does not work

const interestedIn = prompt("What do you want to know about Bianka? Choose between firstName, lastName, age, job, and friends");
console.log(bianka[interestedIn]);


if (bianka[interestedIn]) {
    console.log(bianka[interestedIn]);
} else {
    console.log("Wrong request! Choose between firstName, lastName, age. job and friends.")
}

bianka.location = "Sweden";
bianka["twitter"] = "@csianka";
console.log(bianka);

// Challenge
//"Bianka has 3 friends, and his best friend is called Anna"

console.log(`${bianka.firstName} has ${bianka.friends.length} friends, and her best friend is called ${bianka.friends[0]}.`);
*/

/*
const bianka = {
    firstName: "Bianka",
    lastName: "Csitari",
    birthYear: 1992,
    job: "developer",
    friends: ["Anna", "Nori", "Barbi"],
    hasDriversLicense: true,

    //calcAge: function (birthYear) {
    //    return 2037 - birthYear;
    //}

    //calcAge: function () {
    //    console.log(this);
    //    return 2037 - this.birthYear;
    //}

    // Calculating the age once in the object, most efficient solution
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return 2037 - this.birthYear;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${bianka.job}, and she has ${this.hasDriversLicense ? "a" : "no"} drivers license.`
    }
};

// This is how we used to write this function before
//const calcAge = function (birthYear) {
//    return 2037 - birthYear;
//}

//console.log(bianka.calcAge(1992));
//console.log(bianka["calcAge"](1992));

// Calculating the age multiple times
console.log(bianka.calcAge());
console.log(bianka.calcAge());
console.log(bianka.calcAge());
console.log(bianka.calcAge());

console.log(bianka.age); // we only need to calculate the age once
*/

// Challenge 
// "Bianka is a 32-year old developer, and she has a driver's license."
/*
const bianka = {
    firstName: "Bianka",
    lastName: "Csitari",
    birthYear: 1992,
    job: "developer",
    friends: ["Anna", "Nori", "Barbi"],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return 2037 - this.birthYear;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and she has ${this.hasDriversLicense ? "a" : "no"} drivers license.`
    }
};

console.log(bianka.getSummary());
*/

// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");
// console.log("Lifting weights repetition 10");
/*
// for loop keeps running while condition is true
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`)
};
*/

const bianka = [
    "Bianka",
    "Csitari",
    2024 - 1992,
    "developer",
    ["Anna", "Nori", "Barbi"],
    true
];

const types = [];

// console.log(bianka(0))
// console.log(bianka(1))
// ...
// console.log(bianka(4))
// bianka(5) does not exist


// for (let i = 0; i < 5; i++) {
//     console.log("bianka(i)");
// }


// Loop to read values from and array
for (let i = 0; i < bianka.length; i++) {
    //Reading from bianka array
    console.log(bianka[i], typeof bianka[i]);

    //Filling types array
    //types[i] = typeof bianka[i];
    types.push(typeof bianka[i]);
};

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// Continue and break
console.log("---ONLY STRINGS---");
for (let i = 0; i < bianka.length; i++) {
    if (typeof bianka[i] !== "string") continue;
    console.log(bianka[i], typeof bianka[i]);
};

console.log("---BREAK WITH NUMBER---");
for (let i = 0; i < bianka.length; i++) {
    if (typeof bianka[i] == "number") break;
    console.log(bianka[i], typeof bianka[i]);
};