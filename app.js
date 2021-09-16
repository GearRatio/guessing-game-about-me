"use strict";

//get user input up-front
let userName = prompt("Please enter your name.");
//alert to take a quiz about me
let welcomeMess = prompt(
    "Hello " + userName + " .  Please enter yes to take a quiz or no."
);
//first conditional block
if (welcomeMess.toLowerCase() == "yes" || welcomeMess.toLowerCase() == "y") {
    //console.log("This is a test.");
    alert("Thank you! Get ready for your first question.");
} else if (
    welcomeMess.toLowerCase() == "no" ||
    welcomeMess.toLowerCase() == "n"
) {
    //console.log("Please play!")
    alert("You have no choice!");
}

let totalCorrect = 0;

//first prompted question
let firstQuest = prompt("Did I live in Ohio? Yes or No?");
//control logic for first question
if (firstQuest.toLowerCase() == "yes" || firstQuest.toLowerCase() == "y") {
    alert("Sorry that's not correct.");
} else if (
    firstQuest.toLowerCase() == "no" ||
    firstQuest.toLowerCase() == "n"
) {
    totalCorrect++;
    alert("Yes! Great job.");
}
//second prompted question
let secondQuest = prompt("Do I have a dog? Yes or No");
//control logic for second question
if (secondQuest.toLowerCase() == "yes" || secondQuest.toLowerCase() == "y") {
    totalCorrect++;
    alert("Great job!");
} else if (
    secondQuest.toLowerCase() == "no" ||
    secondQuest.toLowerCase() == "n"
) {
    alert("Sorry you missed it!");
}

//thrid prompted question
let thirdQuest = prompt(
    "Did I gradguate from the University of Tennessee? Yes or No."
);
//control logic for third question
if (thirdQuest.toLowerCase() == "yes" || thirdQuest.toLowerCase() == "y") {
    totalCorrect++;
    alert("I sure did!");
} else if (
    thirdQuest.toLowerCase() == "no" ||
    thirdQuest.toLowerCase() == "n"
) {
    alert("No you didn't get it!");
}

let fourthQuest = prompt("Do I live in Peru? Yes or No.");
//control logic for fourth question
if (fourthQuest.toLowerCase() == "yes" || fourthQuest.toLowerCase() == "y") {
    totalCorrect++;
    alert("Yes I do!");
} else if (
    fourthQuest.toLowerCase() == "no" ||
    fourthQuest.toLowerCase() == "n"
) {
    alert("Sorry, that's not correct!");
}

//fifth question
let fifthQuest = prompt("Am I married? Yes or No.");
//control logic for fifth question
if (fifthQuest.toLowerCase() == "yes" || fifthQuest.toLowerCase() == "y") {
    totalCorrect++;
    alert("Yes I am!");
} else if (
    fifthQuest.toLowerCase() == "no" ||
    fifthQuest.toLowerCase() == "n"
) {
    alert("You missed again!");
}

//Number guessing game
let numberGuess = parseInt(prompt("Please guess a number between 1 and 10?"));
//generate and store a random number for loop.
let someNumber = Math.floor(Math.random() * 10);
//console.log(someNumber);
//turn counter
let count = 1;

while (count < 4) {
    //console.log(someNumber);
    if (numberGuess === someNumber) {
        totalCorrect++;
        alert("You got it!");
        break;
    } else if (numberGuess < someNumber) {
        numberGuess = parseInt(prompt(`Try again! Your guess was to low.`));
        count++;
    } else if (numberGuess > someNumber) {
        numberGuess = parseInt(prompt(`Try again! Your guess was to high.`));
        count++;
    }
    if (count == 4) {
        alert(`The answer was ${someNumber}.`);
    }
}

//user array question guessing game
let myFish = [
    "brown trout",
    "bone fish",
    "cutthroat trout",
    "brook trout",
    "blue gill",
    "bass",
];

let userAnswer = false;
let userAttempt = 0;

//use for loop to iterate over array each time the user provides a response
while (userAnswer == false && userAttempt < 6) {
    //console.log(userAnswer == false && userAttempt < 6);
    //prompt user provide a response.
    let guessFish = prompt(
        "Guess what species of fish I enjoy catching the most?"
    );
    for (let i = 0; i < myFish.length; i++) {
        if (guessFish.toLowerCase() == myFish[i]) {
            //console.log("not working");
            totalCorrect++;
            alert("Great guess!");
            userAnswer = true;
        }
    }
    userAttempt++;
}

if (userAnswer == false) {
    alert(
        "Great try but these are my favorite fish, brown trout, bone fish, cutthroat trout, brook trout, blue gill, and bass."
    );
}

let thankYou = alert(
    `Thank you ${userName} for playing my little game. You got ${totalCorrect} correct questions.`
);