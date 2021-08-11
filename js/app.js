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

let colorGuess;
let collegeGuess;
let pokerGuess;
let over30Guess;
let livesInCaliGuess;

let usersName = prompt("Please provide your name.");

alert("Welcome to my About Me page, " + usersName + ". Now before I tell you about me, I'm going to have you guess a few facts about me! Let's begin.");


colorGuess = prompt("Is my favorite color green?");
if ((colorGuess.toLowerCase() === 'yes' || colorGuess.toLowerCase() === 'y') && (favColorGreen === true)) {
  totalRight++;
  lastRight = true;
  alertMsg = "Omg, you're starting off things great. That was correct. Total right answers: " + totalRight;
  alert(alertMsg);
  //console.log("You were right!");
} else if ((colorGuess.toLowerCase() === 'no' || colorGuess.toLowerCase() === 'n') && (favColorGreen === true)) {
  alertMsg = "Aw, you got the first one wrong, better luck on the next one! Total right answers: " + totalRight;
  alert(alertMsg);
  //console.log("You were wrong.");
}

collegeGuess = prompt("Am I a college graduate?");
if ((collegeGuess.toLowerCase() === 'no' || collegeGuess.toLowerCase() === 'n') && (isCollegeGrad === false)) {
  totalRight++;
  if (lastRight === true) {
    alertMsg = "Right again! Total right answers: " + totalRight;
  } else {
    alertMsg = "Hooray, broke the wrong streak! " + totalRight;
  }
  alert(alertMsg);
  //console.log("You were right!");
} else if ((collegeGuess.toLowerCase() === 'yes' || collegeGuess.toLowerCase() === 'y') && (isCollegeGrad === false)) {
  if (lastRight === true) {
    alertMsg = "Aw, it was only a 50% chance and you had the last one right. Blame it on statistics! Total right answers: " + toalRight;
  } else if (lastRight === false) {
    alertMsg = "Statistically, you can't keep getting them wrong! Total right answers: " + totalRight;
  }
  alert(alertMsg);
  //console.log("You were wrong.");
}

pokerGuess = prompt("Have I professionally played poker?");
if ((pokerGuess.toLowerCase() === 'yes' || pokerGuess.toLowerCase() === 'y') && (isPokerPlayer === true)) {
  totalRight++;
  if (lastRight === true) {
    alertMsg = "Right again! Total right answers: " + totalRight;
  } else {
    alertMsg = "Hooray, broke the wrong streak! " + totalRight;
  }
  alert(alertMsg);
  //console.log("You were right!");
} else if ((pokerGuess.toLowerCase() === 'no' || pokerGuess.toLowerCase() === 'n') && (isPokerPlayer === false)) {
  if (lastRight === true) {
    alertMsg = "Aw, it was only a 50% chance and you had the last one right. Blame it on statistics! Total right answers: " + toalRight;
  } else if (lastRight === false) {
    alertMsg = "Statistically, you can't keep getting them wrong! Total right answers: " + totalRight;
  }
  alert(alertMsg);
  //console.log("You were wrong.");
}

over30Guess = prompt("Am I over 30?");
if ((over30Guess.toLowerCase() === 'yes' || over30Guess.toLowerCase() === 'y') && (isOver30 === true)) {
  totalRight++;
  if (lastRight === true) {
    alertMsg = "Right again! Total right answers: " + totalRight;
  } else {
    alertMsg = "Hooray, broke the wrong streak! " + totalRight;
  }
  alert(alertMsg);
  //console.log("You were right!");
} else if ((over30Guess.toLowerCase() === 'no' || over30Guess.toLowerCase() === 'n') && (isOver30 === false)) {
  if (lastRight === true) {
    alertMsg = "Aw, it was only a 50% chance and you had the last one right. Blame it on statistics! Total right answers: " + toalRight;
  } else if (lastRight === false) {
    alertMsg = "Statistically, you can't keep getting them wrong! Total right answers: " + totalRight;
  }
  alert(alertMsg);
  //console.log("You were wrong.");
}

livesInCaliGuess = prompt("Do I reside in California?");
if ((livesInCaliGuess.toLowerCase() === 'no' || livesInCaliGuess.toLowerCase() === 'n') && (livesInCali === false)) {
  totalRight++;
  if (lastRight === true) {
    alertMsg = "Right again! Total right answers: " + totalRight;
  } else {
    alertMsg = "Hooray, broke the wrong streak! " + totalRight;
  }
  alert(alertMsg);
  //console.log("You were right!");
} else if ((livesInCaliGuess.toLowerCase() === 'yes' || livesInCaliGuess.toLowerCase() === 'y') && (livesInCali === true)) {
  if (lastRight === true) {
    alertMsg = "Aw, it was only a 50% chance and you had the last one right. Blame it on statistics! Total right answers: " + toalRight;
  } else if (lastRight === false) {
    alertMsg = "Aw, you got the last answer wrong! Total right answers: " + totalRight;
  }
  alert(alertMsg);
  //console.log("You were wrong.");s
}

alert("Thank you for playing my guessing game, " + usersName + " You had " + totalRight + " right answers out of 5 questions. Now you may view my About Me page. PS: Hire Me.");

