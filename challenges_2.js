// CHALLENGE #1: Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently. Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team). A team only wins if it has at least double the average score of the other team. Otherwise, no team wins! Your tasks: Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score). Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments). Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values). Use the checkWinner function to determine the winner for both DATA 1 and DATA 2. Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

/*
const calcAverage = (score1, score2, score3) => {
    const avgDolphins = ((score1 + score2 + score3) / 3);
    const avgKoalas = ((score1 + score2 + score3) / 3);
    return avgDolphins, avgKoalas;
}

// Data 1

const scoreDolphins = (calcAverage(44, 23, 71));
console.log(scoreDolphins)
const scoreKoalas = (calcAverage(65, 54, 49));
console.log(scoreKoalas)


// Data 2
const scoreDolphins2 = (calcAverage(85, 54, 41));
console.log(scoreDolphins2);

const scoreKoalas2 = (calcAverage(23, 34, 27));
console.log(scoreKoalas2);


function checkWinner(avgDolphins, avgKoalas) {
    const winner = (avgDolphins > avgKoalas + avgKoalas)
    const winner2 = (avgKoalas > avgDolphins + avgDolphins)
    if (winner) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
        return winner;
    } else if (winner2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
        return winner2;
    } else {
        return console.log(`No team wins...`)
    }
}

const winner1 = (checkWinner(scoreDolphins, scoreKoalas));

const winner2 = (checkWinner(scoreDolphins2, scoreKoalas2));
*/

// CHALLENGE #2: Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
//Your tasks:
//Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
//And now let's use arrays! So, create an array called bills containing the test data below.
//Create an array called tips containing the tip value for each bill, calculated from the function you created before.
//BONUS: Create an array totals containing the total values, so the bill + tip.
//TEST DATA: 125, 555, and 44.

/*
const calcTip = function (bill) {
    if (bill <= 300 && bill >= 50) {
        return (bill * 0.15)
    }
    else {
        return (bill * 0.2)
    }
}

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);

const totals = [(calcTip(bills[0]) + bills[0]), (calcTip(bills[1]) + bills[1]), (calcTip(bills[2]) + bills[2])];

console.log(totals);
*/
