//  Declare global variables
// var startBtn = $("#startBtn");
// var timer = $("#startBtn");
// var score = 0;
// var questionIndex = 0;


// Questions arrays
var questionsArray = [
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        corAnswer: "parenthese"
    },
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        corAnswer: "alerts"
    },
    {
        question: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        corAnswer: "all of the above"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        corAnswer: "quotes"
    },
    {
        question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    }];

// Declared var
var score = 0;
var questionChoices = 0;
var openScreen = document.querySelector("open-screen");

// Seconds in timer
var seconds = 75;
var timeInterval = 0;
var penaltyTime = 10;
var timer = document.querySelector("#startBtn");
var time = document.querySelector("#timer");
var create = document.createElement("ul");

// Click Start Button to activate countdown timer 
timer.addEventListener("click", function () {
    if (timeInterval === 0) {
        timeInterval = setInterval(function () {
            seconds--;
            time.textContent = seconds;

            if (seconds <= 0) {
                clearInterval(timeInterval);
                allDone();
                time.textContent = "Time's up!";
            }
        },1000);
    }
    render(questionChoices);
});

// Function that asks the quesitons and displays the choices 
function render(questionChoices) {
    openScreen.innerHTML= "";
    create.innerHTML = "";
    for (var i = 0; i < questionsArray.length; i++) {
        var questionsAsk = questionsArray(questionChoices).question;
        var answerOptions = questionsArray(questionChoices).choices;
        openScreen.textContent = questionsAsk;
    }

    answerOptions.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        openScreen.appendChild(create);
        create.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}

// var answerChoices = $("#answer-choices");
// var answer = answerChoices.val();
// console.log(answer)


