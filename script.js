var buttons = document.getElementsByTagName("button");
var body = document.querySelector(".body");
body.setAttribute("style", "height:100%; margin:0; background-image:url(https://wallpapercave.com/wp/wp2465921.png); background-position: center; background-repeat:no-repeat; background-size:cover; background-color:black;")
var container = document.createElement("div");
document.body.appendChild(container);
container.setAttribute("style", "margin-left:auto; margin-right:auto;");
// Stuff that goes on every view
// Game title
var gameTitle = document.createElement("h1");
gameTitle.textContent = "JavaScript Fundamentals Quiz";
gameTitle.setAttribute("style", "text-align:center; margin-left:auto; margin-right:auto; padding:10px; width:60%; border-radius:15px; color:white; font-family:century gothic;");
container.appendChild(gameTitle);

// Timer in timerDiv
var timerDiv = document.createElement("div");
container.appendChild(timerDiv);
// timerDiv.children[0]
var timerHeader = document.createElement("h2");
timerDiv.appendChild(timerHeader);
timerHeader.textContent = "Timer";
// timerDiv.children[1]
var timerPlaceholder = document.createElement("p");
timerDiv.appendChild(timerPlaceholder);
timerDiv.setAttribute("style", "display:none");
var currentQuestion = 0;

// Welcome View Assignments
// welcomeDiv is parent div for this section
var welcomeDiv = document.createElement("div");
welcomeDiv.setAttribute("style", "width:60%; margin-left:auto; margin-right:auto; border-radius:15px; background-color:#00b386; padding-left:40px; padding-bottom:10px; padding-top:10px;");
container.appendChild(welcomeDiv);

// welcomeDiv.children[0]
var welcomeMessage = document.createElement("h2");
welcomeMessage.textContent = "Test your basic JavaScript skills!"
welcomeMessage.setAttribute("style", "margin-top:10px; margin-left:auto; margin-right:auto; text-align:center; font-family:century gothic; color:white;");
welcomeDiv.appendChild(welcomeMessage);

// welcomeDiv.children[1]
var instructionsDiv = document.createElement("div");
instructionsDiv.setAttribute("style", "color:white; font-family:century gothic;");
welcomeDiv.appendChild(instructionsDiv);
// welcomeDiv.children[1].children[0]
var instructionsHeader = document.createElement("h3");
instructionsHeader.textContent = "Instructions";
instructionsDiv.appendChild(instructionsHeader);
// welcomeDiv.children[1].children[1]
var instructionsList = document.createElement("ul");
instructionsList.setAttribute("style", "list-style-type:square");
instructionsDiv.appendChild(instructionsList);
// welcomeDiv.instructionsDiv.instructionsList.children[0]
var bullet1 = document.createElement("li");
bullet1.textContent = "There are 10 questions";
instructionsDiv.children[1].appendChild(bullet1);
// welcomeDiv.instructionsDiv.instructionsList.children[1]
var bullet2 = document.createElement("li");
bullet2.textContent = "You have 10 seconds per question";
instructionsDiv.children[1].appendChild(bullet2);
// welcomeDiv.instructionsDiv.instructionsList.children[3]
var bullet3 = document.createElement("li");
bullet3.textContent = "Answers are multiple choice";
instructionsDiv.children[1].appendChild(bullet3);
// welcomeDiv.instructionsDiv.instructionsList.children[4]
var bullet4 = document.createElement('li');
bullet4.textContent = "Click the button that has your best answer";
instructionsDiv.children[1].appendChild(bullet4);
// welcomeDiv.instructionsDiv.instructionsList.children[5]
var bullet5 = document.createElement("li");
bullet5.textContent = "Each right answer is worth 5 points";
instructionsDiv.children[1].appendChild(bullet5);
// welcomeDiv.instructionsDiv.instructionsList.children[6]
var bullet6 = document.createElement("li");
bullet6.textContent = "Can you add your initials to the High Score list?";
instructionsDiv.children[1].appendChild(bullet6);


// welcomeDiv.children[2]
var startGameButton = document.createElement("button");
startGameButton.textContent = "Begin Quiz";
startGameButton.addEventListener("click", function() {
   gameTitle.setAttribute("style", "display:none");
   welcomeDiv.setAttribute("style", "display:none");
   quizDiv.setAttribute("style", "display:' '; width:80%; margin-left:auto; margin-right:auto; border-radius:15px; background-color:#00b386; padding-left:40px; padding-bottom:10px; padding-top:10px;");
   timerDiv.setAttribute("style", "display:' '; background-color:white; color:blue; position:relative; left:100px;");
   populateQuiz();
   currentQuestion = 1;
   questionTimer(); 
     
});
welcomeDiv.appendChild(startGameButton);




// Setting up the Welcome Page view with welcomeDiv
// welcomeDiv contains 3 divs: welcomeMessage, instructionsDiv

// quizDiv is parent div for this section
var quizDiv = document.createElement("div");
container.appendChild(quizDiv);

// quizDiv.children[0]
var questionHeader = document.createElement("h2");
questionHeader.setAttribute("style", "font-family:century gothic; font-weight:bold; color:white;");
quizDiv.appendChild(questionHeader);
var questionNumber;

// quizDiv.children[1]
var askQuestion = document.createElement("h3");
askQuestion.setAttribute("style", "width:85%; font-family:century gothic; color:white; font-weight:bold;");
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



// quizDiv.responseDiv.children[1]
var correctAnswer;
var answerFeedback = document.createElement("h3");
responseDiv.appendChild(answerFeedback);

// Score View Assignments
// scoreDiv is parent div for this section
var scoreDiv = document.createElement("div");
container.appendChild(scoreDiv);

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


var userResponseButton;


var secondsRemaining = 10;










// Applying Attributes to Buttons
for (var i = 0; i < buttons.length; i++) {
   if (i === 0) {
      buttons[i].setAttribute("style", "background-color:white; font-family:century gothic; border:none; color:#cf1717; border-color:#cf1717; border-style:solid; border-width:medium; border-radius:20px; display:block; font-size:20px; text-align:center; padding:15px; cursor:pointer; margin:10px; width:200px; margin-left:auto; margin-right:auto; font-weight:bold;");
   }
   
   else if (i <= 5) {
      buttons[i].setAttribute("style", "background-color:#0000cc; border:none; color:white; font-family:century gothic; font-weight:bold; border-radius:20px; display:block; font-size:15px; text-align:left; padding-left:20px; padding-top:10px; padding-bottom:10px; cursor:pointer; margin:10px; width:185px;");
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
       answer: "Double"
    },
    { 
      questionNum: 2,
      question: "What comparison operator is used to test if two values are equal and of the same data type?",
       A: "==",
       B: "=",
       C: "===",
       D: "=== &&",
       E: "None of the above",
       answer: "==="
    },
    { 
      questionNum: 3,
      question: "Which of the below values are truthy (evaluate to true)?",
       A: "0 (the number)",
       B: "5 (the number)",
       C: `" " (an empty string)`,
       D: "NaN",
       E: "None of the above",
       answer: "5 (the number)"
    },
    { 
      questionNum: 4,
      question: "Which of the below values are falsy (evaluate to false)?",
       A: "[ ] (an empty array)",
       B: "{ } (an empty object)",
       C: `"orca"`,
       D: `"0"`,
       E: "None of the above",
       answer: "None of the above"
    },
    { 
      questionNum: 5,
      question: "What is the correct keyword to use to end a switch statement or for loop?",
       A: "skip",
       B: "stop",
       C: "halt",
       D: "break",
       E: "None of the above",
       answer: "break"
    },
    { 
      questionNum: 6,
      question: "Which of the following is a not a string method?",
       A: "splice()",
       B: "indexOf()",
       C: "toUpperCase()",
       D: "trim()",
       E: "None of the above",
       answer: "splice"
    },
    { 
      questionNum: 7,
      question: "Which of the following array methods would you use to add to the end of an array?",
       A: "fill()",
       B: "shift()",
       C: "pop()",
       D: "push()",
       E: "None of the above",
       answer: "push()"
    },
    { 
      questionNum: 8,
      question: "Which of the following does not have the data type of 'object'?",
       A: "Object",
       B: "Function",
       C: "Array",
       D: "null",
       E: "None of the above",
       answer: "Function"
    },
    { 
      questionNum: 9,
      question: "Which of the following is not a component of the Document Object Model tree?",
       A: "Root Element",
       B: "Sibling Element",
       C: "Cousin Element",
       D: "Child Element",
       E: "None of the above",
       answer: "Cousin Element"
    },
    { 
      questionNum: 10,
      question: "Which of the following is not a valid parameter for a function?",
       A: "Operator",
       B: "String",
       C: "Number",  
       D: "Boolean",
       E: "None of the above",
       answer: "Operator"
    }
];

// Welcome View Settings
timerDiv.setAttribute("style", "display:none;");
quizDiv.setAttribute("style", "display:none;");
scoreDiv.setAttribute("style", "display:none;");

// Set up transition to second view
var takeQuiz = document.querySelector("startGameButton");





function resetQuizButtons() {
   for (var i = 1; i < buttons.length - 2; i++) {
      buttons[i].setAttribute("style", "background-color:#0000cc; border:none; color:white; font-family:century gothic; font-weight:bold; border-radius:20px; display:block; font-size:15px; text-align:left; padding-left:20px; padding-top:10px; padding-bottom:10px; cursor:pointer; margin:10px; width:185px;");
   }
}

function rightAnswerButtons() {
   userResponseButton.setAttribute("style", "background-color:green; border:none; color:white; font-family:century gothic; font-weight:bold; border-radius:20px; display:block; font-size:15px; text-align:left; padding-left:20px; padding-top:10px; padding-bottom:10px; cursor:pointer; margin:10px; width:185px;");
   userResponseButton.textContent = "Correct!";
}

function wrongAnswerButtons() {
   userResponseButton.setAttribute("style", "background-color:red; border:none; color:white; font-family:century gothic; font-weight:bold; border-radius:20px; display:block; font-size:15px; text-align:left; padding-left:20px; padding-top:10px; padding-bottom:10px; cursor:pointer; margin:10px; width:185px;");
   userResponseButton.textContent = "Incorrect!";
}



// answerDiv.addEventListener("click", function(event) {
         //    var userResponseButton = event.target; 
         //    userResponseContent = event.target.textContent;
            
         
         //    //switch (event.target)
   
         //    console.log("Clicked on this button: " + userResponseButton);
         //    console.log("Clicked on this content: " + userResponseContent);
         
   
   
         //    if (userResponseContent === answersArray.rightAnswer) {
         //      rightAnswerButtons();
         //    } else {
         //       wrongAnswerButtons();
         //    }    
         // });


function questionTimer() {
   var questionInterval = setInterval (function () {
      secondsRemaining--;
      timerPlaceholder.textContent = secondsRemaining;
    
      if (secondsRemaining === 0) {
            populateQuiz();
            currentQuestion += 1;
            secondsRemaining = 3;
         }

      if (stopTimer === ) {
            clearInterval(questionInterval);
            timerPlaceholder.textContent = "Time's up!";
            quizDiv.setAttribute("style", "display:none");  
      }      

   }, 1000);
}




function populateQuiz() {

   resetQuizButtons();

   quizData = questionsArray[currentQuestion];

   questionNumber = quizData.questionNum;
   console.log("The current question is " + questionNumber);
      
   questionHeader.textContent = `Question ${questionNumber}`;

   askQuestion.textContent = quizData.question;
   
   answerA.textContent = quizData.A;
   
   answerB.textContent = quizData.B;
      
   answerC.textContent = quizData.C;

   answerD.textContent = quizData.D;

   answerE.textContent = quizData.E;

   correctAnswer = quizData.answer;
   console.log(correctAnswer);

   switch (correctAnswer) {
         case "A":   answerFeedback.textContent = `The correct answer is "${quizData.A}".`;
                           break;
      
         case "B":   answerFeedback.textContent = `The correct answer is "${quizData.B}".`;
                           break;
      
         case "C":   answerFeedback.textContent = `The correct answer is "${quizData.C}".`;
                           break;
                     
         case "D":   answerFeedback.textContent = `The correct answer is "${quizData.D}".`;
                           break;

         case "E":   answerFeedback.textContent = `The correct answer is "${quizData.E}".`;
                           break;
   }
}  

