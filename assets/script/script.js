var questionArr = [
    {
        question: "Welcome to the Quiz!!!",
        answers: ["start"],
        correctAns: 0,
    },
    {
        question: "What keyword is used to define a variable in JavaScript?",
        answers: ["bool", "int", "var", "function"] ,
        correctAns: 2,
    },
    {
        question: `var myFunction = function()
        Is an example of what kind of function?`,
        answers: ["Function Declaration", "Function Call", "Method", "Function Expression"],
        correctAns: 3,
    },
    {
        question: "What does DOM stand for?" ,
        answers: ["Document Object Model", "District Oriented Mama", "Direct Object Model", "Drink Orange Milk"],
        correctAns: 0,
    },
    {
        question: "An if/else statement is also known as what?",
        answers: ["Correctional statement", "Conditional statement", "Switch case", "What if statement"],
        correctAns: 1,
    },
    {
        question: "Which of the following is the proper way to declare a for loop?",
        answers: ["for(var loop = for; loop < for.length; =loop)", 
        "for i = 0 i < someArray.length i ++",
        "for(i=0; i < someArray.length; i++)",
        "do while(i < someArray.length)"],
        correctAns: 2,
    },
];

var score = 0;
var answerCorrect = false;
var currQuestion = 0;

var button_0 = document.querySelector("#btn-0");


var questionEl = document.querySelector(".question");
var answerEl = document.querySelector(".answers");

//questionEl.textContent = questionArr[0]["question"];
//answerEl.innerHTML ="<p>" + questionArr[0].answers[0] + "</p>"; 
//console.log(answerEl)
//console.log(questionArr);

   // answerEl.innerHTML = "<button id = 'btn-1'>" + questionArr[i].answers[1] + "</button>";
var quizProgress = function() {
    switch (currQuestion) {
        case 0:
            questionEl.textContent = questionArr[currQuestion].question;
            document.querySelector("#btn-0").textContent = questionArr[currQuestion].answers[0];
          //  if (event.target.value === )
            currQuestion ++;
            break;
        case 1:
            questionEl.textContent = questionArr[currQuestion].question;
            document.querySelector("#btn-0").textContent = questionArr[currQuestion].answers[0];
            document.querySelector("#btn-1").textContent = questionArr[currQuestion].answers[1];
            document.querySelector("#btn-2").textContent = questionArr[currQuestion].answers[2];
            document.querySelector("#btn-3").textContent = questionArr[currQuestion].answers[3];
            currQuestion ++;
            break;
    }
}

quizProgress();
document.querySelector(".answer").addEventListener("click");
