var score = 0;
var startBtn = document.getElementById("#start-button");
var timeEl = document.querySelector("#timer");
var quizIntroEl = document.getElementById("quiz-intro");
var questionBoxEl = document.getElementById("question-box");
var qIndex = 0;
var secondsLeft = 60;

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
    answer: "Prototype"
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


function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }}, 1000);}


function quizStart() {
  quizIntroEl.classList.add("hide");
  getQuestion();}

function getQuestion() {
  var currQuest = questions[qIndex];
  if (qIndex < questions.length) {
  var qTitle = document.createElement("h1");
  qTitle.textContent = questions[qIndex].title;
  questionBoxEl.appendChild(qTitle);
  currQuest.choices.forEach(function (i) {
    var ansBtn = document.createElement("button");
    ansBtn.textContent = i;
    ansBtn.setAttribute("value", i);
    ansBtn.setAttribute("class", "answer-button");
    questionBoxEl.appendChild(ansBtn);
    ansBtn.onclick = questionClick;
  })} else {
  endGame();}}

function questionClick (){
  var rightAnswer = questions[qIndex].answer;
  if (this.value === rightAnswer) {
    score += 10;
    alert("Correct! You get ten points!");
    qIndex++; 
  } else {
    alert("Incorrect! You lose 10 seconds!");
    secondsLeft -= 10;
    qIndex++;
  }
    questionBoxEl.innerHTML = "";
    getQuestion();}

function endGame () {
  document.getElementById("question-box");
  var gameEnd = document.createElement("h1");
  gameEnd.textContent = "Game Over! Your final score is: " + score;
  questionBoxEl.appendChild(gameEnd);
  var submitScore = document.createElement("button");
  submitScore.textContent = "Would you like to save your score?";
  questionBoxEl.appendChild(submitScore);
  submitScore.onclick = saveScore;
}

function saveScore () {
  document.getElementById("question-box");
  var playerName = document.createElement("form");
  playerName.textContent = prompt("Please enter your name");
  var playerScore = score;
  console.log(playerName);
  console.log(playerScore);
  var finalScore = {
    name: playerName,
    score: playerScore
  }
  var hiScores = JSON.parse(window.localStorage.getItem("highScores"));
  hiScores.push(finalScore);
  window.localStorage.setItem("highScores", JSON.stringify(hiScores));
}


$("#start-button").on("click", function () {
  setTime();
  quizStart();
});

document.getElementById("highScores").onclick = alert(hiScores);

