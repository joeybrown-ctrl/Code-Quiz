const question = document.querySelector("#question");
const button1 = document.querySelector("#btn1");
const button2 = document.querySelector("#btn2");
const button3 = document.querySelector("#btn3");
const button4 = document.querySelector("#btn4");
const timeEl = document.querySelector("#timer");
const initials = document.querySelector("#initials");
const submit = document.querySelector("#submit-button");

//timer function
let secondsLeft = 60;
let timer
//function setTime() {
   // let timerInterval = setInterval(function () {
   
   // }, 1000);

//}

//setTime();

//object of questions + answers
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
];

let index = 0;
let currentQuestion = questionAnswers[0];

//function to call questions
function nextQuestion() {
    currentQuestion = questionAnswers[index];
    question.textContent = currentQuestion.question;
    button1.textContent = currentQuestion.answers[0];
    button2.textContent = currentQuestion.answers[1];
    button3.textContent = currentQuestion.answers[2];
    button4.textContent = currentQuestion.answers[3];
   
}

function wrongAnswer() {
    if (currentQuestion !== questionAnswers.question.correctAnswer) {
        secondsLeft -= 15;
        alert("You've lost points, ya ding dong!");
    } else {
        alert("Ya smart");
    }
}



//event listeners for buttons
button1.addEventListener("click", function(event){
    event.preventDefault();
    if (button1.textContent === currentQuestion.correctAnswer) {
        alert("correct answer");
    } else {
        alert("wrong!");
    }
    index++
    if (index === questionAnswers.length) {
        quizEnd();
    } else {
        nextQuestion();
    }
});

button2.addEventListener("click", function(event){
    event.preventDefault();
    if (button2.textContent === currentQuestion.correctAnswer) {
        alert("correct answer");
    } else {
        alert("wrong!");
    }
    index++
    if (index === questionAnswers.length) {
        quizEnd();
    } else {
        nextQuestion();
    }
});

button3.addEventListener("click", function(event){
    event.preventDefault();
    if (button3.textContent === currentQuestion.correctAnswer) {
        alert("correct answer");
    } else {
        alert("wrong!");
    }
    index++
    if (index === questionAnswers.length) {
        quizEnd();
    } else {
        nextQuestion();
    }
});

button4.addEventListener("click", function(event){
    event.preventDefault();
    if (button4.textContent === currentQuestion.correctAnswer) {
        alert("correct answer");
    } else {
        alert("wrong!");
    }
    index++
    if (index === questionAnswers.length) {
        quizEnd();
    } else {
        nextQuestion();
    }
    

});



//function to start quiz
function quizStart() {
    timer = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = "time left: " + secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timer);
            quizEnd();
        }
    }, 1000);


    question.removeAttribute("class");
    
    nextQuestion();
}

quizStart()


//function to end quiz
function quizEnd() {
    clearInterval(timer);
    let endScreenEl = document.querySelector("#congrats");
    let finalScore = document.querySelector("#final-score");

    finalScore.textContent = "time left: " + secondsLeft;
    endScreenEl.textContent = "Congrats! Your score is: ";
}

//function to save initials and score to local storage
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
submit.onclick = initialsSave;