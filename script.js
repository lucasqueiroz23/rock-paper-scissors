const choices = ['rock','paper','scissors'];
const points = {
  'player': 0,
  'computer': 0,
};

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
    points['computer']++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
  if(computerSelection === 'rock'){
    return `Tie! ${computerSelection} is equal to ${playerSelection}`;
  }
  points['player']++;
  return `You win! ${playerSelection} beats ${computerSelection}`;
}

function playerChoosesPaper(playerSelection, computerSelection){
  if(computerSelection === 'paper'){
    return `Tie! ${computerSelection} is equal to ${playerSelection}`;
  }
  if(computerSelection === 'rock'){
    points['player']++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  }
  points['computer']++;
  return `You lose! ${computerSelection} beats ${playerSelection}`;
}

function playerChoosesScissors(playerSelection, computerSelection){
  if(computerSelection === 'paper'){
    points['player']++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  }
  if(computerSelection === 'rock'){
    points['computer']++;
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

function getWinner(){
  if(points['computer'] === points['player'])
    return `It's a tie!`;
  if(points['computer'] > points['player'])
    return 'Computer wins!';
  return 'Player wins!';
}

function playGame(){
  let numberOfRounds = 5;
  while(numberOfRounds--){
    const result = playRound();
    console.log(result);
  }
  const winner = getWinner();
  console.log(winner);
}
