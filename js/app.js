'use strict';

console.log("initialized");

let totalRight = 0;
let lastRight = false;
let alertMsg;

let favColorGreen = true;
let isCollegeGrad = false;
let isPokerPlayer = true;
let isOver30 = true;
let livesInCali = false;
let rNumber = Math.floor(Math.random() * (100 - 1) + 1);
let favGames = ["league of legends", "valorant", "new world", "csgo", "warzone"];

let colorGuess;
let collegeGuess;
let pokerGuess;
let over30Guess;
let livesInCaliGuess;
let numberGuess;
let gameGuess;

let usersName = prompt("Please provide your name.");

alert("Welcome to my About Me page, " + usersName + ". Now before I tell you about me, I'm going to have you guess a few facts about me! Let's begin.");


colorGuess = prompt("Is my favorite color green?");
if ((colorGuess.toLowerCase() === 'yes' || colorGuess.toLowerCase() === 'y') && (favColorGreen === true)) {
  totalRight++;
  lastRight = true;
  alertMsg = "Omg, you're starting off things great. That was correct. Total right answers: " + totalRight;
  alert(alertMsg);
  //console.log("Fav Color: You were right!");
} else if ((colorGuess.toLowerCase() === 'no' || colorGuess.toLowerCase() === 'n') && (favColorGreen === true)) {
  alertMsg = "Aw, you got the first one wrong, better luck on the next one! Total right answers: " + totalRight;
  lastRight = false;
  alert(alertMsg);
  //console.log("Fav Color: You were wrong.");
}

collegeGuess = prompt("Am I a college graduate?");
if ((collegeGuess.toLowerCase() === 'no' || collegeGuess.toLowerCase() === 'n') && (isCollegeGrad === false)) {
  totalRight++;
  if (lastRight === true) {
    alertMsg = "Right again! Total right answers: " + totalRight;
  } else {
    alertMsg = "Hooray, broke the wrong streak! " + totalRight;
    lastRight = false;
  }
  lastRight = true;
  alert(alertMsg);
  //console.log("College Grad: You were right!");
} else if ((collegeGuess.toLowerCase() === 'yes' || collegeGuess.toLowerCase() === 'y') && (isCollegeGrad === false)) {
  if (lastRight === true) {
    alertMsg = "Aw, it was only a 50% chance and you had the last one right. Blame it on statistics! Total right answers: " + totalRight;
  } else if (lastRight === false) {
    alertMsg = "Statistically, you can't keep getting them wrong! Total right answers: " + totalRight;
  }
  lastRight = false;
  alert(alertMsg);
  //console.log("College Grad: You were wrong.");
}

pokerGuess = prompt("Have I professionally played poker?");
if ((pokerGuess.toLowerCase() === 'yes' || pokerGuess.toLowerCase() === 'y') && (isPokerPlayer === true)) {
  totalRight++;
  if (lastRight === true) {
    alertMsg = "Right again! Total right answers: " + totalRight;
  } else {
    alertMsg = "Hooray, broke the wrong streak! " + totalRight;
    lastRight = true;
  }
  alert(alertMsg);
  //console.log("Poker player: You were right!");
} else if ((pokerGuess.toLowerCase() === 'no' || pokerGuess.toLowerCase() === 'n') && (isPokerPlayer === true)) {
  if (lastRight === true) {
    alertMsg = "Aw, it was only a 50% chance and you had the last one right. Blame it on statistics! Total right answers: " + totalRight;
  } else if (lastRight === false) {
    alertMsg = "Statistically, you can't keep getting them wrong! Total right answers: " + totalRight;
  }
  lastRight = false;
  alert(alertMsg);
  //console.log("Poker player: You were wrong.");
}
over30Guess = prompt("Am I over 30?");
if ((over30Guess.toLowerCase() === 'yes' || over30Guess.toLowerCase() === 'y') && (isOver30 === true)) {
  totalRight++;
  if (lastRight === true) {
    alertMsg = "Right again! Total right answers: " + totalRight;
  } else {
    alertMsg = "Hooray, broke the wrong streak! " + totalRight;
    lastRight = true;
  }
  alert(alertMsg);
  //console.log("Over 30: You were right!");
} else if ((over30Guess.toLowerCase() === 'no' || over30Guess.toLowerCase() === 'n') && (isOver30 === true)) {
  if (lastRight === true) {
    alertMsg = "Aw, it was only a 50% chance and you had the last one right. Blame it on statistics! Total right answers: " + totalRight;
  } else if (lastRight === false) {
    alertMsg = "Statistically, you can't keep getting them wrong! Total right answers: " + totalRight;
  }
  lastRight = false;
  alert(alertMsg);
  //console.log("Over 30: You were wrong.");
}

livesInCaliGuess = prompt("Do I reside in California?");
if ((livesInCaliGuess.toLowerCase() === 'no' || livesInCaliGuess.toLowerCase() === 'n') && (livesInCali === false)) {
  totalRight++;
  if (lastRight === true) {
    alertMsg = "Right again! Total right answers: " + totalRight;
  } else {
    alertMsg = "Hooray, broke the wrong streak! " + totalRight;
    lastRight = true;
  }
  alert(alertMsg);
  //console.log("Lives in Cali: You were right!");
} else if ((livesInCaliGuess.toLowerCase() === 'yes' || livesInCaliGuess.toLowerCase() === 'y') && (livesInCali === false)) {
  if (lastRight === true) {
    alertMsg = "Aw, it was only a 50% chance and you had the last one right. Blame it on statistics! Total right answers: " + totalRight;
  } else if (lastRight === false) {
    alertMsg = "Aw, another one wrong! Total right answers: " + totalRight;
  }
  lastRight = false;
  alert(alertMsg);
  //console.log("Lives in Cali: You were wrong.");
}

let guessed = 1;
let isNumberCorrect = false;
let intNumberGuess;

while (guessed < 5 && isNumberCorrect === false) {
  numberGuess = prompt("Guess a number 1 to 100, you have " + (5 - guessed) + " attempts left.");
  intNumberGuess = parseInt(numberGuess);
  if (intNumberGuess === rNumber) {
    isNumberCorrect = true;
    totalRight++;
    alertMsg = "Congratulations, you guessed the correct number!"
    //console.log("1-100 Guess: You were right!");
  } else {
    guessed++;
    let highLow;
    if (intNumberGuess > rNumber) {
      highLow = "high";
    } else {
      highLow = "low";
    }
    alertMsg = "Sorry, you guessed too " + highLow;
    //console.log("1-100 Guess: You were wrong!");
  }
  alert(alertMsg);
}

if (guessed === 5 && isNumberCorrect === false) {
  alertMsg = "It appears you attempted to guess too many times without getting the answer. The answer was " + rNumber + ". Total right answers: " + totalRight;
  alert(alertMsg);
  //console.log("1-100 Guess: Guessed wrong too many times");
}

let isGameCorrect = false;
let lcGameGuess;
guessed = 1;

while (!isGameCorrect && guessed < 7) {
  gameGuess = prompt("Guess one of my favorite pc games.");
  lcGameGuess = gameGuess.toLowerCase();
  for (let i = 0; i < favGames.length; i++) {
    if (lcGameGuess === favGames[i]) {
      isGameCorrect = true;
      totalRight++;
      alertMsg = "You guessed it! Total right answers: " + totalRight;
      alert(alertMsg);
      //console.log("Fav Game Guess: You were right!");
    }
  }
  if (!isGameCorrect && guessed === 6) {
    alertMsg = "Sorry, you've used all your guesses.";
    alert(alertMsg);
    //console.log("Fav Game Guess: You ran out of guesses.");
  } else if (!isGameCorrect) {
    alertMsg = "Sorry, please try again! You've used " + guessed + " guesses out of 6";
    alert(alertMsg);
    //console.log("Fav Game Guess: You were wrong.");
  }
  guessed++;
}





alert("Thank you for playing my guessing game, " + usersName + " You had " + totalRight + " right answers out of 7 questions. Now you may view my About Me page. PS: Hire Me.");

