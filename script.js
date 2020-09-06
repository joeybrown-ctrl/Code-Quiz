const question = document.querySelector("#question");
const button1 = document.querySelector("#btn1");
const button2 = document.querySelector("#btn2");
const button3 = document.querySelector("#btn3");
const button4 = document.querySelector("#btn4");
const timer = document.querySelector("#timer");
const initials = document.querySelector("#initials");
const submit = document.querySelector("#submit-button");

//timer function
let secondsLeft = 60;

function setTime() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "time left: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            quizEnd();
        }
    }, 1000);

}

setTime();

function quizStart() {
    clearInterval(timer);
    let startScreenEl = document.querySelector("#start-btn");
    
    nextQuestion();
}

//object of questions + answers
//figure out how to randomize the answers so that the correct answer isn't always in the same spot
let questionAnswers = [
    {
        question: "Commonly used data types do NOT include",
        answers: [ "strings",
            "booleans",
            "numbers",
            "alerts",
        ],
        correctAnswer: "alerts"
    },

    {
        question: "The condition for an if/else statement is enclosed within",
        answers: ["quotes",
            "curly brackets",
            "parentheses",
            "square brackets",
        ],
        correctAnswer: "parentheses",
    },

    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["<script>",
            "<scripting>",
            "<js>",
            "<javascript>",
        ],
        correctAnswer: "<script>",
    },

    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: ["alertBox('Hello World');",
            "alert('Hello World');",
            "msgBox('Hello World');",
            "msg('Hello World');",
        ],
        correctAnswer: "alert('Hello World');"
    },

    {
        question: "How to write an if statement in JavaScript",
        answers: ["if i === 5",
            "if i = 5",
            "if i = 5 then",
            "if(i === 5)",
        ],
        correctAnswer: "if(i === 5)"
    },

    {
        question: "How to write an if statement for executing some code if 'i' is not equal to 5?",
        answers: ["if i ==! 5 then",
            "if(i !== 5)",
            "if(i <> 5)",
            "if i <> 5",
            
        ],
        correctAnswer: "if(i !== 5)"
        
    },

    {
        question: "How do you find the number with the highest value of x and y?",
        answers: ["Math.ceil(x, y)",
            "ceil(x, y)",
            "top(x, y)",
            "Math.max(x, y)",
        ],
        correctAnswer: "Math.max(x, y)"
    }
];

let index = 0;
let currentQuestion = questionAnswers[0];

nextQuestion();

function nextQuestion() {
    currentQuestion = questionAnswers[index];
    question.textContent = currentQuestion.question;
    button1.textContent = currentQuestion.answers[0];
    button2.textContent = currentQuestion.answers[1];
    button3.textContent = currentQuestion.answers[2];
    button4.textContent = currentQuestion.answers[3];

    
    //button4.textContent = currentQuestion.correctAnswer;
    
    //figure out how to have time left as score at the end of quiz
    //and how to log user intials (form?) 
    //and save their score to local storage
   
}

button1.addEventListener("click", function(event){
    event.preventDefault();
    if (button1.textContent === currentQuestion.correctAnswer) {
        alert("correct answer");
    } else {
        alert("wrong!");
    }
    index++
    nextQuestion();
});

button2.addEventListener("click", function(event){
    event.preventDefault();
    if (button2.textContent === currentQuestion.correctAnswer) {
        alert("correct answer");
    } else {
        alert("wrong!");
    }
    index++
    nextQuestion();
});

button3.addEventListener("click", function(event){
    event.preventDefault();
    if (button3.textContent === currentQuestion.correctAnswer) {
        alert("correct answer");
    } else {
        alert("wrong!");
    }
    index++
    nextQuestion();
});

button4.addEventListener("click", function(event){
    event.preventDefault();
    if (button4.textContent === currentQuestion.correctAnswer) {
        alert("correct answer");
    } else {
        alert("wrong!");
    }
    index++
    nextQuestion();
});

function quizEnd() {
    clearInterval(timer);
    let endScreenEl = document.querySelector("#congrats");
    let finalScore = document.querySelector("#final-score");

    finalScore.textContent = "time left: " + secondsLeft;
    endScreenEl.textContent = "Congrats! Your score is: ";
}

function initialsSave() {
    let initializer = initials.value.trim();
    if (initializer !== "") {
        alert("enter your initials");
        let highScores = JSON.parse(window.localStorage.getItem("high-scores"));

        let newScore = {
            score: time,
            initials: initials,

        }

        highScores.push(newScore);
        window.localStorage.setItem("high-scores", JSON.stringify(highScores));

        window.location.href = "highscore.html"

        
    }
}
submit.onClick = initialsSave