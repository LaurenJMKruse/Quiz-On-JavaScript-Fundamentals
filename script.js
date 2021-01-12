// *************************************************
// I. ELEMENTS - Organized by View (5)

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

// 04. Elements for View 3: Time's Up/Quiz Over
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

// B. Score tables
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
let highScoresTableSecondsColumn = document.createElement('th');
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
let allScoresTableSecondsColumn = document.createElement('th');
let allScoresTableBody = document.createElement('tbody');

// C. Score button elements
const saveScoresButton = document.createElement('button');
const clearScoresButton = document.createElement('button');
const retakeQuizButton = document.createElement('button');


// *************************************************
// II. GLOBAL VARIABLES
let quizButtons;
let feedbackMessages = document.getElementsByTagName('h4');
let currentQuestion = 0;
let secondsRemainingRule = 100;
let points = 0;
let answersRight = 0;
let answersWrong = 0;
let questionInterval;
let buttonClickCount = 0;
let actualSecondsRemaining = secondsRemainingRule;
let userCount = 0;
let questionsAsked = 0;
let totalQuestions = 10;
let populateScoresCount = 0;
let finalInitials;
let currentHighScoreRow;
let currentAllScoreRow;
let savedRecordsCount;
let createRowsCount = 0;
let secondsElapsed = 0;

// *************************************************
// III. ARRAYS
// A. Quiz Array -- Questions and answers
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
// IV. FUNCTIONS
try {
    // 01. Shell attributes and assembly
    function shellSetUp() {
        // A. Shell attributes
        background.setAttribute('style', 'min-height:100%; margin:0; padding:0; background-image:url(./Assets/JavaScript-Wallpaper.png); background-size:cover; background-repeat:no-repeat; background-position:center center; background-attachment:fixed; border:none; background-color:black;');

        // B. <body> attributes
        body.setAttribute('style', 'position:relative; top:10px; min-height:100%;');

        // C. Container attributes
        container.setAttribute('style', 'display:flex; flex-direction:column; justify-content:center;');

        // D. Shell assembly
        document.body.appendChild(container);

        // *************************************************
        // E. Processes
        setUpWelcome();
        timesUpSetUp();
        setUpForm();
        setUpScores();

        console.log(`User Count at very beginning is ${userCount}`);
    };

    // 02. View 1: Welcome Page Build
    function setUpWelcome() {
        // A. Welcome attributes
        welcomeDiv.setAttribute('class', 'welcomePage');
        welcomeDiv.setAttribute('style', 'margin-left:auto; margin-right:auto; position:relative; border-style:solid; border-width:3px; border-radius:20px; border-color:#cf1717; background-color:black; color:white; font-family:century gothic;');
        welcomeMessage.setAttribute('id', 'quiz-title');
        welcomeMessage.setAttribute('style', 'text-align:center; color:white; margin:30px;');
        instructionsHeader.setAttribute('id', 'rules-header');
        instructionsHeader.setAttribute('style', 'width:80%; text-align:left; position:relative; margin-top:40px;');
        instructionsList.setAttribute('id', 'quiz-rules');
        instructionsList.setAttribute('style', 'position:relative; font-size:15px; list-style-type:square; line-height:1.85em;');
        startButton.setAttribute('style', 'background-color:black; border-style:solid; border-width:3px; border-radius:40px; border-color:#cf1717; color:#cf1717; font-family:century gothic; font-size:18px; font-weight:bold; display:block; text-align:center;  padding-top:15px; padding-bottom:15px; padding-left:25px; padding-right:25px; cursor:pointer; margin-left:auto; margin-right:auto; margin-top:15px; margin-bottom:15px;');

        // B. Welcome content
        welcomeMessage.innerText = 'Test your Basic JavaScript Skills';
        instructionsHeader.innerText = 'Instructions';
        instruction0.innerText = 'There are 10 questions';
        instruction1.innerText = 'You have 100 seconds tracked by a timer';
        instruction2.innerText = 'Answers are multiple choice';
        instruction3.innerText = 'Click the button with your best answer';
        instruction4.innerText = 'Each correct answer is worth 10 points';
        instruction5.innerText = 'Tallies of 80 points and up are added to the High Score list';
        instruction6.innerText = 'Each wrong answer will result in the timer numerals flashing red and a 5-second deduction of remaining time';
        startButton.innerText = 'Begin Quiz';

        // C. Welcome assembly
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

    // 03. View 2: Quiz Page Build
    function initialQuizBuild() {
        // A. Quiz attributes
        // i. timerDiv attributes
        timerDiv.setAttribute('class', 'timerBox');
        timerDiv.setAttribute('style', 'display:none');
        timerHeader.setAttribute('style', 'position:relative; display:inline; text-align:left; margin-left:15px; color:#cf1717');
        timerPlaceholder.setAttribute('style', 'display:inline-block; position:relative; left:15px; text-align:right; font-size:18px; margin-right:20px;');

        // ii. quizDiv attributes
        quizDiv.setAttribute('class', 'quizPage');
        quizDiv.setAttribute('style', 'display:none');
        questionCount.setAttribute('id', 'question-count');
        questionCount.setAttribute('style', 'color:white; margin-top:15px; margin-left:30px; margin-bottom:15px;');
        questionPlaceholder.setAttribute('style', 'color:white; margin-left:30px; width:85%;');
        answerAFeedback.setAttribute('class', 'answerFeedback');
        answerBFeedback.setAttribute('class', 'answerFeedback');
        answerCFeedback.setAttribute('class', 'answerFeedback');
        answerDFeedback.setAttribute('class', 'answerFeedback');
        answerEFeedback.setAttribute('class', 'answerFeedback');

        // B. Quiz content    
        // timerDiv content
        timerHeader.textContent = 'Timer:';
    
        // C. Quiz assembly
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
        quizButtons = quizDiv.querySelectorAll('#buttonA, #buttonB, #buttonC, #buttonD, #buttonE');
        quizButtonsArray = Array.from(quizButtons);

        // E. Begin quiz
        transitionToQuiz();
    };

    // 04. Transition to from Welcome Page to Quiz Page
    function transitionToQuiz() {
        startButton.addEventListener("click", function() {
            welcomeDiv.setAttribute('style', 'display:none');
        
            // A. Quiz attributes
            // i. timerDiv attributes
            timerDiv.setAttribute('style', 'position:relative; border-style:solid; border-width:3px; border-radius:20px; border-color:#cf1717; background-color:black; color:white; font-family:century gothic; font-weight:bold;');
    
            // ii. quizDiv attributes
            quizDiv.setAttribute('style', 'margin-left:auto; margin-right:auto; border-style:solid; border-width:3px; border-radius:20px; border-color:#00b386; background-color:black; color:white; font-family:century gothic; padding-bottom:20px;');

            // B. Quiz content    
            // timerDiv content
            timerPlaceholder.textContent = '1:00';

            // ii. quizDiv content - See function populateQuiz() and questionsArray  
    
            // C. Processes
            if (currentQuestion === 0) {
                // i. Start timer
                setTimer();
        
                // ii. Quiz buttons set up
                quizButtonsSetUp();
                
                // iii. Populate first question
                populateQuiz();
                
                // iv. Check user response
                checkAnswer();
                
                // v. Advance to next question
                currentQuestion++;
            }
        });
        startButton.removeEventListener('click', function() {});
    };

    // 05. Quiz buttons/answer feedback formatting (appearance prior to answer button being clicked)
    function quizButtonsSetUp() {
        // A. Quiz answer buttons styling
        for (let i = 0; i < quizButtonsArray.length; i++) {
            quizButtonsArray[i].setAttribute('style', 'background-color:black; border-style:solid; border-color:#00b386; color:#00b386; font-family:century gothic; font-weight:bold; border-radius:20px; display:inline; font-size:15px; text-align:left; padding-left:20px; padding-top:10px; padding-bottom:10px; cursor:pointer; margin-left:30px; margin-bottom:20px; width:200px; input:focus; outline:0; outline-style:none; outline-width:0;');
        }

        // B. Timer numerals styling
        timerPlaceholder.setAttribute('style', 'display:inline-block; position:relative; left:15px; text-align:right; font-size:18px; margin-right:20px;');

        // C. Reset answer feedback
        for (let j = 0; j < feedbackMessages.length; j++) {
            feedbackMessages[j].setAttribute('style', 'width:15%; position:relative; display:inline;');
            feedbackMessages[j].textContent = '';
        }    
    };

    // 06. Populating quizDiv with questions
    function populateQuiz() {
        // A. Keep count of questions presented
        questionsAsked++;
        
        // B. Pull current question and corresponding answer options
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

    // 07. Check user's answer
    function checkAnswer() {
        // A. Variable
        let clickedButtonAnswer;
             
        // B. Generate iterator for quiz buttons
        function generatingIterator() {
            let iterator = 0;
            return iterator;
        };

        // C. Obtain correct answer for current question
        function generateCorrectAnswer(questionNum) {
            let rightAnswersArray = ['Double', '===', '5 (the number)', 'None of the above', 'break', 'splice()', 'push()', 'Function', 'Head Element', 'Operator'];
            questionNum -= 1;
            return rightAnswersArray[questionNum];
        };    

        // D. Obtain user's answer and determine button behavior upon click
        for (let index = generatingIterator(); index < quizButtonsArray.length; index++) {
            // Event listener to see what answer button is clicked for current question
            quizButtonsArray[index].onclick = function(event) {
                // i. Variable and assignments; collect target data
                let goodAnswer = generateCorrectAnswer(questionNumber);
                clickedButton = event.target;
                clickedButtonAnswer = event.target.innerText;
                buttonClickCount += 1;
                console.log('User clicked answer button');

                // ii. Disable buttons after click for current question
                quizButtonsArray[0].disabled = true;
                quizButtonsArray[1].disabled = true;
                quizButtonsArray[2].disabled = true;
                quizButtonsArray[3].disabled = true;
                quizButtonsArray[4].disabled = true;

                // iii. Provide feedback for user's answer; update totals
                // a. For correct answer
                if (clickedButtonAnswer === goodAnswer) {
                    console.log(`The user got #${questionNumber} right! The answer is ${goodAnswer}!`);
                    answersRight++;
                    points += 10;
            
                    quizButtonsArray[index].setAttribute('style', 'background-color:green; border-style:solid; border-color:#00b386; color:#00b386; font-family:century gothic; font-weight:bold; border-radius:20px; display:inline; font-size:15px; text-align:left; padding-left:20px; padding-top:10px; padding-bottom:10px; cursor:pointer; margin-left:30px; margin-bottom:20px; margin-right:20px; width:200px; input:focus; outline:0; outline-style:none; outline-width:0;');
        
                    feedbackMessages[index].textContent = 'CORRECT';
                
                    // Delay to ensure feedback is shown; transition to next question/phase of quiz
                    setTimeout(function() {
                        if (currentQuestion === 10) {
                            quizOver();
                        } else {
                            if (actualSecondsRemaining > 2) {
                                goToNextQuestion();
                            }    
                            console.log(`Seconds Elapsed: ${secondsElapsed}`);
                        }
                    }, 1000);
                // b. For incorrect answer
                } else {
                    console.log(`The user got #${questionNumber} wrong! The answer is ${goodAnswer}!`);
                    answersWrong++;
                    actualSecondsRemaining -= 5;
            
                    quizButtonsArray[index].setAttribute('style', 'background-color:red; border-style:solid; border-color:#00b386; color:#00b386; font-family:century gothic; font-weight:bold; border-radius:20px; display:inline; font-size:15px; text-align:left; padding-left:20px; padding-top:10px; padding-bottom:10px; cursor:pointer; margin-left:30px; margin-bottom:20px; width:200px; margin-right:20px; input:focus; outline:0; outline-style:none; outline-width:0;');

                    timerPlaceholder.setAttribute('style', 'display:inline-block; position:relative; left:15px; color:red; text-align:right; font-size:18px; margin-right:20px;');

                    feedbackMessages[index].textContent = 'INCORRECT';              

                    // Delay to ensure feedback is shown; transition to next question/phase of quiz
                    setTimeout(function() { 
                        if (currentQuestion === 10) {
                            quizOver();
                        } else {
                            if (actualSecondsRemaining > 2) {
                                goToNextQuestion();
                        }
                        console.log(`Seconds Elapsed: ${secondsElapsed}`);
                        }
                    }, 1000);
                }                
            };   
        }
    
        // E. Re-enable buttons for next question
        quizButtonsArray[0].disabled = false;
        quizButtonsArray[1].disabled = false;
        quizButtonsArray[2].disabled = false;
        quizButtonsArray[3].disabled = false;
        quizButtonsArray[4].disabled = false;
    };

    // 08. Start and maintain timer
    function setTimer() {
        questionInterval = setInterval(function() {
      
            // A. Track remaining seconds and time elapsed
            actualSecondsRemaining--;
            secondsElapsed++;
      
            // B. Determine appearance of timer numerals
            if ((actualSecondsRemaining < 100) && (actualSecondsRemaining > 9)) {
                timerPlaceholder.textContent = `0:${actualSecondsRemaining}`;
            }
  
            if ((actualSecondsRemaining > 0) && (actualSecondsRemaining < 10)) {
                timerPlaceholder.textContent = `0:0${actualSecondsRemaining}`;
            }

            // C. Transition to end of quiz
            if (actualSecondsRemaining <= 0) {
                console.log(`Zero seconds left`);
                timerPlaceholder.textContent = '';
                quizOver();
            }
        }, 1000);
    };

    // 09. Question progression 
    function goToNextQuestion() {
        console.log(`Totals for Question ${questionNumber} --   Points: ${points}   Answers Right: ${answersRight}   Answers Wrong: ${answersWrong}   Seconds Elapsed: ${secondsElapsed}`);
        
        // A. Reset quiz buttons; populate current question; check answer
        quizButtonsSetUp();
        populateQuiz();
        checkAnswer();

        // B. Advance to next question
        currentQuestion++;
    };

    // 10. Populate userDataArray
    function populateUserDataArray() {
        // A. Ensure there are no duplicate objects in the array
        if (userCount > 0) {
            lastUserIDUsed = userDataArray[userDataArray.length - 1]['userID'];
        }
   
        // B. Collect user data into object
        if ((userCount === 0) || ((userCount > 0) && (userCount !== lastUserIDUsed))) {    
            console.log(`questions asked: ${questionsAsked}`);

            let userDataRecord = {
                userID: '',
                pointsEarned: '',
                questionsPresented: '',
                correctAnswers: '',
                incorrectAnswers: '',
                secondsUsed: ''
            };
        
            // Push object to userDataArray
            userDataRecord.questionsPresented = questionsAsked;
            userDataRecord.userID = userCount;
            userDataRecord.pointsEarned = points;
            userDataRecord.correctAnswers = answersRight;
            userDataRecord.incorrectAnswers = answersWrong;
            userDataRecord.secondsUsed = secondsElapsed;
            userDataArray.push(userDataRecord);
        }
    };

    // 11. Time's Up/Quiz Over initial set up
    function timesUpSetUp() {
        // A. Time's Up/Quiz Over attributes
        timesUpDiv.setAttribute('class', 'timesUpPage');
        timesUpDiv.setAttribute('style', 'display:none');
        timesUpHeader.setAttribute('style', 'margin-left:auto; margin-right:auto; text-align:center;');

        // B. Time's Up/Quiz Over content
        timesUpHeader.textContent = ``;

        // C. Time's Up/Quiz Over assembly
        container.appendChild(timesUpDiv);
        timesUpDiv.appendChild(timesUpHeader);
    };

    // 12. Time's Up/Quiz Over message
    function timesUpMessage() {
        // A. Time's Up/Quiz Over attributes
        timesUpDiv.setAttribute('style', 'margin-left:auto; margin-right:auto; position:relative; top:100px; border-style:solid; border-width:3px; border-radius:20px; border-color:#cf1717; background-color:#cf1717; color:white; font-family:century gothic; padding-top:20px; padding-bottom:20px;');
    
        // B. Time's Up/Quiz Over content
        if (actualSecondsRemaining <= 0) {
            timesUpHeader.textContent = `TIME'S UP!`;
        } else {
            timesUpHeader.textContent = `QUIZ OVER`;
        }

        // C. Process - Transition to form
        setTimeout(function() { 
            timesUpDiv.setAttribute('style', 'display:none');
            utilizeForm();
        }, 2500);
    };

    // 13. Quiz over; transition to Time's Up/Quiz Over
    function quizOver() {
        // A. End timer
        clearInterval(questionInterval);
        console.log(`Seconds elapsed is ${secondsElapsed}`);
        
        // B. Check for skipped questions; modify incorrect answer count
        if ((questionsAsked) !== (answersRight + answersWrong)) {
            console.log('User skipped question(s).');
            console.log(`Questions asked: ${questionsAsked}`);
            console.log(`Number of answer buttons selected: ${buttonClickCount}`);
            answersWrong++;
        }

        // C. Processes and attributes to transition to next view
        populateUserDataArray();
        timerDiv.setAttribute('style', 'display:none');
        quizDiv.setAttribute('style', 'display:none');
        timesUpMessage();
    };

    // 14. Initial Form Page set up
    function setUpForm() {
        // A. Form attributes
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

        // B. Form content
        initialsMessage.textContent = 'Enter your initials below. 2 to 4 characters are required.';
        submitButton.textContent = 'Submit';
    
        // C. Form assembly
        container.appendChild(formDiv);
        formDiv.appendChild(pointsMessage);
        formDiv.appendChild(initialsMessage);
        formDiv.appendChild(initialsForm);
        formDiv.appendChild(initialsInput);
        formDiv.appendChild(formButtonDiv);
        formButtonDiv.appendChild(submitButton);
    };

    // 15. Display Form to collect user initials and present points earned
    function utilizeForm() {
        // A. Variable to collect overall quiz feedback message
        let summaryMessage = determinePointsMessage();

        // B. Form attributes
        formDiv.setAttribute('style', 'margin-left:auto; margin-right:auto; position:relative; top:60px; border-style:solid; border-width:3px; border-radius:20px; border-color:#cf1717; background-color:black; color:white; font-family:century gothic; padding-bottom:20px;');

        // C. Form content
        pointsMessage.textContent = `You scored ${points} points! ${summaryMessage}`;

        // D. Processes
        // i. Validate user input
        function checkInput(initialsAsEntered) {
            console.log('Ran checkInput function');
            // a. Variable
            let result;        
        
            // b. Check for invalid entry
            if (initialsAsEntered.length < 2) {
                initialsMessage.textContent = 'There is a 2-character minimum.';
                initialsInput.value = '';
                initialsInput.setAttribute('placeholder', 'Please try again');                
                result = false;
            } else if (initialsAsEntered.length > 4) {
                initialsMessage.textContent = 'There is a 4-character limit.';
                initialsInput.value = '';
                initialsInput.setAttribute('placeholder', 'Please try again');
                result = false;
            } else if ((initialsAsEntered.length >= 2) && (initialsAsEntered.length < 5)) {
                if (initialsAsEntered.match(`^[a-zA-Z]+$`)) {
                    result = true;
                } else {    
                    initialsMessage.textContent = 'You have made an invalid entry. Numbers and symbols are not permitted.';
                    initialsInput.value = '';
                    initialsInput.setAttribute('placeholder', 'Please try again');
                    result = false;
                }
            }    
            return result;
        };
    
        // ii. Edit initials entry, if necessary
        function processInitials(initialsInput) {
            // Remove spaces; ensure characters are capital letters only
            let newInitialsInput = initialsInput.toUpperCase().trim();
            finalInitials = newInitialsInput;
            console.log(finalInitials);
        };    
   
        // iii. Establish event listener for Submit button
        submitButton.onclick = function(event) {
            // a. Default behavior prevented, as this is a form
            event.preventDefault();

            // b. Variables
            let initialsEntry = document.querySelector('#user-initials');
            let userInitials = initialsEntry.value;
            let correctInput = checkInput(userInitials); 

            // c. Transition to Scores page with initials
            if (correctInput === true) {
                let fixedInitials = processInitials(userInitials);
                formDiv.setAttribute('style', 'display:none');
                populateScores(fixedInitials);
            }
        };
    };

    // 16. Determine message for points scored
    function determinePointsMessage() {
        // A. Variable
        let pointsMessage;
    
        // B. Select message based on points earned
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

    // 17. Initial Score Page set up
    function setUpScores() {
        // A. Score attributes
        // i. scoreContainer
        scoreContainer.setAttribute('class', 'scoresPage');
        scoreContainer.setAttribute('style', 'display:none');
    
        // ii. highScoresDiv
        highScoresDiv.setAttribute('class', 'points-chart');
        highScoresDiv.setAttribute('style', 'background-color:black; color:white; font-family:century gothic; margin-left:auto; margin-right:auto;');
        highScoresHeader.setAttribute('class', 'scores-header');
        highScoresHeader.setAttribute('style', 'display:inline; position:relative; text-align:left; font-size:20px; color:#ff9900;');
        highScoresTableHeaderRow.setAttribute('class', 'table-columns'); 
        highScoresTableHeaderRow.setAttribute('style', 'text-align:right; font-size:18px; position: sticky; top:0;');
        highScoresTableInitialsColumn.setAttribute('class', 'initials-column');

        // iii. allScoresDiv
        allScoresDiv.setAttribute('class', 'points-chart');
        allScoresDiv.setAttribute('style','background-color:black; color:white; font-family:century gothic; margin-left:auto; margin-right:auto;');
        allScoresHeader.setAttribute('class', 'scores-header');
        allScoresHeader.setAttribute('style', 'display:inline; position:relative; text-align:left; font-size:20px; color:#ff9900;');
        allScoresTableHeaderRow.setAttribute('class', 'table-columns');
        allScoresTableHeaderRow.setAttribute('style', 'text-align:right; font-size:18px; position:sticky; top:0;');
        allScoresTableInitialsColumn.setAttribute('class', 'initials-column');

        // iv. Score buttons
        saveScoresButton.setAttribute('id', 'save-button');
        saveScoresButton.setAttribute('style', 'background-color:black; border-style:solid; border-width:3px; border-radius:40px; border-color:#ffad33; color:#ffad33; position:relative; font-family:century gothic; font-size:18px; font-weight:bold; text-align:center; padding-top:15px; padding-bottom:15px; padding-left:25px; padding-right:25px; cursor:pointer; margin-left:5px; margin-right:5px');
        clearScoresButton.setAttribute('id', 'clear-button');
        clearScoresButton.setAttribute('style', 'background-color:black; border-style:solid; border-width:3px; border-radius:40px; border-color:#ffad33; color:#ffad33; position:relative; font-family:century gothic; font-size:18px; font-weight:bold; text-align:center;  padding-top:15px; padding-bottom:15px; padding-left:25px; padding-right:25px; cursor:pointer; margin-left:5px; margin-right:5px');
        retakeQuizButton.setAttribute('id', 'retake-button');
        retakeQuizButton.setAttribute('style', 'background-color:black; border-style:solid; border-weight:3px; border-radius:40px; border-color:#ffad33; color:#ffad33; position:relative; font-family:century gothic; font-size:18px; font-weight:bold; text-align:center;  padding-top:15px; padding-bottom:15px; padding-left:25px; padding-right:25px; cursor:pointer; margin-left:10px; margin-right:10px;');
    
        // B. Score content  
        highScoresHeader.textContent = 'High Scores';
        highScoresTableInitialsColumn.innerHTML = '<br>Initials';
        highScoresTablePointsColumn.innerHTML = '<br>Points';
        highScoresTableNumQuestionsColumn.innerHTML = 'Questions Asked';
        highScoresTableRightColumn.textContent = 'Right Answers';
        highScoresTableWrongColumn.textContent = 'Wrong Answers';
        highScoresTableSecondsColumn.textContent = 'Seconds Elapsed';
        allScoresHeader.textContent = 'All Scores';
        allScoresTableInitialsColumn.innerHTML = '<br>Initials';
        allScoresTablePointsColumn.innerHTML = '<br>Points';
        allScoresTableNumQuestionsColumn.innerHTML = 'Questions Asked';
        allScoresTableRightColumn.textContent = 'Right Answers';
        allScoresTableWrongColumn.textContent = 'Wrong Answers';
        allScoresTableSecondsColumn.textContent = 'Seconds Elapsed';
        saveScoresButton.textContent = 'Save Score';   
        clearScoresButton.textContent = 'Clear Scores';   
        retakeQuizButton.textContent = 'Retake Quiz';

        // C. Score assembly
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
        highScoresTableHead.appendChild(highScoresTableSecondsColumn);
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
        allScoresTableHead.appendChild(allScoresTableSecondsColumn);
        allScoresTable.appendChild(allScoresTableBody);

        // iv. Score buttons
        scoreContainer.appendChild(saveScoresButton);
        scoreContainer.appendChild(clearScoresButton);
        scoreContainer.appendChild(retakeQuizButton);  
    };

    // 18. Add user data to High Score Table
    function createHighScoreTableRows() {
        // A. Variable to collect user data
        let userTallies = userDataArray[userCount];

        // B. High Scores row creation
        let highScoreRow = highScoresTableBody.insertRow(-1);
        let highScoreInitials = highScoreRow.insertCell(0);
        let highScorePoints = highScoreRow.insertCell(1);
        let highScoreNumQuestions = highScoreRow.insertCell(2);
        let highScoreRight = highScoreRow.insertCell(3);
        let highScoreWrong = highScoreRow.insertCell(4);
        let highScoreSeconds = highScoreRow.insertCell(5);
    
        // C. Assignment
        currentHighScoreRow = highScoreRow;

        // D. High Scores data
        highScoreInitials.setAttribute('style', 'text-align:left');
        highScoreInitials.textContent = finalInitials;
        highScorePoints.textContent = userTallies.pointsEarned;
        highScoreNumQuestions.textContent = userTallies.questionsPresented;
        highScoreRight.textContent = userTallies.correctAnswers;
        highScoreWrong.textContent = userTallies.incorrectAnswers;
        highScoreSeconds.textContent = userTallies.secondsUsed;
    };

    // 19. Add user data to All Score Table
    function createAllScoreTableRows() {
        // A. Variable to collect user data
        let userTallies = userDataArray[userCount];

        // B. All Scores row creation
        let allScoreRow = allScoresTableBody.insertRow(-1);
        let allScoreInitials = allScoreRow.insertCell(0);
        let allScorePoints = allScoreRow.insertCell(1);
        let allScoreNumQuestions = allScoreRow.insertCell(2);
        let allScoreRight = allScoreRow.insertCell(3);
        let allScoreWrong = allScoreRow.insertCell(4);
        let allScoreSeconds = allScoreRow.insertCell(5);
    
        // C. Assignment
        currentAllScoreRow = allScoreRow;

        // D. All Scores data
        allScoreInitials.setAttribute('style', 'text-align:left');
        allScoreInitials.textContent = finalInitials;
        allScorePoints.textContent = userTallies.pointsEarned;
        allScoreNumQuestions.textContent = userTallies.questionsPresented;
        allScoreRight.textContent = userTallies.correctAnswers;
        allScoreWrong.textContent = userTallies.incorrectAnswers;
        allScoreSeconds.textContent = userTallies.secondsUsed;
    };

    // 20. Render previously saved scores to tables
    function renderSavedScores() {
        // A. Variables to collect data from local storage
        let storedInitials = JSON.parse(localStorage.getItem('savedInitials'));
        console.log(storedInitials);
        let storedPoints = JSON.parse(localStorage.getItem('savedPoints'));
        let storedQuestions = JSON.parse(localStorage.getItem('savedQuestionsAsked'));
        let storedRight = JSON.parse(localStorage.getItem('savedAnswersRight'));
        let storedWrong = JSON.parse(localStorage.getItem('savedAnswersWrong'));
        let storedSeconds = JSON.parse(localStorage.getItem('savedSeconds'));

        // B. Create table rows
        for (let i = 0; i < storedInitials.length; i++) {
            if (storedPoints[i] >= 80) {
                // i. Saved High Scores row creation    
                let storedHighScoreRow = highScoresTableBody.insertRow(-1);
                let storedHighScoreInitials = storedHighScoreRow.insertCell(0);
                let storedHighScorePoints = storedHighScoreRow.insertCell(1);
                let storedHighScoreNumQuestions = storedHighScoreRow.insertCell(2);
                let storedHighScoreRight = storedHighScoreRow.insertCell(3);
                let storedHighScoreWrong = storedHighScoreRow.insertCell(4);
                let storedHighScoreSeconds = storedHighScoreRow.insertCell(5);
            
                // ii. Saved High Scores attributes (green font indicates saved record)
                storedHighScoreRow.setAttribute('style', 'color:#00b386; font-weight:bold;');
                storedHighScoreInitials.setAttribute('style', 'text-align:left');

                // iii. Saved High Scores data
                storedHighScoreInitials.textContent = storedInitials[i];
                storedHighScorePoints.textContent = storedPoints[i];
                storedHighScoreNumQuestions.textContent = storedQuestions[i];
                storedHighScoreRight.textContent = storedRight[i];
                storedHighScoreWrong.textContent = storedWrong[i];
                storedHighScoreSeconds.textContent = storedSeconds[i];
            }

            // iv. Saved All Scores row creation    
            let storedAllScoreRow = allScoresTableBody.insertRow(-1);
            let storedAllScoreInitials = storedAllScoreRow.insertCell(0);
            let storedAllScorePoints = storedAllScoreRow.insertCell(1);
            let storedAllScoreNumQuestions = storedAllScoreRow.insertCell(2);
            let storedAllScoreRight = storedAllScoreRow.insertCell(3);
            let storedAllScoreWrong = storedAllScoreRow.insertCell(4);
            let storedAllScoreSeconds = storedAllScoreRow.insertCell(5);
        
            // v. Saved All Scores attributes (green font indicates saved record)
            storedAllScoreRow.setAttribute('style', 'color:#00b386; font-weight:bold;');
            storedAllScoreInitials.setAttribute('style', 'text-align:left');

            // vi. Saved All Scores data
            storedAllScoreInitials.textContent = storedInitials[i];
            storedAllScorePoints.textContent = storedPoints[i];
            storedAllScoreNumQuestions.textContent = storedQuestions[i];
            storedAllScoreRight.textContent = storedRight[i];
            storedAllScoreWrong.textContent = storedWrong[i];
            storedAllScoreSeconds.textContent = storedSeconds[i];
        }
    };

    // 21. Add scores to tables (prior to Save Score option)
    function populateScores() { 
        // A. scoreContainer attributes
        scoreContainer.setAttribute('style', 'margin-left:auto; margin-right:auto; position:relative; border-style:solid; border-width:3px; border-radius:20px; border-color:#ff9900; background-color:black; color:white; font-family:century gothic; height:800px;');

        // B. Check local storage for previously saved scores; add to table(s)
        if (localStorage.getItem('savedInitials') != null) {
            console.log(`savedRecordsCount is ${savedRecordsCount}`);
            renderSavedScores();
        }

        // C. Add unsaved data to High Scores table
        if (points >= 80) {
            createHighScoreTableRows();
        }
    
        // D. Add unsaved data to All Scores table
        createAllScoreTableRows();

        // E. Processes to set up Score buttons
        saveScores();
        clearScores();
        retakeQuizClick();

        // F. Track count of unsaved scores collected
        populateScoresCount++;
    };

    // 22. Save scores in local storage
    function saveScores() {
        // A. Set up event listener on Save Score button
        saveScoresButton.onclick = function() {
            console.log('Ran saveScoresButton function');
            
            // i. Variable to collect user data; keep track of row creation
            let talliesToSave = userDataArray[userCount];
            createRowsCount++;
            savedRecordsCount = createRowsCount.valueOf();
            console.log(`savedRecordsCount is ${savedRecordsCount}`);

            // ii. If local storage empty; establish arrays to hold saved data
            if (localStorage.getItem('savedInitials') == null) {
                localStorage.setItem('savedInitials', '[]');
                localStorage.setItem('savedPoints', '[]');
                localStorage.setItem('savedQuestionsAsked', '[]');
                localStorage.setItem('savedAnswersRight', '[]');
                localStorage.setItem('savedAnswersWrong', '[]');
                localStorage.setItem('savedSeconds', '[]');
            }

            // iii. Variables to collect new, unsaved data
            let newInitials = finalInitials;
            let newPoints = talliesToSave.pointsEarned;
            let newQuestions = talliesToSave.questionsPresented;
            let newRight = talliesToSave.correctAnswers;
            let newWrong = talliesToSave.incorrectAnswers;
            let newSeconds = talliesToSave.secondsUsed;
        
            // iv. Pulling previously saved data from local storage; saving to variables; adding new, unsaved data
            let oldInitials = JSON.parse(localStorage.getItem('savedInitials'));
            oldInitials.push(newInitials);
        
            let oldPoints = JSON.parse(localStorage.getItem('savedPoints'));
            oldPoints.push(newPoints);

            let oldQuestions = JSON.parse(localStorage.getItem('savedQuestionsAsked'));
            oldQuestions.push(newQuestions);

            let oldRight = JSON.parse(localStorage.getItem('savedAnswersRight'));
            oldRight.push(newRight);

            let oldWrong = JSON.parse(localStorage.getItem('savedAnswersWrong'));
            oldWrong.push(newWrong);

            let oldSeconds = JSON.parse(localStorage.getItem('savedSeconds'));
            oldSeconds.push(newSeconds);

            // v. Change font of newly saved row to green to indicate stored record
            if (newPoints >= 80) {
                currentHighScoreRow.setAttribute('style', 'color:#00b386; font-weight:bold;');
            }

            currentAllScoreRow.setAttribute('style', 'color:#00b386; font-weight:bold;');

            // vi. Clear local storage to ensure only one set of data is populated in tables
            localStorage.clear();

            // vii. Send amended array with newly-saved data to local storage
            localStorage.setItem('savedInitials', '[]');
            localStorage.setItem('savedInitials', JSON.stringify(oldInitials));
        
            localStorage.setItem('savedPoints', '[]');
            localStorage.setItem('savedPoints', JSON.stringify(oldPoints));

            localStorage.setItem('savedQuestionsAsked', '[]');
            localStorage.setItem('savedQuestionsAsked', JSON.stringify(oldQuestions));

            localStorage.setItem('savedAnswersRight', '[]');
            localStorage.setItem('savedAnswersRight', JSON.stringify(oldRight));

            localStorage.setItem('savedAnswersWrong', '[]');
            localStorage.setItem('savedAnswersWrong', JSON.stringify(oldWrong));

            localStorage.setItem('savedSeconds', '[]');
            localStorage.setItem('savedSeconds', JSON.stringify(oldSeconds));
        };
        // B. Track number of saved records
        savedRecordsCount++;
    
        console.log(`Saved Record Count after saving record: ${savedRecordsCount}`);
    };

    // 23. Clear scores from tables; empty local storage
    function clearScores() {
        // A. Establish event listener for Clear Scores button
        clearScoresButton.addEventListener("click", function() {
            // i. Variables to collect number of rows in each table
            let highScoreRowsCount = highScoresTable.rows.length;
            let allScoreRowsCount = allScoresTable.rows.length;

            // ii. Delete rows from High Scores table
            for (let i = highScoreRowsCount - 1; i > 0; i--) {
                highScoresTable.deleteRow(i);
            }

            // iii. Delete rows from All Scores table
            for (let j = allScoreRowsCount - 1; j > 0; j--) {
                allScoresTable.deleteRow(j);
            }

            // iv. Clear local storage
            localStorage.clear();

            // v. Empty userData array; reset counts
            userDataArray = [];
            userCount = 0;
            populateScoresCount = 0;
            savedRecordsCount = 0;
        });
        // B. Remove event listener
        clearScoresButton.removeEventListener('click', function() {});
    };

    // 24. User elects to take quiz again
    function retakeQuizClick() {
        // A. Establish event listener on Retake Quiz button
        retakeQuizButton.addEventListener("click", function() {
            // i. Keeping track of number of users/times quiz taken
            userCount = populateScoresCount;
        
            // ii. Variables to collect number of rows in each table
            let highScoreRowsCount = highScoresTable.rows.length;
            let allScoreRowsCount = allScoresTable.rows.length;

            // iii. Delete rows in High Scores table
            for (let i = highScoreRowsCount - 1; i > 0; i--) {
                highScoresTable.deleteRow(i);
            }

            // iv. Delete rows in All Scores table
            for (let j = allScoreRowsCount - 1; j > 0; j--) {
                allScoresTable.deleteRow(j);
            }

            // v. Initiate new quiz
            takeQuizAgain();
        });
        // B. Remove event listener
        retakeQuizButton.removeEventListener('click', function() {});
    };

    // 25. Return to Welcome Page
    function takeQuizAgain() {
        console.log('Ran takeQuizAgain function');
        console.log(`User Count at end of quiz is ${userCount}`);
        
        // A. Remove Score Page from view
        scoreContainer.setAttribute('style', 'display:none');
        
        // B. Reset assignments
        currentQuestion = 0;
        actualSecondsRemaining = secondsRemainingRule;
        points = 0;
        questionsAsked = 0;
        answersRight = 0;
        answersWrong = 0;
        buttonClickCount = 0;
        initialsInput.value = '';
        finalInitials = '';
        secondsElapsed = 0;

        // C. Reset form instructions
        console.log(`Start of new quiz - User Count is ${userCount}`);
        initialsMessage.textContent = 'Enter your initials below. 2 to 4 characters are required.';
        initialsInput.setAttribute('placeholder', 'Enter your initials here');
    
        // D. Transition to Welcome Page
        returnToStart();
    };

    // 26. Reset Begin Quiz button
    function returnToStart() {
        console.log('Ran returnToStart function');
        
        // A. Display Welcome Page
        welcomeDiv.setAttribute('style', 'margin-left:auto; margin-right:auto; position:relative; border-style:solid; border-width:3px; border-radius:20px; border-color:#cf1717; background-color:black; color:white; font-family:century gothic;');
    
        // B. Establish event listener on Begin Quiz button
        transitionToQuiz();
    };

    // *************************************************
    // V. INITIAL PROCESS
    shellSetUp();
    
    // try...catch to log any errors that may occur
}   catch (error) {
    console.log(`The following error occurred: `, error);
}