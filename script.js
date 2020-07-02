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

var secondsLeft = 60;

function setTime() {
  
  
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}


function questionClick (){
  //console.log(this.value);
  
  if (this.value === rightAnswer) {
    score += 10;
    alert("Correct! You get ten points!");
    qIndex++;
   
  } else {
    alert("Incorrect! You lose 10 seconds!");
    secondsLeft -= 10;
    qIndex++;
    
  }
  console.log(qIndex);
  questionBoxEl.innerHTML = ''
  getQuestion();
}


function getQuestion() {
  var currQuest = questions[qIndex];
  // populate the box with Question 1 and choices (which need to be buttons)
  var qTitle = document.createElement("h1");
  qTitle.textContent = questions[qIndex].title;
  questionBoxEl.appendChild(qTitle);

  currQuest.choices.forEach(function (i) {
    console.log(i);
    
    var ansBtn = document.createElement("button");
    ansBtn.textContent = i;
    ansBtn.setAttribute("value", i);
    ansBtn.setAttribute("class", "answer-button");
    questionBoxEl.appendChild(ansBtn);
    ansBtn.onclick = questionClick;
  })

}


// on click event, "this" is going to equal what is clicked; then you can pull value $(this).val();
function quizStart() {
  quizIntroEl.classList.add("hide");
  getQuestion();
}
// Logic


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



