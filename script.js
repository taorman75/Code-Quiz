var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 90;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left in game.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage("Time is up!");
    }

  }, 1000);
}

function () {
 
}

function () {

}

setTime();
// Scores

var score = 0;

// Question Object

var questions = {
  "question1": [
  "Curly",
  "Square",
  "Angled",
  "Squiggly" ],

  "question2": [
  "Cascading Style Sheets",
  "Computer Science Styles",
  "Crashing Style Sheets",
  "Creative Styling Sections"],

  "question3": [
  "Array",
  "Boolean",
  "Prototypes",
  "Method"],

  "question4": [
  "Index",
  "About Me",
  "Home",
  "Return"],

  "question5": false,
}

if (question1[1]) {
  score++;
  alert("Correct! You get one point!");
} else {
  alert("Incorrect! You lose 10 seconds!");
  secondsLeft=-10; }

if (question2[0]) {
  score++;
  alert("Correct! You get one point!");
} else {
  alert("Incorrect! You lose 10 seconds!");
  secondsLeft=-10; }

if (question3[2]) {
  score++;
  alert("Correct! You get one point!");
} else {
  alert("Incorrect! You lose 10 seconds!");
  secondsLeft=-10; }

if (question4[0]) {
  score++;
  alert("Correct! You get one point!");
} else {
  alert("Incorrect! You lose 10 seconds!");
  secondsLeft=-10; }

if (question5 = false) {
  score++;
  alert("Correct! You get one point!");
} else {
  alert("Incorrect! You lose 10 seconds!");
  secondsLeft=-10; }