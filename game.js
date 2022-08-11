const question = document.querySelector(".question");
const choices = document.querySelector(".choices");
const choice1 = document.querySelector("#choice-1");
const choice2 = document.querySelector("#choice-2");
const choice3 = document.querySelector("#choice-3");
const choice4 = document.querySelector("#choice-4");
const score = document.querySelector('.score');
const questionNumber = document.querySelector('.questionNumber');


const question1 = {
    question: "How tall is Mt. Everest?",
    choices: ["30,406ft", "29,469ft", "29,032ft", "28,898ft"],
    correctAnswer: "29,032ft"
};

const question2 = {
    question: "Which ocean is the largest?",
    choices: ["Atlantic", "Pacific", "Indian", "Arctic"],
    correctAnswer: "Pacific"
};

const question3 = {
    question: "What is the most expensive spice by weight?",
    choices: ["Saffron", "Vanilla", "Cardamom", "Grains of Paradise"],
    correctAnswer: "Saffron"
};

const question4 = {
    question: "What is the airspeed velocity of an unladen european swallow?",
    choices: ["55mph", "24mph", "33mph", "16mph"],
    correctAnswer: "24mph"
};

const question5 = {
    question: "How many keys are on a standard grand piano?",
    choices: ["76", "90", "102", "88"],
    correctAnswer: "88"
};

const question6 = {
    question: "Which country consumes the most chocolate per capita?",
    choices: ["Germany", "USA", "Switzerland", "France"],
    correctAnswer: "Switzerland"
};

const question7 = {
    question: "What is the driest continent?",
    choices: ["Africa", "South America", "Asia", "Antarctica"],
    correctAnswer: "Antarctica"
};

const question8 = {
    question: "What is the largest organ of the human body?",
    choices: ["Skin", "Lungs", "Liver", "Heart"],
    correctAnswer: "Skin"
};

const question9 = {
    question: "What temperature does water boil at?",
    choices: ["200 Degrees Fahrenheit", "220 Degrees Fahrenheit", "212 Degrees Fahrenheit", "196 Degrees Fahrenheit"],
    correctAnswer: "212 Degrees Fahrenheit"
};

const question10 = {
    question: "What year was the Corvette introduced?",
    choices: ["1953", "1955", "1949", "1957"],
    correctAnswer: "1953"
};

const gameOver = {
    question: '',
    choices: ['', '', '', ''],
    correctAnswer: ' '
};


let gameInProgress = true;

let playerScore = 0;

let number = 1;

let currentQuestion = 0;

const allQuestions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, gameOver];


thisQuestion();

function thisQuestion() {
    question.innerText = allQuestions[currentQuestion].question;
    choice1.innerText = allQuestions[currentQuestion].choices[0];
    choice2.innerText = allQuestions[currentQuestion].choices[1];
    choice3.innerText = allQuestions[currentQuestion].choices[2];
    choice4.innerText = allQuestions[currentQuestion].choices[3];
};


function isGameOver() {
    if (currentQuestion === 10) {
        gameInProgress = false;
    }
};


function getResults() {
    if (playerScore <= 3) {
        question.innerHTML = `You scored ${playerScore}/10. You should work on it.`
    } else if (playerScore > 3 && playerScore < 7) {
        question.innerHTML = `You scored ${playerScore}/10. You're pretty good!`
    } else if (playerScore >= 7) {
        question.innerHTML = `You scored ${playerScore}/10! You're a trivia wizard!`
    }
};


choices.addEventListener('mouseover', function (e) {
    if (e.target.style.background === 'red') {
        e.target.style.background = 'red'
    } else if (e.target.style.background === 'green') {
        e.target.style.background = 'green'
    } else {
        e.target.style.background = 'linear-gradient(black, blue)'
    }
});


choices.addEventListener('mouseout', function (e) {
    if (e.target.style.background === 'red') {
        e.target.style.background = 'red';
    } else if (e.target.style.background === 'green') {
        e.target.style.background = 'green';
    } else {
        e.target.style.background = 'linear-gradient(blue, black)';
    }
});


choices.addEventListener('click', function (e) {
    if (e.target.innerHTML === allQuestions[currentQuestion].correctAnswer) {
        e.target.style.background = 'green';
        playerScore++;
        score.innerText = `Playerscore: ${playerScore}`;
    } else {
        e.target.style.background = 'red';
    }
    setTimeout(function () {
        number++;
        questionNumber.innerText = `Question ${number}`;
        currentQuestion++;
        e.target.style.background = 'linear-gradient(blue, black)';
        thisQuestion();
        isGameOver();
        if (gameInProgress === false) {
            questionNumber.innerText = '';
            getResults();
            const playAgain = document.createElement('h3');
            playAgain.innerText = 'Play Again';
            document.querySelector('.background').appendChild(playAgain);
            playAgain.addEventListener('click', function () {
                window.location.reload();
            })
        }
    }, 400)
});


