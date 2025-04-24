let score = JSON.parse(localStorage.getItem('score')) || {
  Wins: 0,
  Losses: 0,
  Ties: 0,
}
updateScoreElement();

function playgame(playerMove) {
  pickComputerMove();
  const computerMove = pickComputerMove();
  console.log(computerMove);
  let result = ''
  if (playerMove === 'Rock') {
      if (computerMove === 'Rock') {
      result = 'Tie'
      } else if (computerMove === 'Paper') {
          result = 'Loss'
      } else if (computerMove === 'Scissors') {
          result = 'Win'
      }
  } else if (playerMove === 'Paper') {
      if (computerMove === 'Rock') {
          result = 'Win'
      } else if (computerMove === 'Paper') {
          result = 'Tie'
      } else if (computerMove === 'Scissors') {
          result = 'Loss'
      }
  } else if (playerMove === 'Scissors') {
      if (computerMove === 'Rock') {
          result = 'Loss'
      } else if (computerMove === 'Paper') {
          result = 'Win'
      } else if (computerMove === 'Scissors') {
          result = 'Tie'
      }
  }

  if (result === 'Win') {
      score.Wins += 1;
  } else if (result === 'Loss') {
      score.Losses += 1
  } else if (result === 'Tie') {
      score.Ties +=1
  }

  localStorage.setItem('score', JSON.stringify(score))
  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result
  document.querySelector('.js-moves').innerHTML = ` You <img class="Move" src="Rock Paper Scissors imgs/${playerMove}-emoji.png">
<img class="Move" src="Rock Paper Scissors imgs/${computerMove}-emoji.png">  Computer `
}
function updateScoreElement() {
document.querySelector('.js-score')
.innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}.`;
}
function pickComputerMove() {
let computerChoice = Math.random();
let computerMove ='';
if (computerChoice >= 0 && computerChoice < 1/3) {
  computerMove = 'Rock';
} 
else if (computerChoice >= 1/3 && computerChoice < 2/3) { 
  computerMove = 'Paper';
} else {
  computerMove = 'Scissors';
}

return computerMove
}