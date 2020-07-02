var score = 0;
var startBtn = document.getElementById("#start-button");
var timeEl = document.querySelector("#timer");
var quizIntroEl = document.getElementById("quiz-intro");
var questionBoxEl = document.getElementById("question-box");
var questions = [
  {
    title: "Q1",
    choices: ["1", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "Q2",
    choices: ["2", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
]
var qIndex = 0;

function setTime() {
  
  var secondsLeft = 90;
  // console.log("Ok cool");

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
function startGame() {
var currQuest = questions[qIndex]
  
  quizIntroEl.classList.add('hide');
  // populate the box with Question 1 and choices (which need to be buttons)
  var qTitle = document.createElement("h1");
  qTitle.innerHTML = questions[qIndex].title
  questionBoxEl.appendChild(qTitle)
  currQuest.choices.forEach(function (choice) {
    
    var ansBtn = document.createElement("button");
    ansBtn.textContent = questions[qIndex];
    ansBtn.appendChild(qTitle);

  })
  // click the buttons and get a response
  
  

  
  

  if (questions.question1[1]) {
    score++;
    alert("Correct! You get one point!");
  } else {
    alert("Incorrect! You lose 10 seconds!");
    secondsLeft = -10;
  }



  if (questions.question2[0]) {
    score++;
    alert("Correct! You get one point!");
  } else {
    alert("Incorrect! You lose 10 seconds!");
    secondsLeft = -10;
  }

 

  if (questions.question3[2]) {
    score++;
    alert("Correct! You get one point!");
  } else {
    alert("Incorrect! You lose 10 seconds!");
    secondsLeft = -10;
  }

  
  if (questions.question4[0]) {
    score++;
    alert("Correct! You get one point!");
  } else {
    alert("Incorrect! You lose 10 seconds!");
    secondsLeft = -10;
  }

  

  if (questions.question5 = false) {
    score++;
    alert("Correct! You get one point!");
  } else {
    alert("Incorrect! You lose 10 seconds!");
    secondsLeft = -10;
  }
}

// function () {

// }

$("#start-button").on("click", function () {
  setTime();
  startGame();
});

function storeHighScores () {
  
}

function endGame () {
  
}
