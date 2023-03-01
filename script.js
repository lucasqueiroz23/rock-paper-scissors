const choices = ['rock','paper','scissors'];


function getComputerChoice(){
  const randomNumber = parseInt(Math.random() * 100);
  return choices[randomNumber%3];
}

function inputIsInvalid(input){
  return choices.filter(choice=>choice===input).length === 0;
}

function getPlayerChoice(){
  const playerChoice = prompt('Choose rock, paper or scissors.').toLowerCase();
  if(inputIsInvalid(playerChoice)){
    alert('You entered an invalid choice!');
    return '';
  }

  return playerChoice;
}

function playerChoosesRock(playerSelection, computerSelection){
  if(computerSelection === 'paper'){
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
  if(computerSelection === 'rock'){
    return `Tie! ${computerSelection} is equal to ${playerSelection}`;
  }
  return `You win! ${playerSelection} beats ${computerSelection}`;
}

function playerChoosesPaper(playerSelection, computerSelection){
  if(computerSelection === 'paper'){
    return `Tie! ${computerSelection} is equal to ${playerSelection}`;
  }
  if(computerSelection === 'rock'){
    return `You win! ${playerSelection} beats ${computerSelection}`;
  }
  return `You lose! ${computerSelection} beats ${playerSelection}`;
}

function playerChoosesScissors(playerSelection, computerSelection){
  if(computerSelection === 'paper'){
    return `You win! ${playerSelection} beats ${computerSelection}`;
  }
  if(computerSelection === 'rock'){
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
  return `Tie! ${computerSelection} is equal to ${playerSelection}`;
}

function getRoundResult(playerSelection, computerSelection){
  if(playerSelection === 'rock'){
    return playerChoosesRock(playerSelection, computerSelection);
  }
  if(playerSelection === 'paper'){
    return playerChoosesPaper(playerSelection, computerSelection);
  }
  if(playerSelection === 'scissors'){
    return playerChoosesScissors(playerSelection, computerSelection);
  }
  else return 'Something went wrong!';
}

function playRound(){
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  return getRoundResult(playerSelection, computerSelection);
}

console.log(playRound());