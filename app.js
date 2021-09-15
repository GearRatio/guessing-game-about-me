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

let firstQuest = prompt("Did I live in Ohio? Yes or No?");
//control logic for first question
if (firstQuest.toLowerCase() == "yes" || firstQuest.toLowerCase() == "y") {
    alert("Sorry that's not correct.");
} else if (
    firstQuest.toLowerCase() == "no" ||
    firstQuest.toLowerCase() == "n"
) {
    alert("Yes! Great job.");
}
//second question
let secondQuest = prompt("Do I have a dog? Yes or No");
//control logic for second question
if (secondQuest.toLowerCase() == "yes" || secondQuest.toLowerCase() == "y") {
    alert("Great job!");
} else if (
    secondQuest.toLowerCase() == "no" ||
    secondQuest.toLowerCase() == "n"
) {
    alert("Sorry you missed it!");
}

let thirdQuest = prompt(
    "Did I gradguate from the University of Tennessee? Yes or No."
);
//control logic for third question
if (thirdQuest.toLowerCase() == "yes" || thirdQuest.toLowerCase() == "y") {
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
    alert("Yes I do!");
} else if (
    fourthQuest.toLowerCase() == "no" ||
    fourthQuest.toLowerCase() == "n"
) {
    alert("Sorry, that's not correct!");
}

let fifthQuest = prompt("Am I married? Yes or No.");

if (fifthQuest.toLowerCase() == "yes" || fifthQuest.toLowerCase() == "y") {
    alert("Yes I am!");
} else if (
    fifthQuest.toLowerCase() == "no" ||
    fifthQuest.toLowerCase() == "n"
) {
    alert("You missed again!");
}

let thankYou = alert("Thank you " + userName + " for playing my little game.");