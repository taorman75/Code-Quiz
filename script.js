function setTime() {
  var timeEl = document.querySelector("#timer");
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

function startGame() {
  var score = 0;

  var questions = {
    "question1": [
      "Curly",
      "Square",
      "Angled",
      "Squiggly"],

    "question2": [
      "Cascading Style Sheets",
      "Computer Science Styles",
      "Crashing Style Sections",
      "Computer Style Selections"],

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
  };

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

}

// function () {

// }

$("#start-button").on("click", function () {
  setTime();
});






// // Question Object




