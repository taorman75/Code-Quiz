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
    question1: ["Curly", "Square", "Angled", "Squiggly"],

    question2: [
      "Cascading Style Sheets",
      "Computer Science Styles",
      "Crashing Style Sections",
      "Computer Style Selections",
    ],

    question3: ["Array", "Boolean", "Prototypes", "Method"],

    question4: ["Index", "About Me", "Home", "Return"],

    question5: false,
  };

  $("#container").text("Question 1: Which brackets are used to enclose an array?");
  $("#container").append("<p>", "<button>Curly</button>"); // can I assign array values to these buttons?
  $("#container").append("<p>", "<button>Square</button>");
  $("#container").append("<p>", "<button>Angled</button>");
  $("#container").append("<p>","<button>Squiggly</button>");

  if (question1[1]) {
    score++;
    alert("Correct! You get one point!");
  } else {
    alert("Incorrect! You lose 10 seconds!");
    secondsLeft = -10;
  }

  $("#container").html("Question 2: What does CSS stand for?");
  $("#container").append("<p>", "<button>Cascading Style Sheets</button>");
  $("#container").append("<p>", "<button>Computer Science Styles</button>");
  $("#container").append("<p>", "<button>Crashing Style Sections</button>");
  $("#container").append("<p>", "<button>Computer Style Selections</button>");

  if (question2[0]) {
    score++;
    alert("Correct! You get one point!");
  } else {
    alert("Incorrect! You lose 10 seconds!");
    secondsLeft = -10;
  }

  $("#container").html("Question 3: Which of the following is not an object?");
  $("#container").append("<p>", "<button>Array</button>");
  $("#container").append("<p>", "<button>Boolean</button>");
  $("#container").append("<p>", "<button>Prototype</button>");
  $("#container").append("<p>", "<button>Method</button>");

  if (question3[2]) {
    score++;
    alert("Correct! You get one point!");
  } else {
    alert("Incorrect! You lose 10 seconds!");
    secondsLeft = -10;
  }

  $("#container").html("Question 4: Which type of page will a web browser generally seek first?");
  $("#container").append("<p>", "<button>Index</button>");
  $("#container").append("<p>", "<button>About Me</button>");
  $("#container").append("<p>", "<button>Home</button>");
  $("#container").append("<p>", "<button>Return</button>");
  
  if (question4[0]) {
    score++;
    alert("Correct! You get one point!");
  } else {
    alert("Incorrect! You lose 10 seconds!");
    secondsLeft = -10;
  }

  $("#container").html("Question 5: True or false - NULL and UNDEFINED mean the same thing.");
  $("#container").append("<p>", "<button>True</button>");
  $("#container").append("<p>", "<button>False</button>");
 

  if ((question5 = false)) {
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

// // Question Object
