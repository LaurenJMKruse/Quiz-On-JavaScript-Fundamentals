// *************************************************
// ELEMENTS

console.log('Line 04: Start of program - creation of elements');
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
const instruction6 = document.createElement('li');
const startButton = document.createElement('button');


// 03. Elements for View 2: Quiz Page
// A. quizDiv
// i. quizDiv elements
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

// ii. Assigning IDs to quiz answer buttons
answerAPlaceholder.setAttribute('id', 'buttonA');
answerBPlaceholder.setAttribute('id', 'buttonB');
answerCPlaceholder.setAttribute('id', 'buttonC');
answerDPlaceholder.setAttribute('id', 'buttonD');
answerEPlaceholder.setAttribute('id', 'buttonE');

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
// A. scoreContainer element
const scoreContainer = document.createElement('div');

// i. highScoresDiv elements
const highScoresDiv = document.createElement('div');
const highScoresHeader = document.createElement('h3');
let highScoresTable = document.createElement('table');
let highScoresTableHead = document.createElement('thead');
let highScoresTableHeaderRow = document.createElement('tr');
let highScoresTableInitialsColumn = document.createElement('th');
let highScoresTablePointsColumn = document.createElement('th');
let highScoresTableNumQuestionsColumn = document.createElement('th');
let highScoresTableRightColumn = document.createElement('th');
let highScoresTableWrongColumn = document.createElement('th');
let highScoresTableMissedColumn = document.createElement('th');
let highScoresTableBody = document.createElement('tbody');

// ii. allScoresDiv elements 
const allScoresDiv = document.createElement('div');
const allScoresHeader = document.createElement('h3');
let allScoresTable = document.createElement('table');
let allScoresTableHead = document.createElement('thead');
let allScoresTableHeaderRow = document.createElement('tr');
let allScoresTableInitialsColumn = document.createElement('th');
let allScoresTablePointsColumn = document.createElement('th');
let allScoresTableNumQuestionsColumn = document.createElement('th');
let allScoresTableRightColumn = document.createElement('th');
let allScoresTableWrongColumn = document.createElement('th');
let allScoresTableMissedColumn = document.createElement('th');
let allScoresTableBody = document.createElement('tbody');

// B. Score Page button elements
const scoresButtonsDiv = document.createElement('div');
const clearScoresButton = document.createElement('button');
const retakeQuizButton = document.createElement('button');


// *************************************************

console.log('Line 112: Creation of global variables');
// VARIABLES
let quizButtons;
let feedbackMessages = document.getElementsByTagName('h4');
let currentQuestion = 0;
let secondsRemainingRule = 10;
let points = 0;
let answersRight = 0;
let answersWrong = 0;
let questionsMissed = 0;
let questionInterval;
let buttonClickCount = 0;
let actualSecondsRemaining = secondsRemainingRule;
let userCount = 0;
let userCountCheck = 0;
let retakeCount = 1;
let questionsAsked = 0;
let totalQuestions = 10;
let populateScoresCount = 0;
let lastUserIDUsed;

console.log('Line 129: Creation of questionsArray and empty userDataArray');
// *************************************************
// ARRAYS
// A. Quiz Array -- Questions and Answers
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

// B. User Data Array
let userDataArray = [];


// *************************************************
// FUNCTIONS

// 01. Shell attributes and assembly
function shellSetUp() {
    console.log('Ran shellSetUp function');

    // Shell attributes
    background.setAttribute('style', 'min-height:100%; margin:0; padding:0; background-image:url(./Assets/JavaScript-Wallpaper.png); background-size:cover; background-repeat:no-repeat; background-position:center center; background-attachment:fixed; border:none; background-color:black;');

    // Body attributes
    body.setAttribute('style', 'position:relative; top:10px; min-height:100%;');

    // Container attributes
    container.setAttribute('style', 'display:flex; flex-direction:column; justify-content:center;');

    // Shell assembly
    document.body.appendChild(container);

    // *************************************************
    // INITIAL PROCESSES
    setUpWelcome();
    timesUpSetUp();
    setUpForm();
    setUpScores();

    console.log(`User Count at very beginning is ${userCount}`);
};

// 02. View 1: Welcome Page
function setUpWelcome() {
    console.log('Ran setUpWelcome function');
    // A. Welcome Page attributes
    welcomeDiv.setAttribute('class', 'welcomePage');
    welcomeDiv.setAttribute('style', 'margin-left:auto; margin-right:auto; position:relative; border-style:solid; border-width:3px; border-radius:20px; border-color:#cf1717; background-color:black; color:white; font-family:century gothic;');
    welcomeMessage.setAttribute('id', 'quiz-title');
    welcomeMessage.setAttribute('style', 'text-align:center; color:white; margin:30px;');
    instructionsHeader.setAttribute('id', 'rules-header');
    instructionsHeader.setAttribute('style', 'width:80%; text-align:left; position:relative; margin-top:40px;');
    instructionsList.setAttribute('id', 'quiz-rules');
    instructionsList.setAttribute('style', 'position:relative; font-size:15px; list-style-type:square; line-height:1.85em;');
    startButton.setAttribute('style', 'background-color:black; border-style:solid; border-width:3px; border-radius:40px; border-color:#cf1717; color:#cf1717; font-family:century gothic; font-size:18px; font-weight:bold; display:block; text-align:center;  padding-top:15px; padding-bottom:15px; padding-left:25px; padding-right:25px; cursor:pointer; margin-left:auto; margin-right:auto; margin-top:15px; margin-bottom:15px;');

    // B. Welcome Page content
    welcomeMessage.innerText = 'Test your Basic JavaScript Skills';
    instructionsHeader.innerText = 'Instructions';
    instruction0.innerText = 'There are 10 questions';
    instruction1.innerText = 'Answers are multiple choice';
    instruction2.innerText = 'Click the button with your best answer';
    instruction3.innerText = 'Each correct answer is worth 5 points';
    instruction4.innerText = 'Tallies of 80 points and up are added to the High Score list';
    instruction5.innerText = 'You have 10 seconds per question';
    instruction6.innerText = 'Each wrong answer or skipped question will result in a 2-second deduction per subsequent question(s)';
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
    instructionsList.appendChild(instruction6);
    welcomeDiv.appendChild(startButton);
    initialQuizBuild();
};

// 04. View 2: Quiz Page
function initialQuizBuild() {
    console.log('Ran initialQuizBuild function');
    // A. Quiz Page attributes
    // i. timerDiv attributes
    timerDiv.setAttribute('class', 'timerBox');
    timerDiv.setAttribute('style', 'display:none');
    timerHeader.setAttribute('style', 'position:relative; display:inline; text-align:left; margin-left:15px; color:#cf1717');
    timerPlaceholder.setAttribute('style', 'display:inline-block; position:relative; left:15px; text-align:right; font-size:18px; margin-right:20px;');

    // ii. quizDiv attributes
    quizDiv.setAttribute('class', 'quizPage');
    quizDiv.setAttribute('style', 'display:none');
    questionCount.setAttribute('style', 'color:white; margin-top:15px; margin-left:30px; margin-bottom:15px;');
    questionPlaceholder.setAttribute('style', 'color:white; margin-left:30px; width:85%;');
    answerAFeedback.setAttribute('class', 'answerFeedback');
    answerBFeedback.setAttribute('class', 'answerFeedback');
    answerCFeedback.setAttribute('class', 'answerFeedback');
    answerDFeedback.setAttribute('class', 'answerFeedback');
    answerEFeedback.setAttribute('class', 'answerFeedback');

    // B. Quiz Page content    
    // timerDiv content
    timerHeader.textContent = 'Timer:';
    
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
    
    // D. Creation of quizButtonsArray
    quizButtons = quizDiv.querySelectorAll('#buttonA, #buttonB, #buttonC, #buttonD, #buttonE')
    ;
    quizButtonsArray = Array.from(quizButtons);

    // E. Begin quiz
    transitionToQuiz();
};

// 05. Transition to Quiz Page
function transitionToQuiz() {
    console.log('Ran transitionToQuiz function');
    startButton.addEventListener("click", function() {
        welcomeDiv.setAttribute('style', 'display:none');
        
        // A. Quiz Page attributes
        // i. timerDiv attributes
        timerDiv.setAttribute('style', 'position:relative; border-style:solid; border-width:3px; border-radius:20px; border-color:#cf1717; background-color:black; color:white; font-family:century gothic; font-weight:bold;');
    
        // ii. quizDiv attributes
        quizDiv.setAttribute('style', 'margin-left:auto; margin-right:auto; border-style:solid; border-width:3px; border-radius:20px; border-color:#00b386; background-color:black; color:white; font-family:century gothic; padding-bottom:20px;');

        // B. Quiz Page content    
        // timerDiv content
        timerPlaceholder.textContent = '0:10';

        // ii. quizDiv content - See function populateQuiz() and questionsArray  
    
        // D. Processes
        // i. For first question
        if (currentQuestion === 0) {
            // i. Quiz buttons set up
            quizButtonsSetUp();
            // ii. Populate first question
            populateQuiz();
            // iii. Initiate timer
            askQuestion();
            // iv. Check user response
            checkAnswer();
            currentQuestion++;
        }
    });
    startButton.removeEventListener('click', function() {});
};

// 06. View 2: Quiz Page
function placeholderFunction() {
    console.log('Ran placeholderFunction');
};

// 07. Quiz buttons formatting (appearance prior to being clicked)
function quizButtonsSetUp() {
    console.log('Ran quizButtonsSetUp function');
    
    for (let i = 0; i < quizButtonsArray.length; i++) {
        quizButtonsArray[i].setAttribute('style', 'background-color:black; border-style:solid; border-color:#00b386; color:#00b386; font-family:century gothic; font-weight:bold; border-radius:20px; display:inline; font-size:15px; text-align:left; padding-left:20px; padding-top:10px; padding-bottom:10px; cursor:pointer; margin-left:30px; margin-bottom:20px; width:200px; input:focus; outline:0; outline-style:none; outline-width:0;');
    }

    for (let j = 0; j < feedbackMessages.length; j++) {
        feedbackMessages[j].setAttribute('style', 'width:15%; position:relative; display:inline;');
        feedbackMessages[j].textContent = '';
    }    
};

// 08. Populating quizDiv with questions
function populateQuiz() {
    console.log('Ran populateQuiz function');

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

// 09. Check user's answer
function checkAnswer() {
    console.log('Ran checkAnswer function');
    // A. Variables
    let clickedButton;
    let clickedButtonAnswer;
             
    // B. Generate iterator for quiz buttons
    function generatingIterator() {
        console.log('Ran generatingIterator function');
        let iterator = 0;
        return iterator;
    }

    // C. Obtain correct answer for current question
    function generateCorrectAnswer(questionNum) {
        console.log('Ran generateCorrectAnswer funtion');
        let rightAnswersArray = ['Double', '===', '5 (the number)', 'None of the above', 'break', 'splice()', 'push()', 'Function', 'Head Element', 'Operator'];
        questionNum -= 1;
        return rightAnswersArray[questionNum];
    }    

    // D. Obtain user's answer and determine button behavior upon click
    for (let index = generatingIterator(); index < quizButtonsArray.length; index++) {
        quizButtonsArray[index].onclick = function(event) {
            let goodAnswer = generateCorrectAnswer(questionNumber);
            clickedButton = event.target;
            clickedButtonAnswer = event.target.innerText;
            buttonClickCount += 1;
            console.log('User clicked answer button');

            // i. Disable buttons after click for current question
            quizButtonsArray[0].disabled = true;
            quizButtonsArray[1].disabled = true;
            quizButtonsArray[2].disabled = true;
            quizButtonsArray[3].disabled = true;
            quizButtonsArray[4].disabled = true;

            // ii. Provide feedback for user's answer; update totals
            if (clickedButtonAnswer === goodAnswer) {
                console.log(`The user got #${questionNumber} right! The answer is ${goodAnswer}!`);
                answersRight++;
                points += 10;
            
                quizButtonsArray[index].setAttribute('style', 'background-color:green; border-style:solid; border-color:#00b386; color:#00b386; font-family:century gothic; font-weight:bold; border-radius:20px; display:inline; font-size:15px; text-align:left; padding-left:20px; padding-top:10px; padding-bottom:10px; cursor:pointer; margin-left:30px; margin-bottom:20px; margin-right:20px; width:200px; input:focus; outline:0; outline-style:none; outline-width:0;');
        
                feedbackMessages[index].textContent = 'CORRECT';
                
                // Delay to show feedback, as timer restarts upon answer selection
                setTimeout(function() { 
                    goToNextQuestion();
                }, 1200);
            } else {
                console.log(`The user got #${questionNumber} wrong! The answer is ${goodAnswer}!`);
                answersWrong++;
            
                quizButtonsArray[index].setAttribute('style', 'background-color:red; border-style:solid; border-color:#00b386; color:#00b386; font-family:century gothic; font-weight:bold; border-radius:20px; display:inline; font-size:15px; text-align:left; padding-left:20px; padding-top:10px; padding-bottom:10px; cursor:pointer; margin-left:30px; margin-bottom:20px; width:200px; margin-right:20px; input:focus; outline:0; outline-style:none; outline-width:0;'); 

                feedbackMessages[index].textContent = 'INCORRECT';              

                // Delay to show feedback
                setTimeout(function() { 
                    goToNextQuestion();
                }, 1200);                 
            }   
            console.log(`Totals for Question ${questionNumber}:    Points: ${points}     Answers Right: ${answersRight}     Answers Wrong: ${answersWrong}       Questions Skipped: ${questionsMissed}`)
        };    
    };
    
    // E. Check for skipped questions
    if ((actualSecondsRemaining === 0) && (clickedButton === undefined)) {
        console.log('Checking missed questions count');
        questionsMissed++;
        console.log(`Totals for Question ${questionNumber - 1}:    Points: ${points}     Answers Right: ${answersRight}     Answers Wrong: ${answersWrong}       Questions Skipped: ${questionsMissed}`)
    }

    questionsAsked++;

    // F. Re-enable buttons for next question
    quizButtonsArray[0].disabled = false;
    quizButtonsArray[1].disabled = false;
    quizButtonsArray[2].disabled = false;
    quizButtonsArray[3].disabled = false;
    quizButtonsArray[4].disabled = false;
};

// 10. Main process -- Holds timer
function askQuestion() {
    console.log('Ran askQuestion function');
    questionInterval = setInterval(function() {

        actualSecondsRemaining--;

        if ((actualSecondsRemaining > 0) && (actualSecondsRemaining < 10)) {
            timerPlaceholder.textContent = `0:0${actualSecondsRemaining}`;
        }

        if (actualSecondsRemaining === 0) {
            if (currentQuestion <= 9) {
                goToNextQuestion();            
            } else if (currentQuestion === 10) {
                clearInterval(questionInterval);
                timerDiv.setAttribute('style', 'display:none');
                quizDiv.setAttribute('style', 'display:none');
                timesUpMessage();
            }
        }
    }, 1000);
};

// 11. Question progression 
function goToNextQuestion() {
    console.log('Ran goToNextQuestion function');
    if (currentQuestion === 10) {
        console.log(`This is the last question.`);
        quizOver();         
    } else {
        clearInterval(questionInterval);
        placeholderFunction();
        quizButtonsSetUp();
        populateQuiz();
        askQuestion();
        checkAnswer();
        currentQuestion++;

        if (answersWrong === 0) {
            actualSecondsRemaining = 10;
            timerPlaceholder.textContent = `0:10`;
        }
        
        if (((answersWrong >= 1) || (questionsMissed >= 1)) && (currentQuestion <= 10)) {
            actualSecondsRemaining = 10 - (2 * answersWrong) - (2 * questionsMissed);
            timerPlaceholder.textContent = `0:0${actualSecondsRemaining}`;
            console.log(`Seconds Remaining: ${actualSecondsRemaining}`);
        }

        if ((actualSecondsRemaining <= 0) && (currentQuestion > 1)) {
            timerPlaceholder.textContent = '';
            quizOver();                
            console.log(`User's time deducted to 0 seconds per question.`);
        }   
    }
};

// 12. Populate userDataArray
function populateUserDataArray() {

    console.log('Ran populateUserDataArray function');

    if (userCount > 0) {
        lastUserIDUsed = userDataArray[userDataArray.length - 1]['userID'];
    }
   
    if ((userCount === 0) || ((userCount > 0) && (userCount !== lastUserIDUsed))) {

        let userDataRecord = {
            userID: '',
            pointsEarned: '',
            questionsPresented: '',
            correctAnswers: '',
            incorrectAnswers: '',
            skippedQuestions: ''
        };

        console.log(`Populating User Data - User Count is ${userCount}`);

        userDataRecord.userID = userCount;
        userDataRecord.pointsEarned = points;
        userDataRecord.questionsPresented = questionsAsked;
        userDataRecord.correctAnswers = answersRight;
        userDataRecord.incorrectAnswers = answersWrong;
        userDataRecord.skippedQuestions = questionsMissed;
        userDataArray.push(userDataRecord);
        console.log(`New record: ${userDataRecord}`);
    }
  };

// 13. 'Time's Up!' initial set up
function timesUpSetUp() {
    console.log('Ran timesUpSetUp function');
    // A. 'Time's Up!' Page attributes
    timesUpDiv.setAttribute('class', 'timesUpPage');
    timesUpDiv.setAttribute('style', 'display:none');
    timesUpHeader.setAttribute('style', 'margin-left:auto; margin-right:auto; text-align:center;');

    // B. 'Time's Up!' Page content
    timesUpHeader.textContent = `TIME'S UP!`;

    // C. 'Time's Up!' Page assembly
    container.appendChild(timesUpDiv);
    timesUpDiv.appendChild(timesUpHeader);
};

 // 14. 'Time's Up!' message
function timesUpMessage() {
    console.log('Ran timesUpMessage');
    // A. 'Time's Up!' page attributes
    timesUpDiv.setAttribute('style', 'margin-left:auto; margin-right:auto; position:relative; top:100px; border-style:solid; border-width:3px; border-radius:20px; border-color:#cf1717; background-color:#cf1717; color:white; font-family:century gothic; padding-top:20px; padding-bottom:20px;');

    // if (currentQuestion < 9) {
    // questionsAsked = questionsAsked - 2;
    // }
    
    // B. Process - Transition to Form Page
    setTimeout(function() { 
        timesUpDiv.setAttribute('style', 'display:none');
        utilizeForm();
    }, 2500);
};

// 15. Quiz over; transition to 'Time's Up!' page
function quizOver() {
    console.log('Ran quizOver function');
    clearInterval(questionInterval);
    populateUserDataArray();
    timerDiv.setAttribute('style', 'display:none');
    quizDiv.setAttribute('style', 'display:none');
    timesUpMessage();
};

// 16. Form Page set up
function setUpForm() {
    console.log('Ran setUpForm function');
    // A. Form Page attributes
    formDiv.setAttribute('class', 'formPage');
    formDiv.setAttribute('style', 'display:none;');
    pointsMessage.setAttribute('class', 'points-message');
    pointsMessage.setAttribute('style', 'text-align:center');
    initialsMessage.setAttribute('class', 'initials-message');
    initialsMessage.setAttribute('style', 'text-align:left; color:white; margin-left:15px;');
    initialsInput.setAttribute('type', 'text');
    initialsInput.setAttribute('placeholder', 'Enter your initials here');
    initialsInput.setAttribute('id', 'user-initials');
    initialsInput.setAttribute('required', '');
    initialsInput.setAttribute('style', 'font-family:century gothic; font-weight:bold; text-align:center; padding:3px; border-style:solid; border-width:3px; border-radius:20px; border-color:#cf1717; background-color:black; color: white;');
    submitButton.setAttribute('style', 'background-color:black; border-style:solid; border-width:3px; border-radius:40px; border-color:#cf1717; color:#cf1717; font-family:century gothic; font-size:18px; font-weight:bold; display:block; text-align:center;  padding-top:15px; padding-bottom:15px; padding-left:25px; padding-right:25px; cursor:pointer; margin-left:auto; margin-right:auto; margin-top:30px;');

    // B. Form Page content
    initialsMessage.textContent = 'Enter your initials below. 2 to 4 characters are required.';
    submitButton.textContent = 'Submit';
    
    // C. Form Page assembly
    container.appendChild(formDiv);
    formDiv.appendChild(pointsMessage);
    formDiv.appendChild(initialsMessage);
    formDiv.appendChild(initialsForm);
    formDiv.appendChild(initialsInput);
    formDiv.appendChild(formButtonDiv);
    formButtonDiv.appendChild(submitButton);
};

// 17. Show Form
function utilizeForm() {
    console.log('Ran utilizeForm function');
    // A. Variable
    let summaryMessage = determinePointsMessage();

    // B. formDiv attributes
    formDiv.setAttribute('style', 'margin-left:auto; margin-right:auto; position:relative; top:60px; border-style:solid; border-width:3px; border-radius:20px; border-color:#cf1717; background-color:black; color:white; font-family:century gothic; padding-bottom:20px;');

    // C. Form Page content
    pointsMessage.textContent = `You scored ${points} points! ${summaryMessage}`;

    // D. Processes
    // i. Validate user input
    function checkInput(initialsAsEntered) {
        console.log('Ran checkInput function');
        let result;        
        
        if (initialsAsEntered.length < 2) {
            initialsMessage.textContent = 'There is a 2-character minimum.';
            initialsInput.value = '';
            initialsInput.setAttribute('placeholder', 'Please try again');                console.log(`Check for <2 characters ${initialsAsEntered}`);
            result = false;
        } else if (initialsAsEntered.length > 4) {
            initialsMessage.textContent = 'There is a 4-character limit.';
            initialsInput.value = '';
            initialsInput.setAttribute('placeholder', 'Please try again');
            console.log(`Check for >4 characters ${initialsAsEntered}`);
            result = false;
        } else if ((initialsAsEntered.length >= 2) && (initialsAsEntered.length < 5)) {
            console.log(`Made it thru to else statement`);
        
            if (initialsAsEntered.match(`^[a-zA-Z]+$`)) {
                console.log(`There are only letters ${initialsAsEntered}`);
                result = true;
            } else {    
                initialsMessage.textContent = 'You have made an invalid entry. Numbers and symbols are not permitted.';
                initialsInput.value = '';
                initialsInput.setAttribute('placeholder', 'Please try again');
                console.log(`There are numbers or symbols ${initialsAsEntered}`);
                result = false;
            }
        }    
        return result;
    };
    
    // ii. Edit initials entry
    function processInitials(initialsInput) {
        console.log('Ran processInitials function');
        console.log(`Original initials: ${initialsInput}`);
        let newInitialsInput = initialsInput.toUpperCase().trim();
        console.log(`Fixed initials: ${newInitialsInput}`);
        return newInitialsInput;
    };    
   
    // iii. Submit button
    submitButton.onclick = function(event) {
        event.preventDefault();

        console.log('Setting up listener on submit button for form');
        let initialsEntry = document.querySelector('#user-initials');
        let userInitials = initialsEntry.value;
        let correctInput = checkInput(userInitials); 

        if (correctInput === true) {
            let fixedInitials = processInitials(userInitials);
            formDiv.setAttribute('style', 'display:none');
            populateScores(fixedInitials);
        }
    };
};

// 18. Determine message for points scored
function determinePointsMessage() {
    console.log('Ran determinePointsMessage function');
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

// 19. Score Page set up
function setUpScores() {
    console.log('Ran setUpScores function');
    // A. Score Page attributes
    // i. scoreContainer
    scoreContainer.setAttribute('class', 'scoresPage');
    scoreContainer.setAttribute('style', 'display:none');
    
    // ii. highScoresDiv
    highScoresDiv.setAttribute('class', 'points-chart');
    highScoresDiv.setAttribute('style', 'background-color:black; color:white; font-family:century gothic; padding-bottom:20px;');
    highScoresHeader.setAttribute('class', 'scores-header');
    highScoresHeader.setAttribute('style', 'display:inline; position:relative; text-align:right; font-size:20px; color:#ff9900;');   
    highScoresTableHeaderRow.setAttribute('class', 'table-columns'); 
    highScoresTableHeaderRow.setAttribute('style', 'text-align:right; font-size:18px; position: sticky; top:0');

    // iii. allScoresDiv
    allScoresDiv.setAttribute('class', 'points-chart');
    allScoresDiv.setAttribute('style','background-color:black; color:white; font-family:century gothic; padding-bottom:20px;');
    allScoresHeader.setAttribute('class', 'scores-header');
    allScoresHeader.setAttribute('style', 'display:inline; position:relative; text-align:right; font-size:20px; color:#ff9900;');
    allScoresTableHeaderRow.setAttribute('class', 'table-columns');
    allScoresTableHeaderRow.setAttribute('style', 'text-align:right; font-size:18px; position:sticky; top:0;');

    // iv. Buttons to clear tables and retake quiz
    scoresButtonsDiv.setAttribute('style', 'background-color:black; margin-left:auto; margin-right:auto;');
    clearScoresButton.setAttribute('id', 'clear-button');
    clearScoresButton.setAttribute('style', 'background-color:black; border-style:solid; border-width:3px; border-radius:40px; border-color:#ffad33; color:#ffad33; position:relative; font-family:century gothic; font-size:18px; font-weight:bold; display:inline; text-align:center;  padding-top:15px; padding-bottom:15px; padding-left:25px; padding-right:25px; cursor:pointer; margin-left:10px; margin-right:10px');
    retakeQuizButton.setAttribute('id', 'retake-button');
    retakeQuizButton.setAttribute('style', 'background-color:black; border-style:solid; border-weight:3px; border-radius:40px; border-color:#ffad33; color:#ffad33; position:relative; font-family:century gothic; font-size:18px; font-weight:bold; display:inline; text-align:center;  padding-top:15px; padding-bottom:15px; padding-left:25px; padding-right:25px; cursor:pointer; margin-left:10px; margin-right:10px;');
    
    // B. Score Page content  
    highScoresHeader.textContent = 'High Scores';
    highScoresTableInitialsColumn.innerHTML = '<br>Initials';
    highScoresTablePointsColumn.innerHTML = '<br>Points';
    highScoresTableNumQuestionsColumn.innerHTML = 'Questions Asked';
    highScoresTableRightColumn.textContent = 'Right Answers';
    highScoresTableWrongColumn.textContent = 'Wrong Answers';
    highScoresTableMissedColumn.textContent = 'Skipped Questions';
    allScoresHeader.textContent = 'All Scores';
    allScoresTableInitialsColumn.innerHTML = '<br>Initials';
    allScoresTablePointsColumn.innerHTML = '<br>Points';
    allScoresTableNumQuestionsColumn.innerHTML = 'Questions Asked';
    allScoresTableRightColumn.textContent = 'Right Answers';
    allScoresTableWrongColumn.textContent = 'Wrong Answers';
    allScoresTableMissedColumn.textContent = 'Skipped Questions';
    clearScoresButton.textContent = 'Clear Scores';   
    retakeQuizButton.textContent = 'Retake Quiz';

    // C. Score Page assembly
    // i. scoreContainer
    container.appendChild(scoreContainer);

    // ii. highScoresDiv
    scoreContainer.appendChild(highScoresDiv);
    highScoresDiv.appendChild(highScoresHeader);
    highScoresDiv.appendChild(highScoresTable);
    highScoresTable.appendChild(highScoresTableHead);
    highScoresTableHead.appendChild(highScoresTableHeaderRow);
    highScoresTableHead.appendChild(highScoresTableInitialsColumn);
    highScoresTableHead.appendChild(highScoresTablePointsColumn);
    highScoresTableHead.appendChild(highScoresTableNumQuestionsColumn);
    highScoresTableHead.appendChild(highScoresTableRightColumn);
    highScoresTableHead.appendChild(highScoresTableWrongColumn);
    highScoresTableHead.appendChild(highScoresTableMissedColumn);
    highScoresTable.appendChild(highScoresTableBody);

    // iii. allScoresDiv
    scoreContainer.appendChild(allScoresDiv);
    allScoresDiv.appendChild(allScoresHeader);
    allScoresDiv.appendChild(allScoresTable);
    allScoresTable.appendChild(allScoresTableHead);
    allScoresTableHead.appendChild(allScoresTableHeaderRow);
    allScoresTableHead.appendChild(allScoresTableInitialsColumn);
    allScoresTableHead.appendChild(allScoresTablePointsColumn);
    allScoresTableHead.appendChild(allScoresTableNumQuestionsColumn);
    allScoresTableHead.appendChild(allScoresTableRightColumn);
    allScoresTableHead.appendChild(allScoresTableWrongColumn);
    allScoresTableHead.appendChild(allScoresTableMissedColumn);
    allScoresTable.appendChild(allScoresTableBody);

    // iv. scoresButtonsDiv
    scoreContainer.appendChild(scoresButtonsDiv);
    scoresButtonsDiv.appendChild(clearScoresButton);
    scoresButtonsDiv.appendChild(retakeQuizButton);  
    scoreContainer.appendChild(clearScoresButton);
    scoreContainer.appendChild(retakeQuizButton);
};

// 20. Add scores to tables
function populateScores(editedInitials) { 
    console.log('Ran populateScores function');
    // A. scoreContainer attributes
    scoreContainer.setAttribute('style', 'margin-left:auto; margin-right:auto; position:relative; border-style:solid; border-width:3px; border-radius:20px; border-color:#ff9900; background-color:black; color:white; font-family:century gothic; padding-bottom:20px;');
    
    // B. Processes
    // i. Add user data to tables
    function createTableRows(formattedInitials) {
        let userTallies = userDataArray[userCount];
        console.log(`Creating Table Row - User Count is ${userCount}`);
        
        // High Scores data
        if (points >= 80) {    
            let highScoreRow = highScoresTableBody.insertRow(-1);
            let highScoreInitials = highScoreRow.insertCell(0);
            let highScorePoints = highScoreRow.insertCell(1);
            let highScoreNumQuestions = highScoreRow.insertCell(2);
            let highScoreRight = highScoreRow.insertCell(3);
            let highScoreWrong = highScoreRow.insertCell(4);
            let highScoreSkipped = highScoreRow.insertCell(5);

            highScoreInitials.textContent = formattedInitials;
            highScorePoints.textContent = userTallies.pointsEarned;
            highScoreNumQuestions.textContent = userTallies.questionsPresented;
            highScoreRight.textContent = userTallies.correctAnswers;
            highScoreWrong.textContent = userTallies.incorrectAnswers;
            highScoreSkipped.textContent = userTallies.skippedQuestions;
        }

        // All Scores data
        let allScoreRow = allScoresTableBody.insertRow(-1);
        let allScoreInitials = allScoreRow.insertCell(0);
        let allScorePoints = allScoreRow.insertCell(1);
        let allScoreNumQuestions = allScoreRow.insertCell(2);
        let allScoreRight = allScoreRow.insertCell(3);
        let allScoreWrong = allScoreRow.insertCell(4);
        let allScoreSkipped = allScoreRow.insertCell(5);

        allScoreInitials.textContent = formattedInitials;
        allScorePoints.textContent = userTallies.pointsEarned;
        allScoreNumQuestions.textContent = userTallies.questionsPresented;
        allScoreRight.textContent = userTallies.correctAnswers;
        allScoreWrong.textContent = userTallies.incorrectAnswers;
        allScoreSkipped.textContent = userTallies.skippedQuestions;
    };

    createTableRows(editedInitials);

    populateScoresCount++;
    
    clearScores();
    retakeQuizClick();

    // ii. Clear scores from tables
};

// 21. Clear scores from tables
function clearScores() {
    console.log('Set up listener on clearScoresButton');
    clearScoresButton.addEventListener("click", function() {
        let highScoreRowsCount = highScoresTable.rows.length;
        let allScoreRowsCount = allScoresTable.rows.length;

        for (let i = highScoreRowsCount - 1; i > 0; i--) {
            highScoresTable.deleteRow(i);
        }

        for (let j = allScoreRowsCount - 1; j > 0; j--) {
            allScoresTable.deleteRow(j);
        }
    });
    clearScoresButton.removeEventListener('click', function() {});
};

// 21. Transition to Welcome Page
function retakeQuizClick() {
    console.log('Set up listener on retakeQuizButton');
    retakeQuizButton.addEventListener("click", function() {
        userCount = populateScoresCount;
        console.log(`Taking on populateScoresCount of ${populateScoresCount}`);
        
        takeQuizAgain();
    });
    retakeQuizButton.removeEventListener('click', function() {});
};

// 22. Transition to Welcome Page
function takeQuizAgain() {
    console.log('Ran takeQuizAgain function');
    console.log(`User Count at end of quiz is ${userCount}`);
    scoreContainer.setAttribute('style', 'display:none');
    currentQuestion = 0;
    actualSecondsRemaining = secondsRemainingRule;
    points = 0;
    questionsAsked = 0;
    answersRight = 0;
    answersWrong = 0;
    questionsMissed = 0;
    buttonClickCount = 0;
    initialsInput.value = '';
    console.log(`Start of new quiz - User Count is ${userCount}`);
    initialsInput.setAttribute('placeholder', 'Enter your initials here');
    returnToStart();
};

// 23. Take quiz again
function returnToStart() {
    console.log('Ran returnToStart function');
    welcomeDiv.setAttribute('style', 'margin-left:auto; margin-right:auto; position:relative; border-style:solid; border-width:3px; border-radius:20px; border-color:#cf1717; background-color:black; color:white; font-family:century gothic;');
    transitionToQuiz();
}

shellSetUp();



/*
Shell
- Elements
- Function (one-time): shellSetUp()
Welcome Page
- Elements
- Function (one-time): setUpWelcome()
- Function: returnToStart();
Quiz Page
- Elements
- Function (one-time): initialQuizBuild()
- Function: transitionToQuiz()
- Function: quizSetUp()
  Contains: quizButtonSetup()
                   populateQuiz()
                   checkAnswer()
                   askQuestion()


*/