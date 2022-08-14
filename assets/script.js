// Questions arrays
var questionsArray = [
    {
        question: "1. The condition in an if / else statement is enclosed within ____.",
        choices: ["A. quotes", "B. curly brackets", "C. parentheses", "D. square brackets"],
        corAnswer: "parenthese"
    },
    {
        question: "2. Commonly used data types DO NOT include:",
        choices: ["A. strings", "B. booleans", "C. alerts", "D. numbers"],
        corAnswer: "alerts"
    },
    {
        question: "3. Arrays in Javascript can be used to store ____.",
        choices: ["A. numbers and strings", "B. other arrays", "C. booleans", "D. all of the above"],
        corAnswer: "all of the above"
    },
    {
        question: "4. String values must be enclosed within ____ when being assigned to variables.",
        choices: ["A. commas", "B. curly brackets", "C. quotes", "D. parenthesis"],
        corAnswer: "quotes"
    },
    {
        question: "5. A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["A. Javascript", "B. terminal / bash", "C. for loops", "D. console log"],
        answer: "console log"
    }
];

// Defined Variables for each section of the quiz in the HTML
    //These variables are for the opening page
var startPage = document.querySelector("#start");
var startBtn = document.querySelector("#startBtn");
var startScreen = document.querySelector("#start-screen");

    // These variables are for the questions 
var questionScreen = document.querySelector("#question-screen");
var questionAsked = document.querySelector("#question-asked");

    // These variables are the answer choices 
var optionBtn = document.querySelector(".option-button");
var answerB1 = document.querySelector("#answer-button1");
var answerB2 = document.querySelector("#answer-button2");
var answerB3 = document.querySelector("#answer-button3");
var answerB4 = document.querySelector("#answer-button4");

    // These are variables for the final score 
var checkAnswer = document.querySelector("#check-answer");
var finalPage = document.querySelector("#final-page");
var finalScore = document.querySelector("#final-score");
var userInitials = document.querySelector("#initials");
var submitBtn = document.querySelector("#submitBtn");
var recordScore = document.querySelector("#record-score");
var highscorePage = document.querySelector ("#highscore-page");
var checkHighscore = document.querySelector ("#check-highscore");
var final = document.querySelector("#final");
var backBtn = document.querySelector("#backBtn");
var clearBtn = document.querySelector("clearBtn");

// Declared var for the timer 
var score = 0;
var questionChoices = 0;
var seconds = 70;
var count = 1;
var timer = document.getElementById("timer");


// Click Start Button to activate countdown timer 
function startCountdown() {
    var timeInterval = setInterval(function() {
        seconds--;
        timer.textContent = seconds;

        if (seconds <= 0) {
            clearInterval(timeInterval);
            timer.textContent = "Time's up!";
            final.textContent = "All done!";
            gameOver();
        }else if(count >= questionsArray.length +1) {
            clearInterval(timeInterval);
            gameOver();
        }
    }, 1000);
}

function start (){
    startPage.style.display = "none";
    questionScreen.style.display = "block";
    questionChoices = 0;
    startCountdown();
    displayQuestion();
}



// startButton.addEventListener("click", function () {
//     if (timeInterval === 0) {
//         timeInterval = setInterval(function () {
//             seconds--;
//             timer.textContent = seconds;

//             if (seconds <= 0) {
//                 clearInterval(timeInterval);
//                 allDone();
//                 timer.textContent = "Time's up!";
//             }
//         },1000);
//     }
// });

//Displaying question on screen
function displayQuestion(){
    if (questionChoices < questionsArray.length) {
        questions.textContent = questionsArray[questionChoices].questions;
        answerA.textContent = questionsArray[questionChoices].selection[0];
        answerB.textContent = questionsArray[questionChoices].selection[1];
        answerC.textContent = questionsArray[questionChoices].selection[2];
        answerD.textContent = questionsArray[questionChoices].selection[3];
    } else {
        gameOver();
    }
}
// Function that asks the quesitons and displays the choices 
// function render(questionChoices) {
//     openScreen.innerHTML= "";
//     createUl.innerHTML = "";
//     for (var i = 0; i < questionsArray.length; i++) {
//         var questionsAsk = questionsArray[questionChoices].question;
//         var answerOptions = questionsArray[questionChoices].choices;
//         openScreen.textContent = questionsAsk;
//     }

//     answerOptions.forEach(function (newItem) {
//         var listItem = document.createElement("li");
//         listItem.textContent = newItem;
//         openScreen.appendChild(createUl);
//         create.appendChild(listItem);
//         listItem.addEventListener("click", (compare));
//     })
// }

// function compare(event) {
//     var element = event.target;

//     if(element.matches("li")) {
//         var divCreate = document.createElement("div");
//         divCreate.setAttribute("id", "divCreate");
//         // for Correct answers
//         if (element.textContent == questionsArray[questionChoices].corAnswer) {
//             score++;
//             divCreate.textContent = "Yay! That is CORRECT!";
//         } else {
//             // tine pentality -10 seconds 
//             seconds = seconds - penaltyTime;
//             divCreate.textContent = "Sorry, that is INCORRECT."
//         }
//     }
// }

// var answerChoices = $("#answer-choices");
// var answer = answerChoices.val();
// console.log(answer)


