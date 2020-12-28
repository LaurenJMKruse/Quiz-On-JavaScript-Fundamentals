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


// 04. Elements for View 3: Time's Up!
const timesUpDiv = document.createElement('div');
const timesUpHeader = document.createElement('h1');


// 05. Elements for View 4: Form Page
const formDiv = document.createElement('div');
let pointsMessage = document.createElement('h3');
const initialsMessage = document.createElement('h5');
const initialsForm = document.createElement('form');
let initialsInput = document.createElement('input');
const formButtonDiv = document.createElement('div');
const submitButton = document.createElement('button');


// 06. Elements for View 5: Score Page
const scoreContainer = document.createElement('div');
const highScoresDiv = document.createElement('div');
const highScoresHeader = document.createElement('h3');
let highScoresTable = document.createElement('table');
let highScoresTableHeaderRow = document.createElement('tr');
let highScoresTableInitialsColumn = document.createElement('th');
let highScoresTablePointsColumn = document.createElement('th');
let highScoresTableRightColumn = document.createElement('th');
let highScoresTableWrongColumn = document.createElement('th');
let highScoresTableMissedColumn = document.createElement('th');
let highScoresTableInputRow0 = document.createElement('tr');
let highScoresTableInitials0 = document.createElement('td');
let highScoresTablePoints0 = document.createElement('td');
let highScoresTableRight0 = document.createElement('td');
let highScoresTableWrong0 = document.createElement('td');
let highScoresTableMissed0 = document.createElement('td');

const allScoresDiv = document.createElement('div');
const allScoresHeader = document.createElement('h3');
let allScoresTable = document.createElement('table');
let allScoresTableHeaderRow = document.createElement('tr');
let allScoresTableInitialsColumn = document.createElement('th');
let allScoresTablePointsColumn = document.createElement('th');
let allScoresTableRightColumn = document.createElement('th');
let allScoresTableWrongColumn = document.createElement('th');
let allScoresTableMissedColumn = document.createElement('th');
let allScoresTableInputRow0 = document.createElement('tr');
let allScoresTableInitials0 = document.createElement('td');
let allScoresTablePoints0 = document.createElement('td');
let allScoresTableRight0 = document.createElement('td');
let allScoresTableWrong0 = document.createElement('td');
let allScoresTableMissed0 = document.createElement('td');

const scoresButtonDiv = document.createElement('div');
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
let highScoresTableRowCount = 0;
let allScoresTableRowCount = 0;


// *************************************************
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
// FUNCTIONS

// 01. Shell attributes and assembly
function shellSetUp() {
    // Shell attributes
    background.setAttribute('style', 'min-height:100%; margin:0; padding:0; background-image:url(./Assets/JavaScript-Wallpaper.png); background-size:cover; background-repeat:no-repeat; background-position:center center; background-attachment:fixed; border:none; background-color:black;');

    // Body attributes
    body.setAttribute('style', 'position:relative; top:10px; min-height:100%;');

    // Container attributes
    container.setAttribute('style', 'display:flex; flex-direction:column; justify-content:center;');

    // Shell assembly
    document.body.appendChild(container);
};

// 02. View 1: Welcome Page
function setUpWelcome() {
    // A. Welcome Page attributes
    welcomeDiv.setAttribute('style', 'height:400px; width:60%; margin-left:auto; margin-right:auto; position:relative; top:60px; border-style:solid; border-weight:3px; border-radius:20px; border-color:#cf1717; background-color:black; color:white; font-family:century gothic; padding-bottom:20px;');
    welcomeMessage.setAttribute('style', 'text-align:center; color:white; margin:30px;');
    instructionsHeader.setAttribute('style', 'width:80%; margin-left:auto; margin-right:auto; margin-top:40px;');
    instructionsList.setAttribute('style', 'width:80%; margin-left:auto; margin-right:auto; font-size:15px; list-style-type:square; line-height:1.85em;');
    startButton.setAttribute('style', 'background-color:black; border-style:solid; border-weight:3px; border-radius:40px; border-color:#cf1717; color:#cf1717; font-family:century gothic; font-size:18px; font-weight:bold; display:block; text-align:center;  padding-top:15px; padding-bottom:15px; padding-left:25px; padding-right:25px; cursor:pointer; margin-left:auto; margin-right:auto; margin-top:30px;');

    // B. Welcome Page content
    welcomeMessage.innerText = 'Test your Basic JavaScript Skills';
    instructionsHeader.innerText = 'Instructions';
    instruction0.innerText = 'Answer 10 questions';
    instruction1.innerText = 'You have 10 seconds per question';
    instruction2.innerText = 'Answers are multiple choice';
    instruction3.innerText = 'Click the button with your best answer';
    instruction4.innerText = 'Each correct answer is worth 5 points';
    instruction5.innerText = 'Tallies of 80 points and up are added to the High Score list';
    startButton.innerText = 'Begin Quiz';

    // C. Welcome Page assembly
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
    // A. Quiz Page attributes
    // i. timerDiv attributes
    timerDiv.setAttribute('style', 'height:50px; width:150px; position:absolute; top:30px; right:68px; margin-bottom:30px; border-style:solid; border-weight:3px; border-radius:20px; border-color:#cf1717; background-color:black; color:white; font-family:century gothic; font-weight:bold;');
    timerHeader.setAttribute('style', 'position:relative; display:inline; text-align:left; margin-left:15px; color:#cf1717');
    timerPlaceholder.setAttribute('style', 'display:inline-block; position:relative; left:15px; text-align:right; font-size:18px; margin-right:20px;');
    
    // ii. quizDiv attributes
    quizDiv.setAttribute('style', 'max-height:420px; width:85%; margin-top:20px; margin-left:auto; margin-right:auto; position:relative; top:100px; border-style:solid; border-weight:3px; border-radius:20px; border-color:#00b386; background-color:black; color:white; font-family:century gothic; padding-bottom:20px;');
    questionCount.setAttribute('style', 'color:white; margin-top:15px; margin-left:30px; margin-bottom:15px;');
    questionPlaceholder.setAttribute('style', 'color:white; margin-left:30px; width:85%;');

    // B. Quiz Page content    
    // i. timerDiv content
    timerHeader.textContent = 'Timer:';
    timerPlaceholder.textContent = '0:10';

    // ii. quizDiv content - See function populateQuiz() and questionsArray  
        
    // C. Quiz Page assembly
    // i. timerDiv assembly
    container.appendChild(timerDiv);
    timerDiv.appendChild(timerHeader);
    timerDiv.appendChild(timerPlaceholder);

    // ii. quizDiv assembly
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

    // D. Initial processes
    // i. Quiz buttons set up
    quizButtonsSetUp();

    // ii. Populate first question
    populateQuiz();
    
    // iv. Obtain user's answer
    checkAnswer();
    currentQuestion += 1;
        
    // v. Initiate Timer
    askQuestion(); 
};

// 05. Quiz buttons formatting (appearance prior to being clicked)
function quizButtonsSetUp() {
    for (let i = 1; i < buttons.length; i++) {
        buttons[i].setAttribute('style', 'background-color:black; border-style:solid; border-color:#00b386; color:#00b386; font-family:century gothic; font-weight:bold; border-radius:20px; display:inline; font-size:15px; text-align:left; padding-left:20px; padding-top:10px; padding-bottom:10px; cursor:pointer; margin-left:30px; margin-bottom:20px; width:200px; input:focus; outline:0; outline-style:none; outline-width:0;');
    }
    for (let j = 0; j < feedbackMessages.length; j++) {
        feedbackMessages[j].setAttribute('style', 'width:15%; position:relative; left:100px; display:inline;');
        feedbackMessages[j].textContent = '';
    }    
};

// 06. Populating quizDiv with questions
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

// 07. Main process -- Holds timer
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

// 08. Check user's answer
function checkAnswer() {
    // A. Variables
    let answerData = questionsArray[currentQuestion];
    let rightAnswer = answerData.answer;
    let clickedButton;
           
    console.log(`The correct answer is: ${rightAnswer}`);
    
    // B. Generate iterator for quiz buttons
    function generatingIterator() {
        let iterator = 1;
        return iterator;
    }

    // C. Obtain correct answer for current question
    function generateCorrectAnswer(questionNum) {
        let rightAnswersArray = ['Double', '===', '5 (the number)', 'None of the above', 'break', 'splice()', 'push()', 'Function', 'Head Element', 'Operator'];
        questionNum -= 1;
        console.log(`questionNum ${questionNum} answer is ${rightAnswersArray[questionNum]}.`);
        return rightAnswersArray[questionNum];
    }    

    // D. Obtain user's answer and determine button behavior upon click
    for (let index = generatingIterator(); index < buttons.length; index++) {
        buttons[index].onclick = function (event) {
            let goodAnswer = generateCorrectAnswer(questionNumber);
            clickedButton = event.target.innerText;
            buttonClickCount += 1;
             
            // i. Disable buttons after click for current question
            buttons[1].disabled = true;
            buttons[2].disabled = true;
            buttons[3].disabled = true;
            buttons[4].disabled = true;
            buttons[5].disabled = true;

            // ii. Provide feedback for user's answer; update totals
            if (clickedButton === goodAnswer) {
                console.log(`The user got #${questionNumber} right! The answer is ${goodAnswer}!`);
                answersRight++;
                points += 10;
                console.log(`Points: ${points}    Number Right: ${answersRight}`);
            
                buttons[index].setAttribute('style', 'background-color:green; border-style:solid; border-color:#00b386; color:#00b386; font-family:century gothic; font-weight:bold; border-radius:20px; display:inline; font-size:15px; text-align:left; padding-left:20px; padding-top:10px; padding-bottom:10px; cursor:pointer; margin-left:30px; margin-bottom:20px; margin-right:20px; width:200px; input:focus; outline:0; outline-style:none; outline-width:0;');
        
                feedbackMessages[index - 1].textContent = 'CORRECT';
                
                // Delay to show feedback, as timer restarts upon answer selection
                setTimeout(function() { 
                    goToNextQuestion();
                }, 1200);

            } else {
                console.log(`The user got #${questionNumber} wrong! The answer is ${goodAnswer}!`);
                answersWrong++;
                console.log(`Points: ${points}    Number Wrong: ${answersWrong}`);
            
                buttons[index].setAttribute('style', 'background-color:red; border-style:solid; border-color:#00b386; color:#00b386; font-family:century gothic; font-weight:bold; border-radius:20px; display:inline; font-size:15px; text-align:left; padding-left:20px; padding-top:10px; padding-bottom:10px; cursor:pointer; margin-left:30px; margin-bottom:20px; width:200px; margin-right:20px; input:focus; outline:0; outline-style:none; outline-width:0;'); 

                feedbackMessages[index - 1].textContent = 'INCORRECT';
    
                setTimeout(function() { 
                    goToNextQuestion();
                }, 1200);                 
            }       
        };    
    }
    
    // E. Re-enable buttons for next question
    buttons[1].disabled = false;
    buttons[2].disabled = false;
    buttons[3].disabled = false;
    buttons[4].disabled = false;
    buttons[5].disabled = false;
};

// 09. Question progression 
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

// 10. Calculate total wrong answers
function finalizeWrongAnswers() {
    if ((buttonClickCount < 10)) {
        questionsMissed = 10 - buttonClickCount;
        answersWrong += questionsMissed;
    }
    console.log(`Final totals:    Points: ${points}     Answers Right: ${answersRight}     Answers Wrong: ${answersWrong}       Questions Skipped: ${questionsMissed}`);
};

// 10. 'Time's Up!' message
function timesUpMessage() {
    // A. 'Time's Up!' page attributes
    timesUpDiv.setAttribute('style', 'height:200px; width:65%;  margin-left:auto; margin-right:auto; position:relative; top:100px; border-style:solid; border-weight:3px; border-radius:20px; border-color:black; background-color:#cf1717; color:white; font-family:century gothic; padding-top:20px; padding-bottom:20px;');
    timesUpHeader.setAttribute('style', 'margin:0; position:absolute; top:50%; left:10%; -ms-transform:translateY(-50%); transform:translateY(-50%); text-align:center; color:white; font-size:100px;');

    // B. 'Time's Up!' page content
    timesUpHeader.textContent = `TIME'S UP!`;

    // C. 'Time's Up!' page assembly
    container.appendChild(timesUpDiv);
    timesUpDiv.appendChild(timesUpHeader);

    // D. Processes
    // i. Obtain count for missed questions; finalize wrong answers
    finalizeWrongAnswers();

    // ii. Transition to Form page
    setTimeout(function() { 
        timesUpDiv.setAttribute('style', 'display:none');
        setUpForm();
    }, 3500);
};


// 12. Form Page set up
function setUpForm() {
    // A. Variable
    let summaryMessage = determinePointsMessage();

    // A. Form Page attributes
    formDiv.setAttribute('style', 'height:400px; width:60%; margin-left:auto; margin-right:auto; position:relative; top:60px; border-style:solid; border-weight:3px; border-radius:20px; border-color:#cf1717; background-color:black; color:white; font-family:century gothic; padding-bottom:20px;');
    initialsMessage.setAttribute('style', 'text-align:center; color:white; margin:30px;');
    initialsForm.setAttribute('style', 'background-color:blue');
    initialsInput.setAttribute('type', 'text');
    initialsInput.setAttribute('id', 'user-initials');
    submitButton.setAttribute('style', 'background-color:black; border-style:solid; border-weight:3px; border-radius:40px; border-color:#cf1717; color:#cf1717; font-family:century gothic; font-size:18px; font-weight:bold; display:block; text-align:center;  padding-top:15px; padding-bottom:15px; padding-left:25px; padding-right:25px; cursor:pointer; margin-left:auto; margin-right:auto; margin-top:30px;');

    // B. Form Page content
    pointsMessage.textContent = `You scored ${points} points! ${summaryMessage}`;
    initialsMessage.textContent = 'Enter your initials below.';
    initialsInput.setAttribute('placeholder', 'Enter your initials here');
    submitButton.textContent = 'Submit';
    
    // C. Form Page assembly
    container.appendChild(formDiv);
    formDiv.appendChild(pointsMessage);
    formDiv.appendChild(initialsMessage);
    formDiv.appendChild(initialsForm);
    formDiv.appendChild(initialsInput);
    formDiv.appendChild(formButtonDiv);
    formButtonDiv.appendChild(submitButton);

    // D. Process - Submit button
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        formDiv.setAttribute('style', 'display:none');
        setUpScores();
        }); 
};

// 11. Determine message for points scored
function determinePointsMessage() {
    let pointsMessage;
    switch (true) {
        case (points === 100):
                                                        {                        
                                                            pointsMessage = `You're an expert!`;
                                                            break;
                                                        }
                                                                      
        case (points >= 80): 
                                                        {   
                                                            pointsMessage = `You really know your stuff!`;
                                                            break;
                                                        }

        case (points >= 60): 
                                                        {
                                                            pointsMessage = `You did pretty well!`;
                                                            break;
                                                        }

        case (points >= 40):   
                                                        {
                                                            pointsMessage = `You're getting there!`;
                                                            break;
                                                        }

        case (points >= 20):    
                                                        {
                                                            pointsMessage = `Better luck next time!`;
                                                            break;
                                                        } 

        case (points >= 0):     
                                                        {
                                                            pointsMessage = `Time to hit the books!`;
                                                            break;
                                                        }
    }
    
    return pointsMessage;
};

// 12. Score Page set up
function setUpScores() {
    // A. Score Page attributes
    // i. scoreContainer
    scoreContainer.setAttribute('style', 'height:400px; width:85%; margin-top:20px; margin-left:auto; margin-right:auto; position:relative; top:100px; border-style:solid; border-weight:3px; border-radius:20px; border-color:#ff9900; background-color:black; color:white; font-family:century gothic; padding-bottom:20px;');
    
    // ii. highScoresDiv
    highScoresDiv.setAttribute('style', 'height:300px; width:40%; margin-top:20px; display:inline; border-style:solid; border-weight:3px; border-radius:20px; border-color:#ff9900; background-color:black; color:white; font-family:century gothic; padding-bottom:20px;');
    highScoresHeader.setAttribute('style', 'display:inline');    

    // iii. allScoresDiv
    allScoresDiv.setAttribute('style','height:300px; width:40%; margin-top:20px; display:inline; border-style:solid; border-weight:3px; border-radius:20px; border-color:#ffad33; background-color:black; color:white; font-family:century gothic; padding-bottom:20px;');
    allScoresHeader.setAttribute('style', 'display:inline');

    // iv. Buttons to clear tables and retake quiz
    clearScoresButton.setAttribute('style', 'background-color:black; border-style:solid; border-weight:3px; border-radius:40px; border-color:#ffad33; color:#ffad33; font-family:century gothic; font-size:18px; font-weight:bold; display:inline-block; text-align:center;  padding-top:15px; padding-bottom:15px; padding-left:25px; padding-right:25px; cursor:pointer; margin-left:auto; margin-right:auto; margin-top:30px;');
    retakeQuizButton.setAttribute('style', 'background-color:black; border-style:solid; border-weight:3px; border-radius:40px; border-color:#ffad33; color:#ffad33; font-family:century gothic; font-size:18px; font-weight:bold; display:inline-block; text-align:center;  padding-top:15px; padding-bottom:15px; padding-left:25px; padding-right:25px; cursor:pointer; margin-left:auto; margin-right:auto; margin-top:30px;');
    
    // B. Score Page content  
    highScoresHeader.textContent = 'High Scores';
    highScoresTableInitialsColumn.textContent = 'Initials';
    highScoresTablePointsColumn.textContent = 'Points';
    highScoresTableRightColumn.textContent = 'Right Answers';
    highScoresTableWrongColumn.textContent = 'Wrong Answers';
    highScoresTableMissedColumn.textContent = 'Skipped Questions';
    allScoresHeader.textContent = 'All Scores';
    allScoresTableInitialsColumn.textContent = 'Initials';
    allScoresTablePointsColumn.textContent = 'Points';
    allScoresTableRightColumn.textContent = 'Right Answers';
    allScoresTableWrongColumn.textContent = 'Wrong Answers';
    allScoresTableMissedColumn.textContent = 'Skipped Questions';

    clearScoresButton.textContent = 'Clear Scores';   
    retakeQuizButton.textContent = 'Retake Quiz';

    // C. Score Page assembly
    container.appendChild(scoreContainer);
    scoreContainer.appendChild(highScoresDiv);
    highScoresDiv.appendChild(highScoresHeader);
    highScoresDiv.appendChild(highScoresTable);
    highScoresTable.appendChild(highScoresTableHeaderRow);
    highScoresTable.appendChild(highScoresTableInitialsColumn);
    highScoresTable.appendChild(highScoresTablePointsColumn);
    highScoresTable.appendChild(highScoresTableRightColumn);
    highScoresTable.appendChild(highScoresTableWrongColumn);
    highScoresTable.appendChild(highScoresTableMissedColumn);
    highScoresTable.appendChild(highScoresTableInputRow0);
    highScoresTable.appendChild(highScoresTableInitials0);
    highScoresTable.appendChild(highScoresTablePoints0);
    highScoresTable.appendChild(highScoresTableRight0);
    highScoresTable.appendChild(highScoresTableWrong0);
    highScoresTable.appendChild(highScoresTableMissed0);
    scoreContainer.appendChild(allScoresDiv);
    allScoresDiv.appendChild(allScoresHeader);
    allScoresDiv.appendChild(allScoresTable);
    allScoresTable.appendChild(allScoresTableHeaderRow);
    allScoresTable.appendChild(allScoresTableInitialsColumn);
    allScoresTable.appendChild(allScoresTablePointsColumn);
    allScoresTable.appendChild(allScoresTableRightColumn);
    allScoresTable.appendChild(allScoresTableWrongColumn);
    allScoresTable.appendChild(allScoresTableMissedColumn);
    allScoresTable.appendChild(allScoresTableInputRow0);
    allScoresTable.appendChild(allScoresTableInitials0);
    allScoresTable.appendChild(allScoresTablePoints0);
    allScoresTable.appendChild(allScoresTableRight0);
    allScoresTable.appendChild(allScoresTableWrong0);
    allScoresTable.appendChild(allScoresTableMissed0);  
    scoreContainer.appendChild(clearScoresButton);
    scoreContainer.appendChild(retakeQuizButton);

    // D. Processes
    // i. Populate tables
    addDataToTables();

    // ii. Clear scores tables


    // ii. Transition to Welcome Page
    retakeQuizButton.addEventListener("click", function() {
        takeQuizAgain();
        });
};

// 13. Populate score tables
function addDataToTables() {
    let userInitials = document.querySelector('#user-initials');

    function addHighScoresRow() {

    };

    function addAllScoresRow() {

    };

    if (points >= 80) {
        if (highScoresTableRowCount === 0) {
            highScoresTableInitials0.textContent = userInitials.value;
            highScoresTablePoints0.textContent = points;
            highScoresTableRight0.textContent = answersRight;
            highScoresTableWrong0.textContent = answersWrong;
            highScoresTableMissed0.textContent = questionsMissed;
        } //else {
    }        
        allScoresTableInitials0.textContent = userInitials.value;
        allScoresTablePoints0.textContent = points;
        allScoresTableRight0.textContent = answersRight;
        allScoresTableWrong0.textContent = answersWrong;
        allScoresTableMissed0.textContent = questionsMissed;

        // }

    
   
};



// 13. Clear Scores

// 14. Transition to Welcome Page
function takeQuizAgain() {
    scoreContainer.setAttribute('style', 'display:none');
    currentQuestion = 0;
    secondsRemaining = 10;
    points = 0;
    answersRight = 0;
    answersWrong = 0;
    questionsMissed = 0;
    buttonClickCount = 0;
    initialsInput.value = '';
    initialsInput.setAttribute('placeholder', 'Enter your initials here');
    submitButton.remove();
    retakeQuizButton.remove();
    clearScoresButton.remove();
    buttons = document.getElementsByTagName('button');
    shellSetUp();
    setUpWelcome();
};


// *************************************************
// INITIAL PROCESSES
shellSetUp();
setUpWelcome();