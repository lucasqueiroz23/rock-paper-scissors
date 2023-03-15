const choices = ['rock','paper','scissors'];
const points = {
  'player': 0,
  'computer': 0,
};

function getPlayerChoice(button){
  const playerChoice = button.textContent.toLowerCase();
  return playerChoice;
}

class Round {
  constructor(playerChoice){
    this.playerChoice = playerChoice;
    this.computerChoice = this.getComputerChoice();
  }

  getComputerChoice(){
    const randomNumber = parseInt(Math.random() * 100);
    return choices[randomNumber%3];
  }

  getResult(){
    if(this.playerChoice === 'rock'){
      this.playerChoosesRock();
    }
    if(this.playerChoice === 'paper'){
      this.playerChoosesPaper();
    }
    if(this.playerChoice === 'scissors'){
      this.playerChoosesScissors();
    }
  }
  
  playerChoosesRock(){

    if(this.computerChoice === 'paper'){
      this.playerLoses();
      return;
    }
    if(this.computerChoice === 'rock'){
      this.tieRound();
      return;
    }

    this.playerWins();
  }

  playerChoosesPaper(){
    if(this.computerChoice === 'paper'){
      this.tieRound();
      return;
    }
    if(this.computerChoice === 'rock'){
      this.playerWins();
      return;
    }
    this.playerLoses();
  }

  playerChoosesScissors(){
    if(this.computerChoice === 'paper'){
      this.playerWins();
      return;
    }
    if(this.computerChoice === 'rock'){
      this.playerLoses();
      return;
    }
    this.tieRound();
  }

  playerWins(){
    points['player']++;
    document.querySelector('.player-score').textContent = points.player.toString();
    document.querySelector('.round-result').textContent = `You win! ${this.playerChoice} beats ${this.computerChoice}`;
  }

  playerLoses(){
    points['computer']++;
    document.querySelector('.computer-score').textContent = points.computer.toString();
    document.querySelector('.round-result').textContent = `You lose! ${this.computerChoice} beats ${this.playerChoice}`;
  }

  tieRound(){
    document.querySelector('.round-result').textContent = `Tie! ${this.computerChoice} is equal to ${this.playerChoice}`;
  }
}

function playRound(e){
  if(document.querySelector('.winner').textContent !== ''){
    document.querySelector('.winner').textContent = '';
  }
  const playerChoice = getPlayerChoice(e.target);
  const round = new Round(playerChoice);
  round.getResult();
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