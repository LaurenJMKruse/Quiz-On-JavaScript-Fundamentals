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
const instruction6 = document.createElement('li');
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

const scoresButtonsDiv = document.createElement('div');
const clearScoresButton = document.createElement('button');
const retakeQuizButton = document.createElement('button');


// *************************************************
// VARIABLES
let buttons = document.getElementsByTagName('button');
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
let highScoresTableRowCount = 0;
let allScoresTableRowCount = 0;
let userCount = 0;
let questionsAsked = 0;
let totalQuestions = 10;


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

// C. User Data Object
let userDataRecord = {
    userID: '',
    pointsEarned: '',
    correctAnswers: '',
    incorrectAnswers: '',
    skippedQuestions: ''
};

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
    instruction6.innerText = 'Each wrong answer will result in a 2-second deduction per subsequent question(s)';
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
    timerDiv.setAttribute('class', 'timerBox');
    timerDiv.setAttribute('style', 'position:relative; border-style:solid; border-width:3px; border-radius:20px; border-color:#cf1717; background-color:black; color:white; font-family:century gothic; font-weight:bold;');
    timerHeader.setAttribute('style', 'position:relative; display:inline; text-align:left; margin-left:15px; color:#cf1717');
    timerPlaceholder.setAttribute('style', 'display:inline-block; position:relative; left:15px; text-align:right; font-size:18px; margin-right:20px;');
    
    // ii. quizDiv attributes
    quizDiv.setAttribute('class', 'quizPage');
    quizDiv.setAttribute('style', 'margin-left:auto; margin-right:auto; border-style:solid; border-width:3px; border-radius:20px; border-color:#00b386; background-color:black; color:white; font-family:century gothic; padding-bottom:20px;');
    questionCount.setAttribute('style', 'color:white; margin-top:15px; margin-left:30px; margin-bottom:15px;');
    questionPlaceholder.setAttribute('style', 'color:white; margin-left:30px; width:85%;');
    answerAFeedback.setAttribute('class', 'answerFeedback');
    answerBFeedback.setAttribute('class', 'answerFeedback');
    answerCFeedback.setAttribute('class', 'answerFeedback');
    answerDFeedback.setAttribute('class', 'answerFeedback');
    answerEFeedback.setAttribute('class', 'answerFeedback');

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
    questionsAsked++;
    
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
        feedbackMessages[j].setAttribute('style', 'width:15%; position:relative; display:inline;');
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

        actualSecondsRemaining--;

        if ((actualSecondsRemaining > 0) && (actualSecondsRemaining < 10)) {
            timerPlaceholder.textContent = `0:0${actualSecondsRemaining}`;
        }

        if (actualSecondsRemaining === 0) {
            if (currentQuestion <= 9) {
            goToNextQuestion();            
            }
            else if (currentQuestion === 10) {
                clearInterval(questionInterval);
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
    let clickedButton;
    let clickedButtonAnswer;
             
    // B. Generate iterator for quiz buttons
    function generatingIterator() {
        let iterator = 1;
        return iterator;
    }

    // C. Obtain correct answer for current question
    function generateCorrectAnswer(questionNum) {
        let rightAnswersArray = ['Double', '===', '5 (the number)', 'None of the above', 'break', 'splice()', 'push()', 'Function', 'Head Element', 'Operator'];
        questionNum -= 1;
        return rightAnswersArray[questionNum];
    }    

    // D. Obtain user's answer and determine button behavior upon click
    for (let index = generatingIterator(); index < buttons.length; index++) {
        buttons[index].onclick = function(event) {
            let goodAnswer = generateCorrectAnswer(questionNumber);
            clickedButton = event.target;
            clickedButtonAnswer = event.target.innerText;
            buttonClickCount += 1;             
            // i. Disable buttons after click for current question
            buttons[1].disabled = true;
            buttons[2].disabled = true;
            buttons[3].disabled = true;
            buttons[4].disabled = true;
            buttons[5].disabled = true;

            // ii. Provide feedback for user's answer; update totals
            if (clickedButtonAnswer === goodAnswer) {
                console.log(`The user got #${questionNumber} right! The answer is ${goodAnswer}!`);
                answersRight++;
                points += 10;
            
                buttons[index].setAttribute('style', 'background-color:green; border-style:solid; border-color:#00b386; color:#00b386; font-family:century gothic; font-weight:bold; border-radius:20px; display:inline; font-size:15px; text-align:left; padding-left:20px; padding-top:10px; padding-bottom:10px; cursor:pointer; margin-left:30px; margin-bottom:20px; margin-right:20px; width:200px; input:focus; outline:0; outline-style:none; outline-width:0;');
        
                feedbackMessages[index - 1].textContent = 'CORRECT';
                
                // Delay to show feedback, as timer restarts upon answer selection
                setTimeout(function() { 
                    goToNextQuestion();
                }, 1200);

            } else {
                console.log(`The user got #${questionNumber} wrong! The answer is ${goodAnswer}!`);
                answersWrong++;
            
                buttons[index].setAttribute('style', 'background-color:red; border-style:solid; border-color:#00b386; color:#00b386; font-family:century gothic; font-weight:bold; border-radius:20px; display:inline; font-size:15px; text-align:left; padding-left:20px; padding-top:10px; padding-bottom:10px; cursor:pointer; margin-left:30px; margin-bottom:20px; width:200px; margin-right:20px; input:focus; outline:0; outline-style:none; outline-width:0;'); 

                feedbackMessages[index - 1].textContent = 'INCORRECT';              

                setTimeout(function() { 
                    goToNextQuestion();
                }, 1200);                 
            }   
            console.log(`Totals for Question ${questionNumber}:    Points: ${points}     Answers Right: ${answersRight}     Answers Wrong: ${answersWrong}       Questions Skipped: ${questionsMissed}`)
            
        };    
    }
    
    // E. Check for skipped questions; adjust wrong answers tally
    if ((actualSecondsRemaining === 0) && (clickedButton === undefined)) {
        questionsMissed++;
        answersWrong++;
        console.log(`Totals for Question ${questionNumber - 1}:    Points: ${points}     Answers Right: ${answersRight}     Answers Wrong: ${answersWrong}       Questions Skipped: ${questionsMissed}`)
    }

    // F. Re-enable buttons for next question
    buttons[1].disabled = false;
    buttons[2].disabled = false;
    buttons[3].disabled = false;
    buttons[4].disabled = false;
    buttons[5].disabled = false;
};

// 09. Question progression 
function goToNextQuestion() {
    if (currentQuestion === 10) {
        console.log(`This is the last question.`);
        quizOver();         
    } else {
        clearInterval(questionInterval);
        quizButtonsSetUp();
        populateQuiz();
        questionsAsked++;
        askQuestion();
        checkAnswer();
        currentQuestion += 1;
        if (answersWrong === 0) {
            actualSecondsRemaining = 10;
            timerPlaceholder.textContent = `0:10`;
        }
        if (answersWrong >= 1) {
            actualSecondsRemaining = 10 - (2 * answersWrong);
            if (actualSecondsRemaining <= 0) {
                timerPlaceholder.textContent = '';
                quizOver();
                console.log(`User's time deducted to 0 seconds per question.`);
            } else {    
                timerPlaceholder.textContent = `0:0${actualSecondsRemaining}`;
            }
            console.log(`Seconds Remaining: ${actualSecondsRemaining}`);
        }   
    }
};

// Push userDataArray
function populateUserDataArray() {
    userDataRecord.userID = userCount
    userDataRecord.pointsEarned = points;
    userDataRecord.correctAnswers = answersRight;
    userDataRecord.incorrectAnswers = answersWrong;
    userDataRecord.skippedQuestions = questionsMissed;
    userDataArray.push(userDataRecord);
    console.log(`New record: ${userDataRecord}`);
    return userDataArray[userCount];
};

// 10. 'Time's Up!' message
function timesUpMessage() {
    // A. 'Time's Up!' page attributes
    timesUpDiv.setAttribute('class', 'timesUpPage');
    timesUpDiv.setAttribute('style', 'margin-left:auto; margin-right:auto; position:relative; top:100px; border-style:solid; border-width:3px; border-radius:20px; border-color:#cf1717; background-color:#cf1717; color:white; font-family:century gothic; padding-top:20px; padding-bottom:20px;');
    timesUpHeader.setAttribute('style', 'margin-left:auto; margin-right:auto; text-align:center;');

    // B. 'Time's Up!' page content
    timesUpHeader.textContent = `TIME'S UP!`;

    // C. 'Time's Up!' page assembly
    container.appendChild(timesUpDiv);
    timesUpDiv.appendChild(timesUpHeader);

    // D. Process - Transition to Form page
    setTimeout(function() { 
        timesUpDiv.setAttribute('style', 'display:none');
        setUpForm();
    }, 3500);
};


// ADD QUESTIONS ASKED TO TABLE!!

// 11. Quiz over; transition to 'Time's Up!' page
function quizOver() {

    clearInterval(questionInterval);
    populateUserDataArray();
    timerDiv.setAttribute('style', 'display:none');
    quizDiv.setAttribute('style', 'display:none');
    timesUpMessage();
};

// 12. Form page set up
function setUpForm() {
    // A. Variable
    let summaryMessage = determinePointsMessage();

    // B. Form page attributes
    formDiv.setAttribute('class', 'formPage');
    formDiv.setAttribute('style', 'margin-left:auto; margin-right:auto; position:relative; top:60px; border-style:solid; border-width:3px; border-radius:20px; border-color:#cf1717; background-color:black; color:white; font-family:century gothic; padding-bottom:20px;');
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
    pointsMessage.textContent = `You scored ${points} points! ${summaryMessage}`;
    initialsMessage.textContent = 'Enter your initials below (required).';
    submitButton.textContent = 'Submit';
    
    // C. Form Page assembly
    container.appendChild(formDiv);
    formDiv.appendChild(pointsMessage);
    formDiv.appendChild(initialsMessage);
    formDiv.appendChild(initialsForm);
    formDiv.appendChild(initialsInput);
    formDiv.appendChild(formButtonDiv);
    formButtonDiv.appendChild(submitButton);


    // Processes
    // i. Validate user input
    function checkInput(initialsAsEntered) {
        let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let numerals = '0123456789';    
        let symbols = `!@#$%^&amp;*()+=-[]///';,./{}|/":&lt;&gt;?`;
        let result;
        let initialsGood;
        let loopCount = 0;
        let initialsToString = initialsAsEntered.toString();

        console.log(`Initials to string: ${typeof initialsToString}`);

        if (initialsToString.length > 4) {
            initialsMessage.textContent = 'Please enter no more than 4 characters.';
            initialsInput.value = '';
            initialsInput.setAttribute('placeholder', 'Please try again');
            result = false;
        } else { 

            do { 
            
                for (let i = 0; i < initialsToString.length; i++) {
                    if ((numerals.indexOf(initialsToString.charAt(i)) === -1) && (symbols.indexOf(initialsToString.charAt(i)) === -1) && (letters.indexOf(initialsToString.charAt(i)) !== -1)) {
                        initialsGood = true;
                        result = true;
                    } else if ((numerals.indexOf(initialsToString.charAt(i)) !== -1) || (symbols.indexOf(initialsToString.charAt(i)) !== -1)) {
                        initialsMessage.textContent = 'You have made an invalid entry. Numbers and symbols are not permitted.';
                        initialsInput.value = '';
                        initialsInput.setAttribute('placeholder', 'Please try again');
                        initialsGood = false;
                        result = false;
                        break;     
                    } else if ((numerals.indexOf(initialsToString.charAt(i)) !== -1) && (letters.indexOf(initialsToString.charAt(i)) !== -1) && (symbols.indexOf(initialsToString.charAt(i)) === -1)) {
                        initialsMessage.textContent = 'You have made an invalid entry. Numbers are not permitted.';
                        initialsInput.value = '';
                        initialsInput.setAttribute('placeholder', 'Please try again');
                        initialsGood = false;
                        result = false;
                        break;
                    } else if ((symbols.indexOf(initialsToString.charAt(i)) !== -1) && (letters.indexOf(initialsToString.charAt(i)) !== -1) && (numerals.indexOf(initialsToString.charAt(i)) === -1)) {
                        initialsMessage.textContent = 'You have made an invalid entry. Symbols are not permitted.';
                        initialsInput.value = '';
                        initialsInput.setAttribute('placeholder', 'Please try again');
                        initialsGood = false;
                        result = false;
                        break;
                    } else if ((numerals.indexOf(initialsToString.charAt(i)) !== -1) && (symbols.indexOf(initialsToString.charAt(i)) !== -1) && (letters.indexOf(initialsToString.charAt(i)) !== -1)) {
                        initialsMessage.textContent = 'You have made an invalid entry. Numbers and symbols are not permitted.';
                        initialsInput.value = '';
                        initialsInput.setAttribute('placeholder', 'Please try again');
                        initialsGood = false;
                        result = false;
                    }
                     
                    console.log(`Loop count: ${loopCount}`);
                    loopCount++;
                } 
            }    while (initialsGood = false)
        }
        return result;
    };
    
    // ii. Edit initials entry
    function processInitials(initialsInput) {
        console.log(`Original initials: ${initialsInput}`);
        let newInitialsInput = initialsInput.toUpperCase().trim();
        console.log(`Fixed initials: ${newInitialsInput}`);
        return newInitialsInput;
    };    
   
    // iii. Submit button
        submitButton.onclick = function(event) {
            event.preventDefault();

            let initialsEntry = document.querySelector('#user-initials');
            let userInitials = initialsEntry.value;
            let correctInput = checkInput(userInitials); 

            if (correctInput === true) {
                let fixedInitials = processInitials(userInitials);
                formDiv.setAttribute('style', 'display:none');
                setUpScores(fixedInitials);
            }
        };
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
function setUpScores(editedInitials) {
    
    // A. Score Page attributes
    // i. scoreContainer
    scoreContainer.setAttribute('class', 'scoresPage');
    scoreContainer.setAttribute('style', 'margin-left:auto; margin-right:auto; position:relative; border-style:solid; border-width:3px; border-radius:20px; border-color:#ff9900; background-color:black; color:white; font-family:century gothic; padding-bottom:20px;');
    
    // ii. highScoresDiv
    highScoresDiv.setAttribute('class', 'points-chart');
    highScoresDiv.setAttribute('style', 'background-color:black; color:white; font-family:century gothic; padding-bottom:20px;');
    highScoresHeader.setAttribute('class', 'scores-header');
    highScoresHeader.setAttribute('style', 'display:inline; position:relative; text-align:right; font-size:20px; color:#ff9900;');   
    highScoresTableHeaderRow.setAttribute('class', 'table-columns'); 
    highScoresTableHeaderRow.setAttribute('style', 'text-align:right; font-size:18px;');

    // iii. allScoresDiv
    allScoresDiv.setAttribute('class', 'points-chart');
    allScoresDiv.setAttribute('style','background-color:black; color:white; font-family:century gothic; padding-bottom:20px;');
    allScoresHeader.setAttribute('class', 'scores-header');
    allScoresHeader.setAttribute('style', 'display:inline; position:relative; text-align:right; font-size:20px; color:#ff9900;');
    allScoresTableHeaderRow.setAttribute('class', 'table-columns');
    allScoresTableHeaderRow.setAttribute('style', 'text-align:right; font-size:18px;');

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
    highScoresTableRightColumn.textContent = 'Right Answers';
    highScoresTableWrongColumn.textContent = 'Wrong Answers';
    highScoresTableMissedColumn.textContent = 'Skipped Questions';
    allScoresHeader.textContent = 'All Scores';
    allScoresTableInitialsColumn.innerHTML = '<br>Initials';
    allScoresTablePointsColumn.innerHTML = '<br>Points';
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
    scoreContainer.appendChild(scoresButtonsDiv);
    scoresButtonsDiv.appendChild(clearScoresButton);
    scoresButtonsDiv.appendChild(retakeQuizButton);  
    scoreContainer.appendChild(clearScoresButton);
    scoreContainer.appendChild(retakeQuizButton);

    // D. Processes
    // i. Populate tables
    addDataToTables(editedInitials);

    // ii. Clear scores tables


    // ii. Transition to Welcome Page
    retakeQuizButton.addEventListener("click", function() {
        takeQuizAgain();
        });
};

// 13. Populate score tables
function addDataToTables(formattedInitials) {
    let userTallies = userDataArray[userCount];

    function addHighScoresRow() {

    };

    function addAllScoresRow() {

    };

    if (points >= 80) {
        if (highScoresTableRowCount === 0) {
            highScoresTableInitials0.textContent = formattedInitials;
            highScoresTablePoints0.textContent = userTallies.pointsEarned;
            highScoresTableRight0.textContent = userTallies.correctAnswers;
            highScoresTableWrong0.textContent = userTallies.incorrectAnswers;
            highScoresTableMissed0.textContent = userTallies.skippedQuestions;
        }
    }        
        allScoresTableInitials0.textContent = formattedInitials;
        allScoresTablePoints0.textContent = userTallies.pointsEarned;
        allScoresTableRight0.textContent = userTallies.correctAnswers;
        allScoresTableWrong0.textContent = userTallies.incorrectAnswers;
        allScoresTableMissed0.textContent = userTallies.skippedQuestions;

        // }

    
   
};



// 13. Clear Scores

// 14. Transition to Welcome Page
function takeQuizAgain() {
    scoreContainer.setAttribute('style', 'display:none');
    currentQuestion = 0;
    actualSecondsRemaining = secondsRemainingRule;
    points = 0;
    answersRight = 0;
    answersWrong = 0;
    questionsMissed = 0;
    buttonClickCount = 0;
    initialsInput.value = '';
    userCount++;
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