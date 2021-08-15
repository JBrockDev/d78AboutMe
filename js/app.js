'use strict';

let totalRight = 0;
let correctStreak = 0;
let incorrectStreak = 0;
let alertMsg;
let isArray = false;

let usersName = prompt("Please provide your name.");

alert("Welcome to my About Me page, " + usersName + ". Now before I tell you about me, I'm going to have you guess a few facts about me! Let's begin.");

let responsesArrayOriginal = [ // Index 0 - right answers, Index 1 - wrong answers
  ["Correct, you rock!", "10-4, you are right!", "You were wrong. SIKE! Good job.", "I knew you were a good person!", "Are you psychic?", "Clearly we see eye to eye, hire me?", "Absolutely astounding!", "I think we could be friends!", "There are 10 reasons I like you; you are checking out my page and you got this right."],
  ["Are you an alien? WRONG!", "You meant to get this wrong, right?", "Abort mission, weirdo detected.", "I bet you think dogs are better than cats, wrong.", "Differences make a stronger team, hire me?", "You should be locked up for thinking that.", "I think this is my queue to leave.", "I could flip a penny and get more answers right than you.", "Statistically, getting this wrong increases the chances of getting the next right.", "We grow the most through failures."]
]
let responsesArray = [];
responsesArray[0] = [...responsesArrayOriginal[0]];
responsesArray[1] = [...responsesArrayOriginal[1]];


let questionArray = [
  ["Is my favorite color green?", true, 1],
  ["Am I a college graduate?", false, 1],
  ["Have I professionally played poker?", true, 1],
  ["Do I play single player video games?", false, 1],
  ["Do I live in California?", false, 1],
  ["Guess a number 1-100.", getRandomNumber(1, 100), 4],
  ["Guess one of my favorite numbers.", [33, 19, 99], 6],
  ["Guess one of my favorite games.", ["league of legends", "new world", "warzone"], 6]
];

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function yesOrNoQuestion(currentAnswer, lowercaseGuess) {
  let isCorrect = false;
  if (currentAnswer === true && (lowercaseGuess === 'yes' || lowercaseGuess === 'y')) {
    isCorrect = true;
  } else if (currentAnswer === false && (lowercaseGuess === 'no' || lowercaseGuess === 'n')) {
    isCorrect = true;
  }
  return isCorrect;
}

function numberGuessQuestion(currentAnswer, guessPrompt, currentAttempt, maxAttempts) {
  let isCorrect = false;
  let numberGuess = parseInt(guessPrompt);
  // leaving this console.log in only for testing of correct number if anyone wishes to
  console.log("For seeing correct answer path easier only: " + currentAnswer);
  if (currentAnswer === numberGuess) {
    isCorrect = true;
    alertMsg = "DING DING DING";
  } else if (numberGuess > currentAnswer && currentAttempt < maxAttempts - 1) {
    alertMsg = "Your guess is too high.";
  } else if (numberGuess < currentAnswer && currentAttempt < maxAttempts - 1) {
    alertMsg = "Your guess is too low.";
  } else {
    alertMsg = "Please clean up the drool from your keyboard. -1 attempt.";
  }
  if (isCorrect || currentAttempt === maxAttempts - 1) {
    alertMsg += " The correct answer was " + currentAnswer;
  }
  alert(alertMsg);
  return isCorrect;
}

function arrayQuestion(currentAttempt, currentAnswer, guessPrompt, lowercaseGuess, stringFromArray, questionNumber) {
  let isCorrect = false;
  let isNumberArray = false;
  isArray = true;
  if (typeof(currentAnswer[0]) === "number") {
    isNumberArray = true;
  }
  for (let i = 0; i < currentAnswer.length; i++) {
    if (isNumberArray) {
      if (currentAnswer[i] === parseInt(guessPrompt)) {
        isCorrect = true;
      }
    } else {
      if (currentAnswer[i] === lowercaseGuess) {
        isCorrect = true;
      }
    }
    if (currentAttempt === 0) {
      stringFromArray += currentAnswer[i];
      if (i < currentAnswer.length - 1) {
        stringFromArray += ", ";
      }
    }
  }

  handleAfterQuestionResponse(isCorrect, questionNumber);

  return [isCorrect, stringFromArray];
}

function handleAfterArrayQuestionResponse(isCorrect, currentAnswer, stringFromArray) {
  if (isArray) {
    if (isCorrect) {
      alertMsg = "You guessed one of the " + currentAnswer.length + " correct answers from " + stringFromArray + "!";
    } else {
      alertMsg = "That was wrong, the correct answers were " + stringFromArray + "!";
    }
    alert(alertMsg);
  }
}

function getRandomResponse(isCorrect) {
  let rnd;
  let index;
  if (isCorrect) {
    index = 0;
  } else {
    index = 1;
  }
  rnd = getRandomNumber(0, responsesArray[index].length - 1);
  let randomResponse = responsesArray[index][rnd];
  responsesArray[index].splice(rnd, 1);
  if (responsesArray[index].length === 0) {
    responsesArray[index] = [...responsesArrayOriginal[index]];
  }
  return randomResponse;
}

function handleAfterQuestionResponse(isCorrect, questionNumber) {
  let randomResponse;
  if (isCorrect) {
    correctStreak++;
    incorrectStreak = 0;
    totalRight++;
    let randomResponse = getRandomResponse(isCorrect);
    alertMsg = randomResponse + "\r\nCorrect Streak: " + correctStreak;
  } else {
    incorrectStreak++;
    correctStreak = 0;
    let randomResponse = getRandomResponse(isCorrect);
    alertMsg = randomResponse + "\r\nIncorrect Streak: " + incorrectStreak;
  }
  alertMsg += "\r\nCurrent Score: " + totalRight + " out of " + (questionNumber + 1);
  alert(alertMsg);
}

function askQuestion(questionNumber) {
  let currentQuestionArray = questionArray[questionNumber];
  let currentQuestion = currentQuestionArray[0];
  let currentAnswer = currentQuestionArray[1];
  let maxAttempts = currentQuestionArray[2];
  let currentAttempt = 0;
  let stringFromArray = "";
  let isCorrect = false;
  while (isCorrect === false && currentAttempt < maxAttempts) {
    let guessPrompt; 
    let promptMsg;
    while(!guessPrompt) { // ensure that something is typed and they didn't just click ok or cancel
      promptMsg = currentQuestion + " Tries left: " + (maxAttempts - currentAttempt);
      guessPrompt = prompt(promptMsg);
    }
    let lowercaseGuess = guessPrompt.toLowerCase();
    if (typeof(currentAnswer) === "boolean") { // this is for yes/no questions
      isCorrect = yesOrNoQuestion(currentAnswer, lowercaseGuess);
    } else if (typeof(currentAnswer) === "number") { // this is for a number guessing game
      isCorrect = numberGuessQuestion(currentAnswer, guessPrompt, currentAttempt, maxAttempts);
    } else if (Array.isArray(currentAnswer)) { // this is for an array of answers
      let returnArray;
      returnArray = arrayQuestion(currentAttempt, currentAnswer, guessPrompt, lowercaseGuess, stringFromArray, questionNumber);
      isCorrect = returnArray[0];
      stringFromArray = returnArray[1];
    }
    currentAttempt++;
  }
  handleAfterQuestionResponse(isCorrect, questionNumber);
  
}


for (let i = 0; i < questionArray.length; i++) {
    askQuestion(i);
}

alertMsg = "Thanks for playing the guessing game, " + usersName + ".\r\nYou scored " + totalRight + " out of " + questionArray.length + ".\r\nYou may now view my page. PS. Hire me."

alert(alertMsg);
