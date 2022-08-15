// Questions arrays
var questionsArray = [
    {
        question: "1. The condition in an if / else statement is enclosed within ____.",
        choices: ["A. quotes", "B. curly brackets", "C. parentheses", "D. square brackets"],
        answer: "C"
    },
    {
        question: "2. Commonly used data types DO NOT include:",
        choices: ["A. strings", "B. booleans", "C. alerts", "D. numbers"],
        answer: "C"
    },
    {
        question: "3. Arrays in Javascript can be used to store ____.",
        choices: ["A. numbers and strings", "B. other arrays", "C. booleans", "D. all of the above"],
        answer: "D"
    },
    {
        question: "4. String values must be enclosed within ____ when being assigned to variables.",
        choices: ["A. commas", "B. curly brackets", "C. quotes", "D. parenthesis"],
        answer: "C"
    },
    {
        question: "5. A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["A. Javascript", "B. terminal / bash", "C. for loops", "D. console log"],
        answer: "D"
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
var choicesBtn = document.querySelectorAll(".choices");
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
var highscorePage = document.querySelector("#highscore-page");
var checkHighscore = document.querySelector("#check-highscore");
var final = document.querySelector("#final");
var backBtn = document.querySelector("#backBtn");
var clearBtn = document.querySelector("#clearBtn");

// Declared var for the timer 
var timer = document.getElementById("timer");
var seconds = 70;
var score = 0;
var questionNumber = 0;
var count = 1;



// Function to activate countdown timer 
function startCountdown() {
    var timeInterval = setInterval(function () {
        seconds--;
        timer.textContent = seconds;

        if (seconds <= 0) {
            clearInterval(timeInterval);
            timer.textContent = "All done!";
            final.textContent = "Time's up!";
            gameOver();
        } else if (count >= questionsArray.length + 1) {
            clearInterval(timeInterval);
            gameOver();
        }
    }, 1000);
}

// Function to start the quiz and display the questions and answer choices
function beginQuiz() {
    startPage.style.display = "none";
    questionScreen.style.display = "block";
    questionNumber = 0
    startCountdown();
    displayQuestion(questionNumber);
}

function displayQuestion(n) {
    questionAsked.textContent = questionsArray[n].question;
    answerB1.textContent = questionsArray[n].choices[0];
    answerB2.textContent = questionsArray[n].choices[1];
    answerB3.textContent = questionsArray[n].choices[2];
    answerB4.textContent = questionsArray[n].choices[3];
    questionNumber = n;
}

// Function to check the answer and alert wheather it is correct or incorrect 
function checkAn(event) {
    event.preventDefault();
    checkAnswer.style.display = "block";
    setTimeout(function () {
        checkAnswer.style.display = 'none';
    }, 1000);

    if (questionsArray[questionNumber].answer == event.target.value) {
        checkAnswer.textContent = "YAY! CORRECT!";
        score = score + 1;
        // This will subtract 10 seconds from the time if the user answers the question incorrectly 
    } else {
        seconds = seconds - 10;
        checkAnswer.textContent = "Sorry, that is INCORRECT!";
    }

    if (questionNumber < questionsArray.length - 1) {
        displayQuestion(questionNumber + 1);

    } else {
        gameOver();
    }
    count++;
}
// Function for ending the game 
function gameOver() {
    questionScreen.style.display = "none";
    finalPage.style.display = "block";
    console.log(finalPage);
    finalScore.textContent = score;
    timer.style.display = "none";

};
// Functions that will record the scores in a list 
function recieveScore() {
    var currentList = localStorage.getItem("ScoreList");
    if (currentList !== null) {
        newList = JSON.parse(currentList);
        return newList;
    } else {
        newList = [];
    }
    return newList;
};

function createScore() {
    recordScore.innerHTML = "";
    recordScore.style.display = "block";
    var highScore = sort();
    // This variable will display the top 3 highscores 
    var topScores = highScore.slice(0, 3);
    for (var i = 0; i < topScores.length; i++) {
        var item = topScores[i];
        var li = document.createElement("li");
        li.textContent = item.user + "-" + item.score;
        li.setAttribute("date-index", i);
        recordScore.appendChild(li);
    }

};
// Fuction will sort the highscores from highest to lowest
function sort() {
    var unsorted = recieveScore();
    if (recieveScore == null) {
        return;
    } else {
        unsorted.sort(function (a, b) {
            return b.score - a.score;
        })
        return unsorted;
    }
};

function addItem(n) {
    var addedList = recieveScore();
    addedList.push(n);
    localStorage.setItem("ScoreList", JSON.stringify(addedList));
};

function saveScore() {
    var scoreItem = {
        user: userInitials.value,
        score: finalScore
    }
    addItem(scoreItem);
    createScore();
}

// This event listener is for the start button 
startBtn.addEventListener("click", beginQuiz);

// This event listener is for each of the answer choices for the questions 
choicesBtn.forEach(function (click) {
    click.addEventListener("click", checkAn);
});

// This even listener is for the submit button after the user has entered their initials 
submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    finalPage.style.display = "none";
    startScreen.style.display = "none";
    highscorePage.style.display = "block";
    questionScreen.style.display = "none";
    saveScore();

});

// This even listener is for viewing the highscores 
checkHighscore.addEventListener("click", function (event) {
    event.preventDefault();
    finalPage.style.display = "none";
    startScreen.style.display = "none";
    highscorePage.style.display = "block";
    questionScreen.style.display = "none";
    createScore();
});

// This event listener is for the back button that will take the user back to the main page 
backBtn.addEventListener("click", function (event) {
    event.preventDefault();
    finalPage.style.display = "none";
    startScreen.style.display = "block";
    highscorePage.style.display = "none";
    questionScreen.style.display = "none";
    location.reload();
});

// This event listener is for the clear button, and will clear all the previous highscores 
clearBtn.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.clear();
    createScore();
});
