var score = 0;
var startBtn = document.getElementById("#start-button");
var timeEl = document.querySelector("#timer");


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
  

  var questions = {
    "Question 1 - Which brackets are used to enclose an array?": ["Curly", "Square", "Angled", "Squiggly"],

    "Question 2 - What does CSS stand for?": [
      "Cascading Style Sheets",
      "Computer Science Styles",
      "Crashing Style Sections",
      "Computer Style Selections",
    ],

    "Question 3 - Which of the following is not an object?": ["Array", "Boolean", "Prototypes", "Method"],

    "Question 4 - Which type of page will a web browser generally seek first?": ["Index", "About Me", "Home", "Return"],

    "Question 5: True or false - NULL and UNDEFINED mean the same thing.": false,
  };

  

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
