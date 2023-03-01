const choices = {
  0: 'Rock',
  1: 'Paper',
  2: 'Scissors',
};

function getComputerChoice(){
  const randomNumber = parseInt(Math.random() * 100);
  return choices[randomNumber%3];
}
