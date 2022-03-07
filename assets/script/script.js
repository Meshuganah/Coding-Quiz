var questionArr = [
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

var questionEl = document.querySelector(".question");
var answerEl = document.querySelector(".answers");

//questionEl.textContent = questionArr[0]["question"];
//answerEl.innerHTML ="<p>" + questionArr[0].answers[0] + "</p>"; 
//console.log(answerEl)
//console.log(questionArr);

for (i = 0; i < questionArr.length; i++) {
    questionEl.textContent = questionArr[i]["question"];
    answerEl.appendChild("<button id = 'btn-0'>" + questionArr[i].answers[0] + "</button>");
   // answerEl.innerHTML = "<button id = 'btn-1'>" + questionArr[i].answers[1] + "</button>";
}
