var counter = 0;

var potentialWords = ["plane", 'truck', 'goose', 'eater',
  'gamer', 'video'
];

var answer = potentialWords[Math.floor(Math.random() * potentialWords.length)];

var userWord = [];

$(".correct-word").text("Correct Word: " + answer)

$(document).keydown(function(event) {
  if (event.key === "Backspace") {
    backspaceHit()
  } else {
    if (counter < 5) {
      userGuess()
    }
  }

  if (event.key === "Enter" && counter === 5) {
    verify()
  }
})

$(".give-up").click(function() {
  giveUpHit()
})

$(".retry").click(function() {
  retry()
})


function verify() {
  for (i = 0; i < userWord.length; i++) {
    if (answer.includes(userWord[i])) {
      if (userWord[i] === answer[i]) {
        // animate letter's box w/ green
        $(".box" + i).addClass("correct-position")
      } else {
        // animate letter's box w/ dark yellow
        $(".box" + i).addClass("in-word")
      }
    }
  }
}

function backspaceHit() {
  $(".letter" + counter).empty()
  counter--;
  userWord.pop()
}

function userGuess() {
  counter++;
  $(".letter" + counter).text(event.key)
  userWord.push(event.key)
}

function giveUpHit() {
  for (i = 1; i < 6; i ++) {
    $(".letter" + i).text(answer[i-1])
    $(".box").removeClass("correct-position in-word")
  }
  userClass = []
  counter = 0
}

function retry() {
  for (i = 1; i < 6; i ++) {
    $(".letter" + i).empty()
    $(".box").removeClass("correct-position in-word")
  }
  userClass = []
  counter = 0
}
