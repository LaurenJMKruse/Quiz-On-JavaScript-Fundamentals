// Welcome Page Assignments
var gameTitle = document.createElement("h1");
var welcomeDiv = document.createElement("div");
var welcomeMessage = document.createElement("h3");
var instructionsDiv = document.createElement("div");
var instructionsHeader = document.createElement("h3");
var instructionsList = document.createElement("ul");
var bullet1 = document.createElement("li");
var bullet2 = document.createElement("li");
var bullet3 = document.createElement("li");
var bullet4 = document.createElement('li');
var bullet5 = document.createElement("li");
var bullet6 = document.createElement("li");
var bullet7 = document.createElement("li");
var timerDiv = document.createElement("div");
var timerHeader = document.createElement("h3");
var timerPlaceholder = document.createElement("p");
var startGameButton = document.createElement("button");

// Quiz Assignments
var questionsHeader = document.createElement("h1");
var questionDiv = document.createElement("div");
var askQuestion = document.createElement("h3");
var answerDiv = document.createElement("div");
var answerA = document.createElement("button");
var answerB = document.createElement("button");
var answerC = document.createElement("button");
var answerD = document.createElement("button");
var answerE = document.createElement("button");
var responseDiv = document.createElement("div");
var userResult = document.createElement("h3");
var correctAnswer = document.createElement("h5");
var buttons = document.getElementsByTagName("button");


// Quiz Questions and Answers
var questionsArray = [
    { question: "Which of the following is NOT a JavaScript data type?",
       A: "Number",
       B: "Double",
       C: "Boolean",
       D: "String",
       E: "None of the above.",
       correctAnswer: "B"
    },
    { question: "What comparison operator is used to test if two values are equal and of the same data type?",
       A: "==",
       B: "=",
       C: "===",
       D: "=== &&",
       E: "None of the above.",
       correctAnswer: "C"
    },
    { question: "Which of the below values are truthy (evaluate to true)?",
       A: "0",
       B: "5",
       C: "' ' (an empty string)",
       D: "NaN",
       E: "None of the above.",
       correctAnswer: "B"
    },
    { question: "Which of the below values are falsy (evaluate to false)?",
       A: "[ ] (an empty array",
       B: "{ } (an empty object)",
       C: "orca",
       D: "'0'",
       E: "None of the above.",
       correctAnswer: "E"
    },
    { question: "What is the correct keyword to use to end a switch statement or for loop?",
       A: "skip",
       B: "stop",
       C: "halt",
       D: "break",
       E: "None of the above.",
       correctAnswer: "D"
    },
    { question: "Which of the following is a not a string method?",
       A: "splice()",
       B: "indexOf()",
       C: "toUpperCase()",
       D: "trim()",
       E: "None of the above.",
       correctAnswer: "A"
    },
    { question: "Which of the following array methods would you use to add to the end of an array?",
       A: "",
       B: "shift()",
       C: "pop()",
       D: "push()",
       E: "None of the above.",
       correctAnswer: "D"
    },
    { question: "Which of the following does not have the data type of object?",
       A: "Object",
       B: "Function",
       C: "Array",
       D: "null",
       E: "None of the above.",
       correctAnswer: "B"
    },
    { question: "Which of the following is not a component of the Document Object Model tree?",
       A: "Root Element",
       B: "Sibling Element",
       C: "Cousin Element",
       D: "Child Element",
       E: "None of the above.",
       correctAnswer: "C"
    },
    { question: "Which of the following is not a valid parameter for a function?",
       A: "Operator",
       B: "String",
       C: "Number",
       D: "Boolean",
       E: "None of the above.",
       correctAnswer: "A"
    }
];

// Welcome Page Text
gameTitle.textContent = "Welcome to the JavaScript Quiz!";
welcomeMessage.textContent = "Test your basic JavaScript skills!"
instructionsHeader.textContent = "Instructions";
bullet1.textContent = "The quiz consists of 10 questions";
bullet2.textContent = "You have 30 seconds for each question";
bullet3.textContent = "Answers are multiple choice";
bullet4.textContent = "Click on the button that corresponds with your best answer";
bullet5.textContent = "After answering a question, you will be told if you responded correctly";
bullet6.textContent = "Each correct response is worth 5 points";
bullet7.textContent = "Good results are recorded in the High Score list";
timerHeader.textContent = "Timer";
timerPlaceholder.textContent = "Timer Placeholder";
startGameButton.textContent = "Begin Quiz";

// Setting up the Welcome Page
// body contains 4 divs: welcomeDiv, instructionsDiv, timerDiv, startGameDiv
document.body.appendChild(gameTitle);

document.body.appendChild(welcomeDiv);
welcomeDiv.appendChild(welcomeMessage);

document.body.appendChild(instructionsDiv)
instructionsDiv.appendChild(instructionsHeader);
instructionsDiv.appendChild(instructionsList);
instructionsDiv.children[1].appendChild(bullet1);
instructionsDiv.children[1].appendChild(bullet2);
instructionsDiv.children[1].appendChild(bullet3);
instructionsDiv.children[1].appendChild(bullet4);
instructionsDiv.children[1].appendChild(bullet5);
instructionsDiv.children[1].appendChild(bullet6);
instructionsDiv.children[1].appendChild(bullet7);

document.body.appendChild(timerDiv);
timerDiv.appendChild(timerHeader);
timerDiv.appendChild(timerPlaceholder);

document.body.appendChild(startGameButton);


// Applying Attributes to Welcome Page



// Quiz Text
questionsHeader.textContent = "Question Number 0";
askQuestion.textContent = "Placeholder";
answerA.textContent = "A - Placeholder";
answerB.textContent = "B - Placeholder";
answerC.textContent = "C - Placeholder";
answerD.textContent = "D - Placeholder";
answerE.textContent = "None of the above.";
userResult.textContent = "You answered correctly/incorrectly!";
correctAnswer.textContent = "The correct answer is Placeholder.";

// Setting up the Quiz Page
document.body.appendChild(questionsHeader);
document.body.appendChild(questionDiv);
questionDiv.appendChild(askQuestion);
questionDiv.appendChild(answerDiv);
questionDiv.children[1].appendChild(answerA);
questionDiv.children[1].appendChild(answerB);
questionDiv.children[1].appendChild(answerC);
questionDiv.children[1].appendChild(answerD);
questionDiv.children[1].appendChild(answerD);
questionDiv.children[1].appendChild(answerE);
document.body.appendChild(responseDiv);
responseDiv.appendChild(userResult);
responseDiv.appendChild(correctAnswer);

// Applying Attributes to Quiz Page
buttons[1].setAttribute("style", "background-color:#0000cc; color:white; border-radius:20px; display:block; font-size:20px; text-align:left; padding:15px; cursor:pointer; margin:10px; width:300px");
buttons[2].setAttribute("style", "background-color:#0000cc; color:white; border-radius:20px; display:block; font-size:20px; text-align:left; padding:15px; cursor:pointer; margin:10px; width:300px");
buttons[3].setAttribute("style", "background-color:#0000cc; color:white; border-radius:20px; display:block; font-size:20px; text-align:left; padding:15px; cursor:pointer; margin:10px; width:300px");
buttons[4].setAttribute("style", "background-color:#0000cc; color:white; border-radius:20px; display:block; font-size:20px; text-align:left; padding:15px; cursor:pointer; margin:10px; width:300px");
buttons[5].setAttribute("style", "background-color:#0000cc; color:white; border-radius:20px; display:block; font-size:20px; text-align:left; padding:15px; cursor:pointer; margin:10px; width:300px");




// function populatingQuiz(questionsArray) {

// }

