var buttons = document.getElementsByTagName("button");

// Stuff that goes on every view
// Game title
var gameTitle = document.createElement("h1");
document.body.appendChild(gameTitle);
gameTitle.textContent = "JavaScript Fundamentals Quiz";
// Timer in timerDiv
var timerDiv = document.createElement("div");
document.body.appendChild(timerDiv);
// timerDiv.children[0]
var timerHeader = document.createElement("h2");
timerDiv.appendChild(timerHeader);
timerHeader.textContent = "Timer";
// timerDiv.children[1]
var timerPlaceholder = document.createElement("p");
timerDiv.appendChild(timerPlaceholder);
// timerPlaceholder.textContent = "0:00";


// Welcome View Assignments
// welcomeDiv is parent div for this section
var welcomeDiv = document.createElement("div");
document.body.appendChild(welcomeDiv);

// welcomeDiv.children[0]
var welcomeMessage = document.createElement("h2");
welcomeMessage.textContent = "Test your basic JavaScript skills!"
welcomeDiv.appendChild(welcomeMessage);

// welcomeDiv.children[1]
var instructionsDiv = document.createElement("div");
welcomeDiv.appendChild(instructionsDiv);
// welcomeDiv.children[1].children[0]
var instructionsHeader = document.createElement("h2");
instructionsHeader.textContent = "Instructions";
instructionsDiv.appendChild(instructionsHeader);
// welcomeDiv.children[1].children[1]
var instructionsList = document.createElement("ul");
instructionsDiv.appendChild(instructionsList);
// welcomeDiv.instructionsDiv.instructionsList.children[0]
var bullet1 = document.createElement("li");
bullet1.textContent = "The quiz consists of 10 questions";
instructionsDiv.children[1].appendChild(bullet1);
// welcomeDiv.instructionsDiv.instructionsList.children[1]
var bullet2 = document.createElement("li");
bullet2.textContent = "You have 30 seconds for each question";
instructionsDiv.children[1].appendChild(bullet2);
// welcomeDiv.instructionsDiv.instructionsList.children[3]
var bullet3 = document.createElement("li");
bullet3.textContent = "Answers are multiple choice";
instructionsDiv.children[1].appendChild(bullet3);
// welcomeDiv.instructionsDiv.instructionsList.children[4]
var bullet4 = document.createElement('li');
bullet4.textContent = "Click on the button that corresponds with your best answer";
instructionsDiv.children[1].appendChild(bullet4);
// welcomeDiv.instructionsDiv.instructionsList.children[5]
var bullet5 = document.createElement("li");
bullet5.textContent = "You will be notified if your answer is right or wrong";
instructionsDiv.children[1].appendChild(bullet5);
// welcomeDiv.instructionsDiv.instructionsList.children[6]
var bullet6 = document.createElement("li");
bullet6.textContent = "Each correct response is worth 5 points";
instructionsDiv.children[1].appendChild(bullet6);
// welcomeDiv.instructionsDiv.instructionsList.children[7]
var bullet7 = document.createElement("li");
bullet7.textContent = "Good results are recorded in the High Score list";
instructionsDiv.children[1].appendChild(bullet7);

// welcomeDiv.children[2]
var startGameButton = document.createElement("button");
startGameButton.textContent = "Begin Quiz";
welcomeDiv.appendChild(startGameButton);

// Welcome Page Text

// Setting up the Welcome Page view with welcomeDiv
// welcomeDiv contains 3 divs: welcomeMessage, instructionsDiv, startGameDiv

// quizDiv is parent div for this section
var quizDiv = document.createElement("div");
document.body.appendChild(quizDiv);

// quizDiv.children[0]
var questionHeader = document.createElement("h2");
// questionHeader.textContent = `Question No. ${questionNumber}`;
quizDiv.appendChild(questionHeader);
var questionNumber;

// quizDiv.children[1]
var askQuestion = document.createElement("h3");
// askQuestion.textContent = "Can you answer this question?";
quizDiv.appendChild(askQuestion);

// quizDiv.children[2]   
var answerDiv = document.createElement("div");
quizDiv.appendChild(answerDiv);

// quizDiv.answerDiv.children[0]
var answerA = document.createElement("button");
// answerA.textContent = "A";
answerDiv.appendChild(answerA);

// quizDiv.answerDIv.children[1]
var answerB = document.createElement("button");
// answerB.textContent = "B";
answerDiv.appendChild(answerB);

// quizDiv.answerDiv.children[2]
var answerC = document.createElement("button");
// answerC.textContent = "C";
answerDiv.appendChild(answerC);

// quizDiv.answerDiv.children[3]
var answerD = document.createElement("button");
// answerD.textContent = "D";
answerDiv.appendChild(answerD);

// quizDiv.answerDiv.children[4]
var answerE = document.createElement("button");
// answerE.textContent = "E";
answerDiv.appendChild(answerE);

// quizDiv.children[3]      
var responseDiv = document.createElement("div");
quizDiv.appendChild(responseDiv);

// quizDiv.responseDiv.children[0]
var userResponse = document.createElement("h3");
// userResponse.textContent = "Your answer";
responseDiv.appendChild(userResponse);

// quizDiv.responseDiv.children[1]
var correctAnswer;
var answerFeedback = document.createElement("h3");
// correctAnswer.textContent = "The correct answer is...";
responseDiv.appendChild(answerFeedback);

// Score View Assignments
// scoreDiv is parent div for this section
var scoreDiv = document.createElement("div");
document.body.appendChild(scoreDiv);

// scoreDiv.children[0]
var scoreMessage = document.createElement("h2");
scoreMessage.textContent = "How did your score rank?"
scoreDiv.appendChild(scoreMessage);

// scoreDiv.children[1]
var allScoresDiv = document.createElement("div");
scoreDiv.appendChild(allScoresDiv);

// scoreDiv.allScoresDiv.children[0]
var allScoresHeader = document.createElement("h5");
allScoresHeader.textContent = "All Games";
allScoresDiv.appendChild(allScoresHeader);

// scoreDiv.children[2]
var highScoresDiv = document.createElement("div");
scoreDiv.appendChild(highScoresDiv);

// scoreDiv.highScoresDiv.children[0]
var highScoresHeader = document.createElement("h5");
highScoresHeader.textContent = "High Scores";
allScoresDiv.appendChild(highScoresHeader);

// scoreDiv.children[3]
var clearScores = document.createElement("button");
clearScores.textContent = "Clear Scores";
scoreDiv.appendChild(clearScores);

// scoreDiv.children[4]
var playAgain = document.createElement("button");
playAgain.textContent = "Play Again";
scoreDiv.appendChild(playAgain);

// Applying Attributes to Buttons
for (var i = 0; i < buttons.length; i++) {
   if (i === 0) {
      buttons[i].setAttribute("style", "background-color:red; border:none; color:white; border-radius:20px; display:block; font-size:20px; text-align:center; padding:15px; cursor:pointer; margin:10px; width:300px;");
   }
   
   else if (i <= 5) {
      buttons[i].setAttribute("style", "background-color:#0000cc; border:none; color:white; border-radius:20px; display:block; font-size:20px; text-align:left; padding:15px; cursor:pointer; margin:10px; width:300px;");
   }

   else {
      buttons[i].setAttribute("style", "background-color:#00cc99; border:none; color:white; border-radius:20px; display:block; font-size:20px; text-align:center; padding:15px; cursor:pointer; margin:10px; width:200px;");
   } 
}



// Quiz Questions and Answers
var questionsArray = [
    { 
      questionNum: 1,
      question: "Which of the following is NOT a JavaScript data type?",
       A: "Number",
       B: "Double",
       C: "Boolean",
       D: "String",
       E: "None of the above",
       rightAnswer: "B"
    },
    { 
      questionNum: 2,
      question: "What comparison operator is used to test if two values are equal and of the same data type?",
       A: "==",
       B: "=",
       C: "===",
       D: "=== &&",
       E: "None of the above",
       rightAnswer: "C"
    },
    { 
      questionNum: 3,
      question: "Which of the below values are truthy (evaluate to true)?",
       A: "0",
       B: "5",
       C: "' ' (an empty string)",
       D: "NaN",
       E: "None of the above",
       rightAnswer: "B"
    },
    { 
      questionNum: 4,
      question: "Which of the below values are falsy (evaluate to false)?",
       A: "[ ] (an empty array",
       B: "{ } (an empty object)",
       C: "orca",
       D: "'0'",
       E: "None of the above",
       rightAnswer: "E"
    },
    { 
      questionNum: 5,
      question: "What is the correct keyword to use to end a switch statement or for loop?",
       A: "skip",
       B: "stop",
       C: "halt",
       D: "break",
       E: "None of the above",
       rightAnswer: "D"
    },
    { 
      questionNum: 6,
      question: "Which of the following is a not a string method?",
       A: "splice()",
       B: "indexOf()",
       C: "toUpperCase()",
       D: "trim()",
       E: "None of the above",
       rightAnswer: "A"
    },
    { 
      questionNum: 7,
      question: "Which of the following array methods would you use to add to the end of an array?",
       A: "",
       B: "shift()",
       C: "pop()",
       D: "push()",
       E: "None of the above",
       rightAnswer: "D"
    },
    { 
      questionNum: 8,
      question: "Which of the following does not have the data type of object?",
       A: "Object",
       B: "Function",
       C: "Array",
       D: "null",
       E: "None of the above",
       rightAnswer: "B"
    },
    { 
      questionNum: 9,
      question: "Which of the following is not a component of the Document Object Model tree?",
       A: "Root Element",
       B: "Sibling Element",
       C: "Cousin Element",
       D: "Child Element",
       E: "None of the above",
       rightAnswer: "C"
    },
    { 
      questionNum: 10,
      question: "Which of the following is not a valid parameter for a function?",
       A: "Operator",
       B: "String",
       C: "Number",  
       D: "Boolean",
       E: "None of the above",
       rightAnswer: "A"
    }
];

populateQuiz(questionsArray);

var i = 0;

//populateQuiz(questionsArray);
function populateQuiz() {
      
      console.log(i);

      setTimeout (function() {

            questionNumber = questionsArray[i].questionNum;
            console.log("The current question is " + questionNumber);
      
            questionHeader.textContent = `Question No. ${questionNumber}`;

            askQuestion.textContent = questionsArray[i].question;
            console.log(askQuestion.innerText);

            answerA.textContent = questionsArray[i].A;
            console.log(answerA.innerText);

            answerB.textContent = questionsArray[i].B;
            console.log(answerB.innerText);
   
            answerC.textContent = questionsArray[i].C;
            console.log(answerC.innerText);

            answerD.textContent = questionsArray[i].D;
            console.log(answerD.innerText);

            answerE.textContent = questionsArray[i].E;
            console.log(answerE.innerText);

            correctAnswer = questionsArray[i].rightAnswer;

            switch (correctAnswer) {
               case "A":   answerFeedback.textContent = `The correct answer is "${questionsArray[i].A}".`;
                                 break;
      
               case "B":   answerFeedback.textContent = `The correct answer is "${questionsArray[i].B}".`;
                                 break;
      
               case "C":   answerFeedback.textContent = `The correct answer is "${questionsArray[i].C}".`;
                                 break;
                     
               case "D":   answerFeedback.textContent = `The correct answer is "${questionsArray[i].D}".`;
                                 break;

               case "E":   answerFeedback.textContent = `The correct answer is "${questionsArray[i].E}".`;
                                 break;
            }

            i++;

            if (i < 10) {
               populateQuiz();               
            }

      }, 30000 );        
    }
//}
         

