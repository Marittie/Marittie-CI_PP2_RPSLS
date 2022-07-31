// Dom variables
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const result = document.getElementById("result");

// Computer chooses a weapon randomly
function generateComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 5);
    return choices[randomChoice];
}

// Start the game function
function battle(userChoice) {
    let computerChoice = generateComputerChoice();
    displayResult(userChoice, computerChoice);
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