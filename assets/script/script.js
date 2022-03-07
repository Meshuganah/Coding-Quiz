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
        answers: ["for(var loop = for; loop < for.length; =loop", 
        "for i = 0 i < someArray.length i ++",
        "for(i=0; i < someArray.length; i++)",
        "do while(i < someArray.length)"],
        correctAns: 2,
    },
];
var questionNum = 0;
var score = 0;
var answerCorrect = false;