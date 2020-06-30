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

// Question Object

var questions = {
  "What kind of brackets enclose an array?": [
  "Curly",
  "Square",
  "Angled",
  "Squiggly" ],

  "What does CSS stand for?": [
  "Cascading Style Sheets",
  "Computer Science Styles",
  "Crashing Style Sheets",
  "Creative Styling Sections"],

  "Which of the following cannot be an object?": [
  "Array",
  "Boolean",
  "Prototypes",
  "Method"],

  "A web browser generally seeks what kind of named page first?": [
  "Index",
  "About Me",
  "Home",
  "Return"],

  "NULL and UNDEFINED have the same meaning.": false,
}