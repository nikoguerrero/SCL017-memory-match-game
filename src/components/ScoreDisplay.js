import Categories from './CategoriesDisplay.js';
import { stopTimer } from './Timer.js';

const restartGame = () => {
    let btn = document.createElement('button');
    btn.className = 'btn';
    btn.innerText ='REINICIAR';
    btn.addEventListener('click', function () {
      const scoreDisplay = document.getElementById('scoreDisplay');
      const gameBox = document.getElementById('gameBox');
      document.getElementById('root').removeChild(scoreDisplay);
      document.getElementById('root').removeChild(gameBox);
      document.getElementById('root').appendChild(Categories());
    });
  return btn;
};    

const createElements = (classType, image, text) => {
  const scoreDisplay = document.createElement('div');
  scoreDisplay.id = 'scoreDisplay';
  scoreDisplay.className = 'scoreDisplay';
  document.getElementById('root').appendChild(scoreDisplay);

  const results = document.createElement('p');
  results.className = 'results';
  scoreDisplay.appendChild(results);
  
  const img = document.createElement('img');
  img.className = classType;
  img.src = image;
  results.innerHTML = text;
  results.appendChild(img);

  const restart = restartGame();
  results.appendChild(restart);

  return scoreDisplay;
};

//función que muestra resultados al ganar
const displayScoreWon = (cardsWon, cardsShuffled, finalScore) => {
    if(cardsWon.length === cardsShuffled.length) {
      stopTimer();
      const wonDisplay = createElements('wonImg', 'images/totorowin.gif', '<div class="scoreText"> ¡Ganaste! <br> Obtuviste: <span style=color:#FFCD1C;">' + finalScore + ' puntos</span></br></div>')
      document.getElementById('root').appendChild(wonDisplay);
    }
};
  
  //función que muestra resultados al perder
const displayScoreLost = (attempts, cardsChosen) => {
    if(attempts > 9){
      stopTimer();
      const lostDisplay = createElements('lostImg', 'images/suwatarilose.gif', '<div class="scoreText"> Perdiste. <br> Inténtalo otra vez </br></div>')
      document.getElementById('root').appendChild(lostDisplay);
    }
  
    for(let i = 0; i < cardsChosen.length; i++) {
      cardsChosen[i].classList.toggle('is-flipped');
    }
};

export { displayScoreWon, displayScoreLost };