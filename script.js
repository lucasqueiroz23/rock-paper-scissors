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
    this.changeImage('.computer', this.computerChoice);
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

    this.changeImage('.player','rock');

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
    this.changeImage('.player','paper');
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
    this.changeImage('.player','scissors');
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
    document.querySelector('.round-result').textContent = `You win! ${this.playerChoice} beats ${this.computerChoice}`.toUpperCase();
  }

  playerLoses(){
    points['computer']++;
    document.querySelector('.computer-score').textContent = points.computer.toString();
    document.querySelector('.round-result').textContent = `You lose! ${this.computerChoice} beats ${this.playerChoice}`.toUpperCase();
  }

  tieRound(){
    document.querySelector('.round-result').textContent = `Tie! ${this.computerChoice} is equal to ${this.playerChoice}`.toUpperCase();
  }

  changeImage(target, choice){
    const selector = target + ' .selection img';
    const img = document.querySelector(selector);
    img.setAttribute('src', `./images/${choice}.png`);
  }

}

function isNewGame(){
  if(points.player === points.computer && points.player === 0)
    return true;
  return false;
}

function playRound(e){
  if(isNewGame()){
    document.querySelectorAll('.player-score, .computer-score').forEach(element=>element.textContent = 0);
  }
  if(document.querySelector('.info').textContent !== 'FIRST TO FIVE WINS!'){
    document.querySelector('.info').textContent = 'FIRST TO FIVE WINS!';
  }
  const playerChoice = getPlayerChoice(e.target);
  const round = new Round(playerChoice);
  round.getResult();
  getWinner();
}

function getWinner(){
  if(points['computer'] === 5)
    document.querySelector('.info').textContent = 'Computer wins!';
  else {
    if(points['player'] === 5)
      document.querySelector('.info').textContent = 'Player wins!';
    else return;
  }

  points.computer = 0;
  points.player = 0;
}


document.querySelectorAll('.choice').forEach(button=>{
  button.addEventListener('click', playRound);
})