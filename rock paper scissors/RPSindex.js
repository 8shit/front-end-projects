const Result = document.getElementById("Result");
const Score = document.getElementById("score");
const ComputerScore = document.getElementById("ComputerScore");
const Choice = document.getElementById("choice");
const ComputerChoice = document.getElementById("ComputerChoice");

let C;
let CC;

function randomize() {
  let rps = Math.floor(Math.random() * 3) + 1;
  console.log(rps);

  switch (rps) {
    case 1:
      ComputerChoice.textContent = "Rock";
      CC = "rock";
      break;
    case 2:
      ComputerChoice.textContent = "Paper";
      CC = "paper";
      break;
    case 3:
      ComputerChoice.textContent = "Scissors";
      CC = "scissors";
      break;
  }
  evaluate();
}

function rockButton() {
  C = "rock";
  Choice.textContent = "Rock";
  randomize();
}
function paperButton() {
  C = "paper";
  Choice.textContent = "Paper";
  randomize();
}
function scissorsButton() {
  C = "scissors";
  Choice.textContent = "Scissors";
  randomize();
}

let x = 0;
let y = 0;

function evaluate() {
  switch (C + "-" + CC) {
    case "rock-rock":
    case "paper-paper":
    case "scissors-scissors":
      console.log("hi");
      Result.textContent = "IT'S A TIE";
      break;
    case "rock-paper":
    case "paper-rock":
    case "scissors-paper":
      Result.textContent = "YOU WIN!";
      x += 1;
      Score.textContent = x;
      break;
    case "rock-scissors":
    case "paper-scissors":
    case "scissors-rock":
      Result.textContent = "YOU LOSE!";
      y += 1;
      ComputerScore.textContent = y;
      break;
    default:
      console.log("Invalid input");
      break;
  }
}
