"use strict";

//user array question guessing game
let myFish = [
    "brown trout",
    "bone fish",
    "cutthroat trout",
    "brook trout",
    "blue gill",
    "bass",
];

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

function askQuestion(questionMsg, confirmation, greatMsg, poorMsg) {
    let firstQuest = prompt(questionMsg);

    if (confirmation === true) {
        if (firstQuest.toLowerCase() == "yes" || firstQuest.toLowerCase() == "y") {
            totalCorrect++;
            alert(greatMsg);
        } else if (
            firstQuest.toLowerCase() == "no" ||
            firstQuest.toLowerCase() == "n"
        ) {
            alert(poorMsg);
        }
    } else {
        if (firstQuest.toLowerCase() == "yes" || firstQuest.toLowerCase() == "y") {
            alert(poorMsg);
        } else if (
            firstQuest.toLowerCase() == "no" ||
            firstQuest.toLowerCase() == "n"
        ) {
            totalCorrect++;
            alert(greatMsg);
        }
    }
}

function askDigit(randomRange) {
    //Number guessing game
    let numberGuess = parseInt(
        prompt("Please guess a number between 1 and " + randomRange + " ?")
    );
    //generate and store a random number for loop.
    let someNumber = Math.floor(Math.random() * randomRange);
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
}

function askMultipleSolution(dataArray, questionMsg, poorMsg) {
    let userAnswer = false;
    let userAttempt = 0;

    //use for loop to iterate over array each time the user provides a response
    while (userAnswer == false && userAttempt < 6) {
        //console.log(userAnswer == false && userAttempt < 6);
        //prompt user provide a response.
        let guessFish = prompt(questionMsg);
        for (let i = 0; i < dataArray.length; i++) {
            if (guessFish.toLowerCase() == dataArray[i]) {
                //console.log("not working");
                totalCorrect++;
                alert("Great guess!");
                userAnswer = true;
            }
        }
        userAttempt++;
    }

    if (userAnswer == false) {
        alert(poorMsg + dataArray + " .");
    }
}

askQuestion(
    "Did I live in Ohio? Yes or No?",
    false,
    "Yes! Great job.",
    "Sorry that's not correct."
);
askQuestion(
    "Do I have a dog? Yes or No",
    true,
    "Great job!",
    "Sorry you missed it!"
);
askQuestion(
    "Did I graduate from the University of Tennessee? Yes or No.",
    true,
    "I sure did!",
    "No you didn't get it!"
);
askQuestion(
    "Do I live in Peru? Yes or No.",
    true,
    "Yes I do!",
    "Sorry, that's not correct!"
);
askQuestion("Am I married? Yes or No.", true, "Yes I am!", "You missed again!");
askDigit(10);
askMultipleSolution(
    myFish,
    "Guess what species of fish I enjoy catching the most?",
    "Great try but these are my favorite, "
);

let thankYou = alert(
    `Thank you ${userName} for playing my little game. You got ${totalCorrect} correct questions.`
);