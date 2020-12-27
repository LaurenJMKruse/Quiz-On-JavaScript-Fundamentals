// *************************************************
// ELEMENTS

// 01. Elements for Shell
const background = document.querySelector('.background');
const body = document.querySelector('.body');
const container = document.createElement('div');

// 02. Elements for View 1: Welcome Page
const welcomeDiv = document.createElement('div');
const welcomeMessage = document.createElement('h2');
const instructionsHeader = document.createElement('h3');
const instructionsList = document.createElement('ul');
const instruction0 = document.createElement('li');
const instruction1 = document.createElement('li');
const instruction2 = document.createElement('li');
const instruction3 = document.createElement('li');
const instruction4 = document.createElement('li');
const instruction5 = document.createElement('li');
const startButton = document.createElement('button');

// 03. Elements for View 2: Quiz Page
// A. quizDiv
const quizDiv = document.createElement('div');
let questionCount = document.createElement('h2');
let questionPlaceholder = document.createElement('h3');
let answerADiv = document.createElement('div');
let answerAPlaceholder = document.createElement('button');
let answerAFeedback = document.createElement('h4');
let answerBDiv = document.createElement('div');
let answerBPlaceholder = document.createElement('button');
let answerBFeedback = document.createElement('h4');
let answerCDiv = document.createElement('div');
let answerCPlaceholder = document.createElement('button');
let answerCFeedback = document.createElement('h4');
let answerDDiv = document.createElement('div');
let answerDPlaceholder = document.createElement('button');
let answerDFeedback = document.createElement('h4');
let answerEDiv = document.createElement('div');
let answerEPlaceholder = document.createElement('button');
let answerEFeedback = document.createElement('h4');

// B. timerDiv 
const timerDiv = document.createElement('div');
const timerHeader = document.createElement('h2');
let timerPlaceholder = document.createElement('p');


// 04. Elements for View 4: Time's Up!
const timesUpDiv = document.createElement('div');
const timesUpHeader = document.createElement('h1');


// 05. Elements for View 3: Score Page
const scoreContainer = document.createElement('div');
const formDiv = document.createElement('div');
const initialsMessage = document.createElement('h3');
const initialsForm = document.createElement('form');
let initialsInput = document.createElement('input');
const submitButton = document.createElement('button');
const highScoresDiv = document.createElement('div');
const highScoresHeader = document.createElement('h3');
const allScoresDiv = document.createElement('div');
const allScoresHeader = document.createElement('h3');
const clearScoresButton = document.createElement('button');
const retakeQuizButton = document.createElement('button');


// *************************************************
// VARIABLES
let buttons = document.getElementsByTagName('button');
let feedbackMessages = document.getElementsByTagName('h4');
let currentQuestion = 0;
let secondsRemaining = 10;
let points = 0;
let answersRight = 0;
let answersWrong = 0;
let questionsMissed = 0;
let questionInterval;
let buttonClickCount = 0;


// QUIZ ARRAY -- Questions and Answers
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
       answer: "splice()"
    },
    { 
      questionNum: 7,
      question: "Which of the following methods would you use to add to the end of an array?",
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
       C: "Head Element",
       D: "Child Element",
       E: "None of the above",
       answer: "Head Element"
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


// *************************************************
// Functions

// 01. Shell attributes and assembly
function shellSetUp() {
    // Shell Attributes
    // To do: Add @media for small screen
    background.setAttribute('style', 'min-height:100%; margin:0; padding:0; background-image:url(./Assets/JavaScript-Wallpaper.png); background-size:cover; background-repeat:no-repeat; background-position:center center; background-attachment:fixed; border:none; background-color:black;');

    body.setAttribute('style', 'position:relative; top:10px; min-height:100%;');

    container.setAttribute('style', 'display:flex; flex-direction:column; justify-content:center;');

    // Shell Assembly
    document.body.appendChild(container);
};




// 02. View 1: Welcome Page
function setUpWelcome() {
    // A. Welcome Page Attributes
    welcomeDiv.setAttribute('style', 'height:400px; width:60%; margin-left:auto; margin-right:auto; position:relative; top:60px; border-style:solid; border-weight:3px; border-radius:20px; border-color:#cf1717; background-color:black; color:white; font-family:century gothic; padding-bottom:20px;');
    welcomeMessage.setAttribute('style', 'text-align:center; color:white; margin:30px;');
    instructionsHeader.setAttribute('style', 'width:80%; margin-left:auto; margin-right:auto; margin-top:40px;');
    instructionsList.setAttribute('style', 'width:80%; margin-left:auto; margin-right:auto; font-size:15px; list-style-type:square; line-height:1.85em;');
    startButton.setAttribute('style', 'background-color:black; border-style:solid; border-weight:3px; border-radius:40px; border-color:#cf1717; color:#cf1717; font-family:century gothic; font-size:18px; font-weight:bold; display:block; text-align:center;  padding-top:15px; padding-bottom:15px; padding-left:25px; padding-right:25px; cursor:pointer; margin-left:auto; margin-right:auto; margin-top:30px;');

    // B. Welcome Page Content
    welcomeMessage.innerText = 'Test your Basic JavaScript Skills';
    instructionsHeader.innerText = 'Instructions';
    instruction0.innerText = 'Answer 10 questions';
    instruction1.innerText = 'You have 10 seconds per question';
    instruction2.innerText = 'Answers are multiple choice';
    instruction3.innerText = 'Click the button with your best answer';
    instruction4.innerText = 'Each correct answer is worth 5 points';
    instruction5.innerText = 'Tallies of 35 points and up are added to the High Score list';
    startButton.innerText = 'Begin Quiz';

    // C. Welcome Page Assembly
    container.appendChild(welcomeDiv);
    welcomeDiv.appendChild(welcomeMessage);
    welcomeDiv.appendChild(instructionsHeader);
    welcomeDiv.appendChild(instructionsList);
    instructionsList.appendChild(instruction0);
    instructionsList.appendChild(instruction1);
    instructionsList.appendChild(instruction2);
    instructionsList.appendChild(instruction3);
    instructionsList.appendChild(instruction4);
    instructionsList.appendChild(instruction5);
    welcomeDiv.appendChild(startButton);
};

// 03. Transition to Quiz Page
startButton.addEventListener("click", function() {
    welcomeDiv.setAttribute('style', 'display:none');
    setUpQuiz();
});

// 04. View 2: Quiz Page
function setUpQuiz() {
    // A. Quiz Page Attributes
    // i. timerDiv
    timerDiv.setAttribute('style', 'height:50px; width:150px; position:absolute; top:30px; right:68px; margin-bottom:30px; border-style:solid; border-weight:3px; border-radius:20px; border-color:#cf1717; background-color:black; color:white; font-family:century gothic; font-weight:bold;');
    timerHeader.setAttribute('style', 'position:relative; display:inline; text-align:left; margin-left:15px; color:#cf1717');
    timerPlaceholder.setAttribute('style', 'display:inline-block; position:relative; left:15px; text-align:right; font-size:18px; margin-right:20px;');
    
    // ii. quizDiv
    quizDiv.setAttribute('style', 'max-height:420px; width:85%; margin-top:20px; margin-left:auto; margin-right:auto; position:relative; top:100px; border-style:solid; border-weight:3px; border-radius:20px; border-color:#00b386; background-color:black; color:white; font-family:century gothic; padding-bottom:20px;');
    questionCount.setAttribute('style', 'color:white; margin-top:15px; margin-left:30px; margin-bottom:15px;');
    questionPlaceholder.setAttribute('style', 'color:white; margin-left:30px; width:85%;');
    answerAPlaceholder.setAttribute('id', 'responseA1');
    answerAFeedback.setAttribute('id', 'responseA2');
    answerBPlaceholder.setAttribute('id', 'responseB1');
    answerBFeedback.setAttribute('id', 'responseB2');
    answerCPlaceholder.setAttribute('id', 'responseC1');
    answerCFeedback.setAttribute('id', 'responseC2');
    answerDPlaceholder.setAttribute('id', 'responseD1');
    answerDFeedback.setAttribute('id', 'responseD2');
    answerEPlaceholder.setAttribute('id', 'responseE1');
    answerEFeedback.setAttribute('id', 'responseE2');

    // B. Quiz Page Content
    // i. timerDiv
    timerHeader.textContent = 'Timer:';
    timerPlaceholder.textContent = '0:10';

    // ii. quizDiv - See function populateQuiz()  
    
    // C. Quiz Page Assembly
    // i. timerDiv
    container.appendChild(timerDiv);
    timerDiv.appendChild(timerHeader);
    timerDiv.appendChild(timerPlaceholder);

    // ii. quizDiv
    container.appendChild(quizDiv);
    quizDiv.appendChild(questionCount);
    quizDiv.appendChild(questionPlaceholder);
    quizDiv.appendChild(answerADiv);
    answerADiv.appendChild(answerAPlaceholder);
    answerADiv.appendChild(answerAFeedback);
    quizDiv.appendChild(answerBDiv);
    answerBDiv.appendChild(answerBPlaceholder);
    answerBDiv.appendChild(answerBFeedback);
    quizDiv.appendChild(answerCDiv);
    answerCDiv.appendChild(answerCPlaceholder);
    answerCDiv.appendChild(answerCFeedback);
    quizDiv.appendChild(answerDDiv);
    answerDDiv.appendChild(answerDPlaceholder);
    answerDDiv.appendChild(answerDFeedback);
    quizDiv.appendChild(answerEDiv);
    answerEDiv.appendChild(answerEPlaceholder);
    answerEDiv.appendChild(answerEFeedback);

    // D. Processes
    // i. Quiz Button Set Up
    quizButtonsSetUp();
    // ii. Populate First Question
    populateQuiz();
    
    // iv. Get User's Answer
    checkAnswer();
    currentQuestion += 1;
    // v. Answer Feedback

    // vi. Start Timer for Rest of Quiz
    askQuestion(); 
};

// 05. Quiz Buttons Formatting (Before Being Clicked)
function quizButtonsSetUp() {
    for (let i = 1; i < buttons.length; i++) {
        buttons[i].setAttribute('style', 'background-color:black; border-style:solid; border-color:#00b386; color:#00b386; font-family:century gothic; font-weight:bold; border-radius:20px; display:inline; font-size:15px; text-align:left; padding-left:20px; padding-top:10px; padding-bottom:10px; cursor:pointer; margin-left:30px; margin-bottom:20px; width:200px; input:focus; outline:0; outline-style:none; outline-width:0;');
    }
    for (let j = 0; j < feedbackMessages.length; j++) {
        feedbackMessages[j].setAttribute('style', 'width:15%; position:relative; left:100px; display:inline;');
        feedbackMessages[j].textContent = '';
    }    
};

// 06. Populating quizDiv with Questions
function populateQuiz() {
    
    let quizData = questionsArray[currentQuestion];

    questionNumber = quizData.questionNum;

    questionCount.textContent = `Question ${questionNumber}`;
    
    questionPlaceholder.textContent = quizData.question;

    answerAPlaceholder.textContent = quizData.A;

    answerBPlaceholder.textContent = quizData.B;

    answerCPlaceholder.textContent = quizData.C;

    answerDPlaceholder.textContent = quizData.D;

    answerEPlaceholder.textContent = quizData.E;
};


function askQuestion() {
    questionInterval = setInterval(function() {

        secondsRemaining--;

        if ((secondsRemaining > 0) && (secondsRemaining < 10)) {
            timerPlaceholder.textContent = `0:0${secondsRemaining}`;
        }

        if (secondsRemaining === 0) {
            if (currentQuestion <= 9) {
            goToNextQuestion();            
            }
            else if (currentQuestion === 10) {
                clearInterval(questionInterval);
                console.log(`This is the last question.`);
                timerDiv.setAttribute('style', 'display:none');
                quizDiv.setAttribute('style', 'display:none');
                timesUpMessage();
            }
        }
    }, 1000);
};

function goToNextQuestion() {
    if (currentQuestion === 10) {
        clearInterval(questionInterval);
        console.log(`This is the last question.`);
        timerDiv.setAttribute('style', 'display:none');
        quizDiv.setAttribute('style', 'display:none');
        timesUpMessage(); 
    } else {
        clearInterval(questionInterval);
        quizButtonsSetUp();
        populateQuiz();
        askQuestion();
        checkAnswer();
        currentQuestion += 1;
        secondsRemaining = 10;
        timerPlaceholder.textContent = `0:10`;
    }
};


// Check user's answer
function checkAnswer() {
    let answerData = questionsArray[currentQuestion];
    let rightAnswer = answerData.answer;
    let clickedButton;
           
    console.log(`The correct answer is: ${rightAnswer}`);
    
    function generatingIterator() {
        let iterator = 1;
        return iterator;
    }

    function generateCorrectAnswer(questionNum) {
        let rightAnswersArray = ['Double', '===', '5 (the number)', 'None of the above', 'break', 'splice()', 'push()', 'Function', 'Head Element', 'Operator'];
        questionNum -= 1;
        console.log(`questionNum ${questionNum} answer is ${rightAnswersArray[questionNum]}.`);
        return rightAnswersArray[questionNum];
    }    

    for (let index = generatingIterator(); index < buttons.length; index++) {
        buttons[index].onclick = function (event) {
            let goodAnswer = generateCorrectAnswer(questionNumber);
            clickedButton = event.target.innerText;
            buttonClickCount += 1;
               
            buttons[1].disabled = true;
            buttons[2].disabled = true;
            buttons[3].disabled = true;
            buttons[4].disabled = true;
            buttons[5].disabled = true;

            if (clickedButton === goodAnswer) {
                console.log(`The user got #${questionNumber} right! The answer is ${goodAnswer}!`);
                answersRight++;
                points += 5;
                console.log(`Points: ${points}    Number Right: ${answersRight}`);
            
                buttons[index].setAttribute('style', 'background-color:green; border-style:solid; border-color:#00b386; color:#00b386; font-family:century gothic; font-weight:bold; border-radius:20px; display:inline; font-size:15px; text-align:left; padding-left:20px; padding-top:10px; padding-bottom:10px; cursor:pointer; margin-left:30px; margin-bottom:20px; margin-right:20px; width:200px; input:focus; outline:0; outline-style:none; outline-width:0;');
        
                feedbackMessages[index - 1].textContent = 'CORRECT';    
                
                setTimeout(function() { 
                    goToNextQuestion();
                }, 1500);

            } else {
                    console.log(`The user got #${questionNumber} wrong! The answer is ${goodAnswer}!`);
                    answersWrong++;
                    console.log(`Points: ${points}    Number Wrong: ${answersWrong}`);
            
                    buttons[index].setAttribute('style', 'background-color:red; border-style:solid; border-color:#00b386; color:#00b386; font-family:century gothic; font-weight:bold; border-radius:20px; display:inline; font-size:15px; text-align:left; padding-left:20px; padding-top:10px; padding-bottom:10px; cursor:pointer; margin-left:30px; margin-bottom:20px; width:200px; margin-right:20px; input:focus; outline:0; outline-style:none; outline-width:0;'); 

                    feedbackMessages[index - 1].textContent = 'INCORRECT';
    
                    setTimeout(function() { 
                        goToNextQuestion();
                    }, 1500);             
                    
                }       
        };    
    }
    
    buttons[1].disabled = false;
    buttons[2].disabled = false;
    buttons[3].disabled = false;
    buttons[4].disabled = false;
    buttons[5].disabled = false;
};



// FIX TEXT ALIGNMENT
function timesUpMessage() {
    // A. Time's Up Page Attributes
    timesUpDiv.setAttribute('style', 'height:200px; width:65%;  margin-left:auto; margin-right:auto; position:relative; top:100px; border-style:solid; border-weight:3px; border-radius:20px; border-color:black; background-color:#cf1717; color:white; font-family:century gothic; padding-top:20px; padding-bottom:20px;');
    timesUpHeader.setAttribute('style', 'margin:0; position:absolute; top:50%; left:10%; -ms-transform:translateY(-50%); transform:translateY(-50%); text-align:center; color:white; font-size:100px;');

    // B. Time's Up Page Content
    timesUpHeader.textContent = `TIME'S UP!`;

    // C. Time's Up Assembly
    container.appendChild(timesUpDiv);
    timesUpDiv.appendChild(timesUpHeader);

    setTimeout(function() { 
        timesUpDiv.setAttribute('style', 'display:none');
        setUpScores();
    }, 5000);
};


// Score Page Set Up
function setUpScores() {
    // A. Score Page Attributes
    // i. scoreContainer
    scoreContainer.setAttribute('style', 'height:400px; width:85%; margin-top:20px; margin-left:auto; margin-right:auto; position:relative; top:100px; border-style:solid; border-weight:3px; border-radius:20px; border-color:#ff9900; background-color:black; color:white; font-family:century gothic; padding-bottom:20px;');
    
    // ii. Form for user to submit initials
    formDiv.setAttribute('style', 'height:250px; width:35%; margin-top:20px; display:inline; border-style:solid; border-weight:3px; border-radius:20px; border-color:#ff9900; background-color:black; color:white; font-family:century gothic; padding-bottom:20px;');
    initialsMessage.setAttribute('style', 'color:red');
    initialsForm.setAttribute('style', 'background-color:blue');
    initialsInput.setAttribute('type', 'text');
    initialsInput.setAttribute('placeholder', 'Enter your initials here');
    submitButton.setAttribute('style', 'background-color:black; border-style:solid; border-weight:3px; border-radius:40px; border-color:#ffad33; color:#ffad33; font-family:century gothic; font-size:18px; font-weight:bold; display:inline-block; text-align:center;  padding-top:15px; padding-bottom:15px; padding-left:25px; padding-right:25px; cursor:pointer; margin-left:auto; margin-right:auto; margin-top:30px;');

    // iii. highScoresDiv
    highScoresDiv.setAttribute('style', 'height:250px; width:35%; margin-top:20px; display:inline; border-style:solid; border-weight:3px; border-radius:20px; border-color:#ff9900; background-color:black; color:white; font-family:century gothic; padding-bottom:20px;');
    highScoresHeader.setAttribute('style', 'display:inline');
    highScoresHeader.textContent = 'High Scores';

    // iv. allScoresDiv
    allScoresDiv.setAttribute('style','height:250px; width:35%; margin-top:20px; display:inline; border-style:solid; border-weight:3px; border-radius:20px; border-color:#ffad33; background-color:black; color:white; font-family:century gothic; padding-bottom:20px;');
    allScoresHeader.setAttribute('style', 'display:inline');
    allScoresHeader.textContent = 'All Scores';

    // v. Buttons to Clear Scores and Retake Quiz
    clearScoresButton.setAttribute('style', 'background-color:black; border-style:solid; border-weight:3px; border-radius:40px; border-color:#ffad33; color:#ffad33; font-family:century gothic; font-size:18px; font-weight:bold; display:inline-block; text-align:center;  padding-top:15px; padding-bottom:15px; padding-left:25px; padding-right:25px; cursor:pointer; margin-left:auto; margin-right:auto; margin-top:30px;');
    clearScoresButton.textContent = 'Clear Scores';

    retakeQuizButton.setAttribute('style', 'background-color:black; border-style:solid; border-weight:3px; border-radius:40px; border-color:#ffad33; color:#ffad33; font-family:century gothic; font-size:18px; font-weight:bold; display:inline-block; text-align:center;  padding-top:15px; padding-bottom:15px; padding-left:25px; padding-right:25px; cursor:pointer; margin-left:auto; margin-right:auto; margin-top:30px;');
    retakeQuizButton.textContent = 'Retake Quiz';

    if ((buttonClickCount < 10)) {
        questionsMissed = 10 - buttonClickCount;
        answersWrong += questionsMissed;
    }

    console.log(`Final totals:    Points: ${points}     Answers Right: ${answersRight}     Answers Wrong: ${answersWrong}       Questions Skipped: ${questionsMissed}`);


    container.appendChild(scoreContainer);
    scoreContainer.appendChild(formDiv);
    formDiv.appendChild(initialsMessage);
    formDiv.appendChild(initialsForm);
    initialsForm.appendChild(initialsInput);
    initialsForm.appendChild(submitButton);
    scoreContainer.appendChild(highScoresDiv);
    highScoresDiv.appendChild(highScoresHeader);
    scoreContainer.appendChild(allScoresDiv);
    allScoresDiv.appendChild(allScoresHeader);
    scoreContainer.appendChild(clearScoresButton);
    scoreContainer.appendChild(retakeQuizButton);


    // 03. Transition to Welcome Page
    retakeQuizButton.addEventListener("click", function() {
        scoreContainer.setAttribute('style', 'display:none');
        currentQuestion = 0;
        secondsRemaining = 10;
        points = 0;
        answersRight = 0;
        answersWrong = 0;
        questionsMissed = 0;
        buttonClickCount = 0;
        retakeQuizButton.remove();
        clearScoresButton.remove();
        buttons = document.getElementsByTagName('button');
        shellSetUp();
        setUpWelcome();
        });

};




















// *************************************************
// PROCESSES
shellSetUp();
setUpWelcome();