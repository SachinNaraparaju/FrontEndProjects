let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }

  return computerMove;
}

let isAutoPlaying = false;
let intervalID;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalID = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 2000);
    isAutoPlaying = true;
  }
  else {
    clearInterval(intervalID);
    isAutoPlaying = false;
  }
}

document.body.addEventListener('keydown', (event) => {
  const eventKey = event.key;
  if (eventKey === 'r') {
    playGame("rock");
  } else if (eventKey === 'p') {
    playGame("paper");
  } else if (eventKey === 's') {
    playGame("scissors");
  }
});

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";
  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You Lose.";
    } else if (computerMove === "paper") {
      result = "You Win.";
    } else {
      result = "Tie.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You Win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else {
      result = "You Lose.";
    }
  } else {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You Lose.";
    } else {
      result = "You Win.";
    }
  }

  if (result === "You Win.") {
    score.wins += 1;
  } else if (result === "You Lose.") {
    score.losses += 1;
  } else {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(".js-moves").innerHTML = `You
<img class="move-icon" src="https://supersimple.dev/projects/rock-paper-scissors/images/${playerMove}-emoji.png" alt="">
<img class="move-icon" src="https://supersimple.dev/projects/rock-paper-scissors/images/${computerMove}-emoji.png" alt="">
Computer`;
}
