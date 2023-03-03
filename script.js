const choices = ['rock','paper','scissors'];
const points = {
  'player': 0,
  'computer': 0,
};

function getComputerChoice(){
  const randomNumber = parseInt(Math.random() * 100);
  return choices[randomNumber%3];
}

function getPlayerChoice(button){
  const playerChoice = button.textContent.toLowerCase();
  return playerChoice;
}

function playerChoosesRock(playerSelection, computerSelection){
  if(computerSelection === 'paper'){
    points['computer']++;
    document.querySelector('.computer-score').textContent = points.computer.toString();
    document.querySelector('.round-result').textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    return;
  }
  if(computerSelection === 'rock'){
    document.querySelector('.round-result').textContent = `Tie! ${computerSelection} is equal to ${playerSelection}`;
    return;
  }
  points['player']++;
  document.querySelector('.player-score').textContent = points.player.toString();
  document.querySelector('.round-result').textContent = `You win! ${playerSelection} beats ${computerSelection}`;
}

function playerChoosesPaper(playerSelection, computerSelection){
  if(computerSelection === 'paper'){
    document.querySelector('.round-result').textContent = `Tie! ${computerSelection} is equal to ${playerSelection}`;
    return;
  }
  if(computerSelection === 'rock'){
    points['player']++;
    document.querySelector('.player-score').textContent = points.player.toString();
    document.querySelector('.round-result').textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    return;
  }
  points['computer']++;
  document.querySelector('.computer-score').textContent = points.computer.toString();
  document.querySelector('.round-result').textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
}

function playerChoosesScissors(playerSelection, computerSelection){
  if(computerSelection === 'paper'){
    points['player']++;
    document.querySelector('.player-score').textContent = points.player.toString();
    document.querySelector('.round-result').textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    return;
  }
  if(computerSelection === 'rock'){
    points['computer']++;
    document.querySelector('.computer-score').textContent = points.computer.toString();
    document.querySelector('.round-result').textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    return;
  }
  document.querySelector('.round-result').textContent = `Tie! ${computerSelection} is equal to ${playerSelection}`;
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
}

function playRound(e){
  if(document.querySelector('.winner').textContent !== ''){
    document.querySelector('.winner').textContent = '';
  }
  const playerSelection = getPlayerChoice(e.target);
  const computerSelection = getComputerChoice();
  getRoundResult(playerSelection, computerSelection);
  getWinner();
}

function getWinner(){
  if(points['computer'] === 5)
    document.querySelector('.winner').textContent = 'Computer wins!';
  else {
    if(points['player'] === 5)
      document.querySelector('.winner').textContent = 'Player wins!';
    else return;
  }

  points.computer = 0;
  points.player = 0;

  document.querySelectorAll('.player-score, .computer-score').forEach(element=>element.textContent = 0);
}


document.querySelectorAll('.choice').forEach(button=>{
  button.addEventListener('click', playRound);
})