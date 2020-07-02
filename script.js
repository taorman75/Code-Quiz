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




// on click event, "this" is going to equal what is clicked; then you can pull value $(this).val();
function quizStart() {
var currQuest = questions[qIndex];
  
  quizIntroEl.classList.add("hide");
  // populate the box with Question 1 and choices (which need to be buttons)
  var qTitle = document.createElement("h1");
  qTitle.textContent = questions[qIndex].title;
  questionBoxEl.appendChild(qTitle);


  for (i=0; i < questions[qIndex].choices.length; i++) {
    var ansBtn = document.createElement("button");
    ansBtn.textContent = questions[qIndex].choices[i];
    console.log(questions[qIndex].choices[i]);
    questionBoxEl.appendChild(ansBtn);
  }
  // currQuest.choices.forEach(function (choice) {

  }
  // click the buttons and get a response
  
  // function quizEnd() {}

  // LOGIC SECTION

  // if (questions.question1[1]) {
  //   score++;
  //   alert("Correct! You get one point!");
  // } else {
  //   alert("Incorrect! You lose 10 seconds!");
  //   secondsLeft = -10;
  // }



  // if (questions.question2[0]) {
  //   score++;
  //   alert("Correct! You get one point!");
  // } else {
  //   alert("Incorrect! You lose 10 seconds!");
  //   secondsLeft = -10;
  // }

 

  // if (questions.question3[2]) {
  //   score++;
  //   alert("Correct! You get one point!");
  // } else {
  //   alert("Incorrect! You lose 10 seconds!");
  //   secondsLeft = -10;
  // }

  
  // if (questions.question4[0]) {
  //   score++;
  //   alert("Correct! You get one point!");
  // } else {
  //   alert("Incorrect! You lose 10 seconds!");
  //   secondsLeft = -10;
  // }

  

  // if (questions.question5 = false) {
  //   score++;
  //   alert("Correct! You get one point!");
  // } else {
  //   alert("Incorrect! You lose 10 seconds!");
  //   secondsLeft = -10;
  // }


// function () {

// }

$("#start-button").on("click", function () {
  setTime();
  quizStart();
});

function storeHighScores () {
  var playerName = document.querySelector("#playerName").nodeValue.trim();

  var finalScore = {
    score: score,
    name: playerName
  }
  var hiScores = JSON.parse(window.localStorage.getItem("High Scores")) || [];
  hiScores.push(finalScore);
  window.localStorage.setItem("High Scores", JSON.stringify(hiScores));
}

function endGame () {
  
}
