// List of all questions and answers
var questions = [{
    question: "Commonly used data types DO NOT include:",
    a: "1. Strings",
    b: "2. Booleans",
    c: "3. Alerts",
    d: "4. Numbers",
    correct: "3. Alerts",
},
{
    question: "The condition in an if/else statement is enclosed with ____.",
    a: "1. ''",
    b: "2. {}",
    c: "3. ()",
    d: "4. []",
    correct: "3. ()",
},
{
    question: "Arrays in JavaScript can be used to store ____.",
    a: "1. Numbers and strings",
    b: "2. Other arrays",
    c: "3. Booleans",
    d: "4. All of the above",
    correct: "4. All of the above",
},
{
    question: "String values must be encosed within ____ when being assigned to variables.",
    a: "1. Quotes",
    b: "2. Curly brackets",
    c: "3. Parentheses",
    d: "4. Square brackets",
    correct: "1. Quotes",
},
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    a: "1. Javascript",
    b: "2. Terminal/Bash",
    c: "3. for loops",
    d: "4. console.log",
    correct: "4. console.log",
}];
//Setting Variables 
var clickStart = document.getElementById("startQuiz");
var timerEl = document.getElementById("timer");
var timeLeft = 120;
var quizDuration;
var questionSection = document.querySelector("#quiz");
//Timer Function
function timer() {
    timerEl.textContent = "Time remaining: " + timeLeft + "s";
    quizDuration = setInterval(function () {
        if (timeLeft > 0) {
            adjustTime(-1); }
        //  else {
            // endQuizPage();
        // }
    }, 1000);
}
function adjustTime(amount) {
    timeLeft += amount;
    if (timeLeft < 0) {
        timeLeft = 0;
    }
    timerEl.textContent = "Time remaining: " + timeLeft + "s";
}
//Start Time + Set Up questions
clickStart.onclick = timer;
var renderQuestion = function (question) {
    questionSection.innerHTML = "";

    var questionHeader = document.createElement("h2");
    questionHeader.textContent = question.q;

    var answerA = document.createElement("button");
    answerA.textContent = question.a;
    answerA.addEventListener("click", answerClick);

    var answerB = document.createElement("button");
    answerB.textContent = question.b;
    answerB.addEventListener("click", answerClick);

    var answerC = document.createElement("button");
    answerC.textContent = question.c;
    answerC.addEventListener("click", answerClick);

    var answerD = document.createElement("button");
    answerD.textContent = question.d;
    answerD.addEventListener("click", answerClick);

    questionSection.appendChild(questionHeader);
    questionSection.appendChild(answerA);
    questionSection.appendChild(answerB);
    questionSection.appendChild(answerC);
    questionSection.appendChild(answerD);
}
// First 

// Second

// Third 

clickStart.addEventListener('click', quiz);
