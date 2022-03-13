//Array holding questions and answers
//each question has boolean correctAns attached
var questionArr = [
    {
        id: 0,
        question: "What keyword is used to define a variable in JavaScript?",
        answers: [{text:"bool", correctAns: false},
                  {text:"int", correctAns: false},
                  {text:"var", correctAns: true}, 
                  {text:"function", correctAns: false}],
    },
    {
        id: 1,
        question: `var myFunction = function()
        Is an example of what kind of function?`,
        answers: [{text:"Function Declaration", correctAns: false},
                  {text:"Function Call", correctAns: false},
                  {text:"Method", correctAns: false},
                  {text:"Function Expression", correctAns: true}],
    },
    {
        id: 2,
        question: "What does DOM stand for?" ,
        answers: [{text:"Document Object Model", correctAns: true},
                  {text:"District Oriented Mama", correctAns: false},
                  {text:"Direct Object Model", correctAns: false},
                  {text:"Drink Orange Milk", correctAns: false}],
    },
    {
        id: 3,
        question: "An if/else statement is also known as what?",
        answers: [{text:"Correctional statement", correctAns: false},
                  {text:"Conditional statement", correctAns: true},
                  {text:"Switch case", correctAns: false},
                  {text:"What if statement", correctAns: false}],
    },
    {
        id: 4,
        question: "Which of the following is the proper way to declare a for loop?",
        answers: [{text:"for(var loop = for; loop < for.length; =loop)", correctAns: false}, 
                  {text:"for i = 0 i < someArray.length i ++", correctAns: false},
                  {text:"for(i=0; i < someArray.length; i++)", correctAns: true},
                  {text:"do while(i < someArray.length)", correctAns: false}],
    },
];

var timeLeft = 75;
var score = 0;
var id = 0;
var scoreRecord = [];

//Creates element variables to target HTML 
var timerEl = document.querySelector(".timer");
var questionEl = document.querySelector(".question-display");
var answerEl = document.querySelector(".answer-bank");
var evaluateEl = document.querySelector(".evaluate");

//Creates elements to dynamically create HTML elements as quiz progresses
var btnStart = document.createElement("button");
btnStart.className = "answerButton";
btnStart.id = "btnStart";

var btn0 = document.createElement("button");
btn0.className = "answerButton";
btn0.id = "btn0";

var btn1 = document.createElement("button");
btn1.className = "answerButton";
btn1.id = "btn1";

var btn2 = document.createElement("button");
btn2.className = "answerButton";
btn2.id = "btn2";

var btn3 = document.createElement("button");
btn3.className = "answerButton";
btn3.id = "btn3";

//Starts the quiz once the start button is clicked
//Adds timer and timer display to quiz
var start = function() {
    loadScores();
    console.log(scoreRecord);
    questionEl.textContent = `Welcome to the Coding Quiz! This is a timed quiz, and each question will have 4 options. 
Click the start button below to begin!`;
    btnStart.textContent = "Start";
    answerEl.appendChild(btnStart);
    btnStart.addEventListener("click", function() {
        iterate(id);
        var timer = setInterval(function() {
            if (timeLeft >= 0) {
                timerEl.textContent = `Time Remaining: ${timeLeft}`;
                timeLeft --;
            } else {
                clearInterval(timer);
                scoreRecord.push(score);
                endGame();
            }
        }, 1000); 
        })
    };

//Function to endgame
//TODO display high score list, add option to record high score
var endGame = function() {
    questionEl.textContent = `Congratulations! Your score is ${score}!`;
    answerEl.textContent = `Check your local storage for a list of your scores!`;
    
    timerEl.remove();
    btn0.remove();
    btn1.remove();
    btn2.remove();
    btn3.remove();

    localStorage.setItem("pastScores", JSON.stringify(scoreRecord));

};

//Loads scores from local storage
var loadScores = function() {
    var savedScores = localStorage.getItem("pastScores");

    if (!savedScores) {
        return false;
    } else {
        savedScores = JSON.parse(savedScores);
        scoreRecord = savedScores;
    }
}

//Checks if answer is correct, increments ID and calls iterate again to move quiz forward
var checkAns = function(event) {
    var correctEl = event.target.getAttribute("data-answer");

    if (correctEl === "true") {
        score += 10;
        id ++;
        iterate(id);
        evaluateEl.textContent = "That is correct!";
        answerClear;

    } else {
        timeLeft -= 10;
        id ++;
        iterate(id);
        evaluateEl.textContent = "That is not correct!";
        answerClear;
    }
}

//Timer to clear evaluateEl
var answerClear = setInterval(function() {
    evaluateEl.textContent = "";
}, 3000)

var iterate = function(id) {
    //Removes start button
    btnStart.remove();
    //Checks to see if this is the first question in quiz, adds the remaining option buttons if true
    if (id === 0) {
        answerEl.appendChild(btn0);
        answerEl.appendChild(btn1);
        answerEl.appendChild(btn2);
        answerEl.appendChild(btn3);
    }

    //Checks to see if player has answered all the questions
    if (id === questionArr.length) {
        scoreRecord.push(score);
        endGame();
    } else {
    questionEl.textContent = questionArr[id].question;
    btn0.textContent = questionArr[id].answers[0].text;
    btn0.setAttribute("data-answer", questionArr[id].answers[0].correctAns);

    btn1.textContent = questionArr[id].answers[1].text;
    btn1.setAttribute("data-answer", questionArr[id].answers[1].correctAns);

    btn2.textContent = questionArr[id].answers[2].text;
    btn2.setAttribute("data-answer", questionArr[id].answers[2].correctAns);

    btn3.textContent = questionArr[id].answers[3].text;
    btn3.setAttribute("data-answer", questionArr[id].answers[3].correctAns);

    btn0.addEventListener("click", checkAns);

    btn1.addEventListener("click", checkAns);

    btn2.addEventListener("click", checkAns);

    btn3.addEventListener("click", checkAns);
    };
}

start();