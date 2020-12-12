// Welcome Page
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
var timerDiv = document.createElement("div");
var timerHeader = document.createElement("h3");
var timerPlaceholder = document.createElement("p");
var startGameButton = document.createElement("button");

gameTitle.textContent = "Welcome to the JavaScript Quiz!";
welcomeMessage.textContent = "Test your basic JavaScript skills!"
instructionsHeader.textContent = "Instructions";
bullet1.textContent = "The quiz consists of 10 questions";
bullet2.textContent = "You have 30 seconds for each question";
bullet3.textContent = "Answers are multiple choice";
bullet4.textContent = "Click on the button that corresponds with your best answer";
bullet5.textContent = "After answering a question, you will be told if you responded correctly";
bullet6.textContent = "Good results are recorded in the High Score list";
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

document.body.appendChild(timerDiv);
timerDiv.appendChild(timerHeader);
timerDiv.appendChild(timerPlaceholder);

document.body.appendChild(startGameButton);


// Questions

var questionsHeader = document.createElement("h1");
var questionDiv = document.createElement("div");
var question = document.createElement("h3");
var answerDiv = document.createElement("div");
var answerA = document.createElement("button");
var answerB = document.createElement("button");
var answerC = document.createElement("button");
var answerD = document.createElement("button");
var answerC = document.createElement("button");
var responseDiv = document.createElement("div");
var userResult = document.createElement("h3");
var correctAnswer = document.createElement("h5");

questionsHeader.textContent = "Question Number 0";
question.textContent = "Placeholder";
answerA.textContent = "A - Placeholder";
answerB.textContent = "B - Placeholder";
answerC.textContent = "C - Placeholder";
answerD.textContent = "D - Placeholder";
userResult.textContent = "You answered correctly/incorrectly!";
correctAnswer.textContent = "The correct answer is Placeholder.";

document.body.appendChild(questionsHeader);
document.body.appendChild(questionDiv);
questionDiv.appendChild(question);
questionDiv.appendChild(answerDiv);
questionDiv.children[1].appendChild(answerA);
questionDiv.children[1].appendChild(answerB);
questionDiv.children[1].appendChild(answerC);
questionDiv.children[1].appendChild(answerD);
questionDiv.children[1].appendChild(answerD);
document.body.appendChild(responseDiv);
responseDiv.appendChild(userResult);
responseDiv.appendChild(correctAnswer);

