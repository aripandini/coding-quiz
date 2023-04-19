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
    a: "1. ''",
    b: "2. {}",
    c: "3. ()",
    d: "4. []",
    correct: "1. ''",
},
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    a: "1. Javascript",
    b: "2. Terminal/Bash",
    c: "3. for loops",
    d: "4. console.log",
    correct: "4. console.log",
}];

var clickStart = document.getElementById("startQuiz");
var timerEl = document.getElementById("timer");
var timeLeft = 60;
var scoreStorage = {}
var quizTime;
var questionSection = document.querySelector("#quiz");

function timer() {
    timerEl.textContent = "Time remaining: " + timeLeft + "s";
    quizTime = setInterval(function () {
        if (timeLeft > 0) {
            adjustTime(-1); }
         else {
            endQuizPage();
        }
    }, 1000);
}

function adjustTime(amount) {
    timeLeft += amount;
    if (timeLeft < 0) {
        timeLeft = 0;
    }
    timerEl.textContent = "Time remaining: " + timeLeft + "s";
}

clickStart.onclick = timer;
var openQuestion = function (question) {
    questionSection.innerHTML = "";

    var questionHeader = document.createElement("h2");
    questionHeader.textContent = question.question;

    var questionGroup = document.createElement("section")
    questionGroup.id="answeGroup"

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
    
    questionGroup.appendChild(answerA);
    questionGroup.appendChild(answerB);
    questionGroup.appendChild(answerC);
    questionGroup.appendChild(answerD);

    questionSection.appendChild(questionGroup);
}

var currentQuestionIndex = 0;
var userScore = 0;
var correctAnswer = questions[currentQuestionIndex].correct;

var answerClick = function(event) {
    event.preventDefault();
    var userAnswer = event.target.textContent;
    correctAnswer = questions[currentQuestionIndex].correct;

    
 var rightWrong = document.querySelector("#rightWrong");
    if (userAnswer !== correctAnswer) {
         adjustTime(-5);
        rightWrong.textContent = "Wrong!";
        currentQuestionIndex++;
     if (currentQuestionIndex >= questions.length) {
         endQuizPage();
     } else {openQuestion(questions[currentQuestionIndex])};
}
 else if (userAnswer === correctAnswer) {
     currentQuestionIndex++;
     rightWrong.textContent = "Correct!";
     userScore++;
     if (currentQuestionIndex >= questions.length) {
         endQuizPage();
     } else {openQuestion(questions[currentQuestionIndex])};
 }
};

var quiz = function (event) {
    event.preventDefault();
    resetDisplay();
    openQuestion(questions[currentQuestionIndex]);
};

function resetDisplay() {
    questionSection.innerHTML="";
    document.querySelector("#intro").style.display = "none";
}

var initials; 
function endQuizPage() {
    resetDisplay();
    timerEl.textContent = "";
    clearInterval(quizTime);

    var endPageTitle = document.createElement("h2");
    questionSection.appendChild(endPageTitle);

    var endPageScore = document.createElement("p");
    questionSection.appendChild(endPageScore);

    endPageTitle.innerHTML = "Quiz Over!";
    endPageScore.innerHTML = "Your final score is " + userScore + ".";

    var subInitials = document.createElement("p");
    questionSection.appendChild(subInitials);

    subInitials.innerHTML = "Please enter your initials";

    let blank = document.querySelector("#rightWrong");
    blank.innerHTML = "";

    var endPageInitials = document.createElement("input");
    blank.appendChild(endPageInitials);

    var submitInitialBtn = document.createElement("button");
    submitInitialBtn.textContent = "Submit";
    blank.appendChild(submitInitialBtn);

    submitInitialBtn.addEventListener("click", () => {
        
        if (endPageInitials.value.length === 0) return false;

        let storeInitials = (...input) => {
            let data = { "name":input[0], "score":input[1]}
            var quizScores = []
            var scores = {}

            if (localStorage.getItem("object") === null){   
                scores.quizScores = quizScores
            } else {
                try {
                    scores = JSON.parse(localStorage.getItem("object"));
                } catch {
                    scores.quizScores = quizScores
                }            
            }
            scores.quizScores.push(data);
            localStorage.setItem("object", JSON.stringify(scores));
        }
       storeInitials(endPageInitials.value, userScore);

        var playAgain = document.createElement("button");
        playAgain.textContent= "Play Again!";
        blank.appendChild(playAgain);

        playAgain.addEventListener("click", () => {
            location.reload();
        })
    });

    document.querySelector("input").value = "";

    endPageInitials.addEventListener("submit", endQuizPage);   
};
function renderInitials() {
    submitInitialBtn.addEventListener('click', function(event) {
        event.preventDefault;
}
)};
clickStart.addEventListener('click', quiz);
