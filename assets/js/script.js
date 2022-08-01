// Dom variables
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const result = document.getElementById("result");
let userScore = 0;
let computerScore = 0;
let tieScore = 0;
let winningScore = 10;

// Computer chooses a weapon randomly
function generateComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 5);
    return choices[randomChoice];
}

// Start the game function
function battle(userChoice) {
    let computerChoice = generateComputerChoice();
    displayResult(userChoice, computerChoice);
    // Display user and Computer Choices
    document.querySelector('#userWeapon').innerHTML = userChoice;
    document.querySelector('#computerWeapon').innerHTML = computerChoice;
}

// Store and update the score 
const updateScore = () => {
    const tieScoreDisplay = document.getElementById("tieScore");
    tieScoreDisplay.innerHTML = tieScore;
    const userScoreDisplay = document.getElementById("userScore");
    userScoreDisplay.innerHTML = userScore;
    const computerScoreDisplay = document.getElementById("computerScore");
    computerScoreDisplay.innerHTML = computerScore;
  }
  
  // Show the result
  function displayResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      result.innerHTML = "same choice - It's a tie!";
      tieScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
      result.innerHTML = "scissors cuts paper - You Win!";
      userScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
      result.innerHTML = "scissors cuts paper - You Lose!";
      computerScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
      result.innerHTML = "paper covers rock - You Win!";
      userScore++;
      updateScore();
      checkWinner();
    } else if (userChoice == 'rock' && computerChoice === 'paper') {
      result.innerHTML = "paper covers rock - You Lose!";
      computerScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'rock' && computerChoice === 'lizard') {
      result.innerHTML = "rock crushes lizard - You Win!";
      userScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'lizard' && computerChoice === 'rock') {
      result.innerHTML = "rock crushes lizard - You Lose!";
      computerScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'lizard' && computerChoice === 'spock') {
      result.innerHTML = "lizard poisons Spock - You Win!";
      userScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'spock' && computerChoice === 'lizard') {
      result.innerHTML = "lizard poisons Spock - You Lose!";
      computerScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'spock' && computerChoice === 'scissors') {
      result.innerHTML = "spock smashes scissors - You Win!";
      userScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'scissors' && computerChoice === 'spock') {
      result.innerHTML = "spock smashes scissors - You Lose!";
      computerScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'scissors' && computerChoice === 'lizard') {
      result.innerHTML = "scissors decapitate lizard - You Win!";
      userScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'lizard' && computerChoice === 'scissors') {
      result.innerHTML = "scissors decapitate lizard - You Lose!";
      computerScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'lizard' && computerChoice === 'paper') {
      result.innerHTML = "lizard eats paper - You Win!";
      userScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'paper' && computerChoice === 'lizard') {
      result.innerHTML = "lizard eats paper - You Lose!";
      computerScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'paper' && computerChoice === 'spock') {
      result.innerHTML = "paper disproves Spock - You Win!";
      userScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'spock' && computerChoice === 'paper') {
      result.innerHTML = "paper disproves Spock - You Lose!";
      computerScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'spock' && computerChoice === 'rock') {
      result.innerHTML = "Spock vaporizes rock - You Win!";
      userScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'rock' && computerChoice === 'spock') {
      result.innerHTML = "Spock vaporizes rock - You Lose!";
      computerScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
      result.innerHTML = "rock crushes scissors - You Win!";
      userScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
      result.innerHTML = "rock crushes scissors - You Lose!";
      computerScore++;
      updateScore();
      checkWinner();
    } 
  }

    //Function to determine the Winner when scoring 10 points
    function checkWinner() {
      if (userScore == winningScore) {
        result.innerHTML = '<span style=color:#b22222>Congratulations! YOU Won the Game! Click on a "weapon" to start a new Game!</span>';
        endGame();
      } else if (computerScore == winningScore) {
        result.innerHTML = '<span style=color:#b22222>YOU LOSE the Game! Click on a "weapon" to start a new Game!</span>';
        endGame();
       }
} 
  
function endGame() {
  // reset all score to 0
  userScore = 0;
  computerScore = 0;
  tieScore = 0;
}


// EventListeners for all buttons
rock.addEventListener("click", function () {
    battle('rock');
  });
  
  paper.addEventListener("click", function () {
    battle('paper');
  });
  
  scissors.addEventListener("click", function () {
    battle('scissors');
  });
  
  lizard.addEventListener("click", function () {
    battle('lizard');
  });
  
  spock.addEventListener("click", function () {
    battle('spock');
  });