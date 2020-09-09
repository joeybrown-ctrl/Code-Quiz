const question = document.querySelector("#question");
const button1 = document.querySelector("#btn1");
const button2 = document.querySelector("#btn2");
const button3 = document.querySelector("#btn3");
const button4 = document.querySelector("#btn4");
const timeEl = document.querySelector("#timer");

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

//event listeners for buttons
button1.addEventListener("click", function(event){
    event.preventDefault();
    if (button1.textContent === currentQuestion.correctAnswer) {
        alert("correct answer");
    } else {
        alert("wrong!");
        secondsLeft -= 15;
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
        secondsLeft -= 15;
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
        secondsLeft -= 15;
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
        secondsLeft -= 15;
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
    let highScores = document.querySelector("#highscores-div");

    highScores.style.display = "block";

    finalScore.textContent = " time left: " + secondsLeft;
    
}

//function to save initials and score to local storage
function initialsSave() {
    const initials = document.querySelector("#initials");
    let initializer = initials.value.trim();
    if (initializer !== "") {
        let highScores = JSON.parse(window.localStorage.getItem("high-scores")|| "[]");

        let newScore = {
            score: secondsLeft,
            initials: initializer,

        }

        highScores.push(newScore);
        window.localStorage.setItem("high-scores", JSON.stringify(highScores));

        window.location.href = "index.html";

        
    }
}
submit.onclick = initialsSave;