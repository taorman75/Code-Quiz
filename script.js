var score = 0;
var startBtn = document.getElementById("#start-button");
var timeEl = document.querySelector("#timer");
var quizIntroEl = document.getElementById("quiz-intro");
var questionBoxEl = document.getElementById("question-box");

var questions = [
  {
    title: "Which brackets are used to enclose an array?",
    choices: ["Square", "Curly", "Round", "Squiggly"],
    answer: "Square"
  },
  {
    title: "What does the C stand for in CSS?",
    choices: ["Computer", "Cascading", "Crashing", "Concatenate"],
    answer: "Cascading"
  },
  {
    title: "Which of the following cannot be part of an object?",
    choices: ["Array", "Boolean", "String", "Prototype"],
    answer: "M"
  },
  {
    title: "What HTML page name will most web browsers seek first?",
    choices: ["Home", "Index", "About Me", "First"],
    answer: "Index"
  },
  {
    title: "Which of the following are not JavaScript conditional statements?",
    choices: ["if", "else", "get", "switch"],
    answer: "get"
  }
];

var qIndex = 0;
var rightAnswer = questions[qIndex].answer;


function setTime() {
  
  var secondsLeft = 60;
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    // console.log("Hello world");
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    alert("Time is up!");
    }
  }, 1000);
}

// function checkAnswer () {
//   for ()
// }


// on click event, "this" is going to equal what is clicked; then you can pull value $(this).val();
function quizStart() {
var currQuest = questions[qIndex];
  
  quizIntroEl.classList.add("hide");
  // populate the box with Question 1 and choices (which need to be buttons)
  var qTitle = document.createElement("h1");
  qTitle.textContent = questions[qIndex].title;
  questionBoxEl.appendChild(qTitle);


  for (i=0; i < questions[qIndex].choices.length; i++) {
    // debugger;
    var ansBtn = document.createElement("button");
    ansBtn.textContent = questions[qIndex].choices[i];
    ansBtn.setAttribute("value", questions[qIndex].choices[i]);
    console.log(questions[qIndex].choices[i]);
    questionBoxEl.appendChild(ansBtn);
  }
  ansBtn.onclick(questionClick); // says "ansBtn.onclick is not a function"
  ansBtn.onclick(console.log("yay"));
  

}
// Logic
function questionClick (){
  if (questionClick !== rightAnswer) {
    score+=10;
    alert("Correct! You get ten points!");
  } else {
    alert("Incorrect! You lose 10 seconds!");
    secondsLeft = -10;
  }
}

function endGame () {
  document.getElementById("container");
  var gameEnd = document.createElement("h1");
  gameEnd.textContent = "Your final score is:" + score;
  gameEnd.appendChild("#container");
  
}

function storeHighScores () {
  var playerName = document.querySelector("#playerName").nodeValue.trim();

  var finalScore = {
    score: score,
    name: playerName
  }
  var hiScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
  hiScores.push(finalScore);
  window.localStorage.setItem("highScores", JSON.stringify(hiScores));
}


  // currQuest.choices.forEach(function (choice) {
//   var ansBtn = document.createElement("button");
//   ansBtn.textContent = choice;
  // questionBoxEl.appendChild(ansBtn);
  
  // click the buttons and get a response
  


$("#start-button").on("click", function () {
  setTime();
  quizStart();
});




