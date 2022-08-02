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
    document.querySelector('#userWeapon').innerHTML = `<span style="color: #FF4500;">${userChoice}</span>`;
    document.querySelector('#computerWeapon').innerHTML = `<span style="color: 	#1E90FF;">${computerChoice}</span>`;
}

// Store and update the score 
const updateScore = () => {
    const tieScoreDisplay = document.getElementById("tieScore");
    tieScoreDisplay.innerHTML = `<span style="color: #333366;">${tieScore}</span>`;
    const userScoreDisplay = document.getElementById("userScore");
    userScoreDisplay.innerHTML = `<span style="color: #FF4500;">${userScore}</span>`;
    const computerScoreDisplay = document.getElementById("computerScore");
    computerScoreDisplay.innerHTML = `<span style="color: #1E90FF;">${computerScore}</span>`;
  };
  
  // Show the result
  function displayResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      result.innerHTML = "<span style=color:#333366>same choice - It's a tie!</span>";
      tieScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
      result.innerHTML = "<span style=color:#FF4500>scissors cut paper - You Win!</span>";
      userScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
      result.innerHTML = "<span style=color:#1E90FF>scissors cut paper - You Lose!</span>";
      computerScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
      result.innerHTML = "<span style=color:#FF4500>paper covers rock - You Win!</span>";
      userScore++;
      updateScore();
      checkWinner();
    } else if (userChoice == 'rock' && computerChoice === 'paper') {
      result.innerHTML = "<span style=color:#1E90FF>paper covers rock - You Lose!</span>";
      computerScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'rock' && computerChoice === 'lizard') {
      result.innerHTML = "<span style=color:#FF4500>rock crushes lizard - You Win!</span>";
      userScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'lizard' && computerChoice === 'rock') {
      result.innerHTML = "<span style=color:#1E90FF>rock crushes lizard - You Lose!</span>";
      computerScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'lizard' && computerChoice === 'spock') {
      result.innerHTML = "<span style=color:#FF4500>lizard poisons Spock - You Win!</span>";
      userScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'spock' && computerChoice === 'lizard') {
      result.innerHTML = "<span style=color:#1E90FF>lizard poisons Spock - You Lose!</span>";
      computerScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'spock' && computerChoice === 'scissors') {
      result.innerHTML = "<span style=color:#FF4500>spock smashes scissors - You Win!</span>";
      userScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'scissors' && computerChoice === 'spock') {
      result.innerHTML = "<span style=color:#1E90FF>spock smashes scissors - You Lose!</span>";
      computerScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'scissors' && computerChoice === 'lizard') {
      result.innerHTML = "<span style=color:#FF4500>scissors decapitate lizard - You Win!</span>";
      userScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'lizard' && computerChoice === 'scissors') {
      result.innerHTML = "<span style=color:#1E90FF>scissors decapitate lizard - You Lose!</span>";
      computerScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'lizard' && computerChoice === 'paper') {
      result.innerHTML = "<span style=color:#FF4500>lizard eats paper - You Win!</span>";
      userScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'paper' && computerChoice === 'lizard') {
      result.innerHTML = "<span style=color:#1E90FF>lizard eats paper - You Lose!</span>";
      computerScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'paper' && computerChoice === 'spock') {
      result.innerHTML = "<span style=color:#FF4500>paper disproves Spock - You Win!</span>";
      userScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'spock' && computerChoice === 'paper') {
      result.innerHTML = "<span style=color:#1E90FF>paper disproves Spock - You Lose!</span>";
      computerScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'spock' && computerChoice === 'rock') {
      result.innerHTML = "<span style=color:#FF4500>Spock vaporizes rock - You Win!</span>";
      userScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'rock' && computerChoice === 'spock') {
      result.innerHTML = "<span style=color:#1E90FF>Spock vaporizes rock - You Lose!</span>";
      computerScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
      result.innerHTML = "<span style=color:#FF4500>rock crushes scissors - You Win!</span>";
      userScore++;
      updateScore();
      checkWinner();
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
      result.innerHTML = "<span style=color:#1E90FF>rock crushes scissors - You Lose!</span>";
      computerScore++;
      updateScore();
      checkWinner();
    } 
  }

    //Function to determine the Winner when scoring 10 points
    function checkWinner() {
      if (userScore == winningScore) {
        result.innerHTML = '<span style=color:#b22222>Congratulations! YOU WON the Game! Click on a "weapon" to start a new Game!</span>';
        endGame();
      } else if (computerScore == winningScore) {
        result.innerHTML = '<span style=color:#000000>YOU LOSE the Game! Click on a "weapon" to start a new Game!</span>';
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