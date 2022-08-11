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


