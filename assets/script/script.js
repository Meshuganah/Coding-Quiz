//Array holding questions and answers
//each question has isFalse or isCorrect attached
var questionArr = [
    {
        id: 0,
        question: "What keyword is used to define a variable in JavaScript?",
        answers: ["bool", "int", "var", "function"] ,
        correctAns: 2,
    },
    {
        id: 1,
        question: `var myFunction = function()
        Is an example of what kind of function?`,
        answers: ["Function Declaration", "Function Call", "Method", "Function Expression"],
        correctAns: 3,
    },
    {
        id: 2,
        question: "What does DOM stand for?" ,
        answers: ["Document Object Model", "District Oriented Mama", "Direct Object Model", "Drink Orange Milk"],
        correctAns: 0,
    },
    {
        id: 3,
        question: "An if/else statement is also known as what?",
        answers: ["Correctional statement", "Conditional statement", "Switch case", "What if statement"],
        correctAns: 1,
    },
    {
        id: 4,
        question: "Which of the following is the proper way to declare a for loop?",
        answers: ["for(var loop = for; loop < for.length; =loop)", 
        "for i = 0 i < someArray.length i ++",
        "for(i=0; i < someArray.length; i++)",
        "do while(i < someArray.length)"],
        correctAns: 2,
    },
];

var score = 0;
var currQuestion = 0;
var id = 0;
//Creates element variables to target HTML 
var questionEl = document.querySelector(".question-display");
var answerEl = document.querySelector(".answer-bank");

//Creates elements to append questions as quiz progresses
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

questionEl.textContent = `Welcome to the Coding Quiz! This is a timed quiz, and each question will have 4 options. 
Click the start button below to begin!`;
btn0.textContent = "Start";
answerEl.appendChild(btn0);

//Starts the quiz once the start button is clicked
//TODO potentially add timer start here
var start = function() {
    btn0.addEventListener("click", function() {
        iterate(id); 
    }
)};

var endGame = function() {
    questionEl.textContent = `Congratulations! Your score is ${score}!`
    btn0.remove();
    btn1.remove();
    btn2.remove();
    btn3.remove();
};

var iterate = function(id) {
    //Checks to see if this is the first question in quiz, adds the remaining option buttons if true
    if (id === 0) {
        answerEl.appendChild(btn1);
        answerEl.appendChild(btn2);
        answerEl.appendChild(btn3);
    }

    //Checks to see if player has answered all the questions
    if (id === questionArr.length) {
        endGame();
    }
    questionEl.textContent = questionArr[id].question;
    btn0.textContent = questionArr[id].answers[0];
    btn1.textContent = questionArr[id].answers[1];
    btn2.textContent = questionArr[id].answers[2];
    btn3.textContent = questionArr[id].answers[3];

    btn0.addEventListener("click", function() {
        id ++;
        iterate(id);
    });

    btn1.addEventListener("click", function() {
        id ++;
        iterate(id);
    });

    btn2.addEventListener("click", function() {
        id ++;
        iterate(id);
    });

    btn3.addEventListener("click", function() {
        id ++;
        iterate(id);
    })
}

start();
//questionEl.textContent = questionArr[0]["question"];
//answerEl.innerHTML ="<p>" + questionArr[0].answers[0] + "</p>"; 
//console.log(answerEl)
//console.log(questionArr);

// answerEl.innerHTML = "<button id = 'btn-1'>" + questionArr[i].answers[1] + "</button>";

