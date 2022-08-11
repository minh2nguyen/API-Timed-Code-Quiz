//  Declare global variables
// var startBtn = $("#startBtn");
var timer = $("#startBtn");
var score = 0;
var questionIndex = 0;



// Questions arrays
var questions = [
    { 
        question: "The condition in an if / else statement is enclosed within ____.",
        choices:["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parenthese"
    },
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },
]

// Seconds in timer
var seconds = 75;
var timeInterval = 0;
var currentTime = $("#timer");

// Countdown Timer function
timer.addEventListener("click".function()) {
    if (timeInterval === 0) {
        timeInterval = setInterval(function(){
            seconds--;
            currentTime.textContent = seconds;
        })
    }
}

// Click Start Button 
$("#startBtn").on("click",function(event){
    event.preventDefault();
});
console.log("START QUIZ")
// var answerChoices = $("#answer-choices");
// var answer = answerChoices.val();
// console.log(answer)


