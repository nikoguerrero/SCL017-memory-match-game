import Categories from './Categories.js';
// import GameDisplay from './GameDisplay.js';


const restartGame = () => {
    let btn = document.createElement('button');
    btn.className = 'btn';
    btn.innerText ='Reiniciar juego';
    btn.addEventListener('click', function () {
      // document.getElementById('root').removeChild(GameDisplay());
      document.getElementById('root').appendChild(Categories());
      });
  return btn;
}    
    
//función que muestra resultados al ganar
function displayScoreWon(cardsWon, cardsShuffled, finalScore) {
    if(cardsWon.length === cardsShuffled.length) {
      const scoreDisplay = document.createElement('div');
      scoreDisplay.className = 'scoreDisplay';
      document.getElementById('root').appendChild(scoreDisplay);
  
      const results = document.createElement('p');
      results.className = 'results';
      scoreDisplay.appendChild(results);
      
      const wonImg = document.createElement('img');
      wonImg.className = 'wonImg';
      wonImg.src = 'images/totorowin.gif';
      results.innerHTML = '<div class="scoreText"> ¡Ganaste! <br> Obtuviste: <span style=color:#FFCD1C;">' + finalScore + ' puntos</span></br></div>';
      results.appendChild(wonImg);

      const restart = restartGame();
      results.appendChild(restart);
    }
  }
  
  //función que muestra resultados al perder
  function displayScoreLost(attempts, cardsChosen){
    if(attempts > 9){
      const scoreDisplay = document.createElement('div');
      scoreDisplay.className = 'scoreDisplay';
      document.getElementById('root').appendChild(scoreDisplay);
      // gameBox.appendChild(scoreDisplay);

      const results = document.createElement('p');
      results.className = 'results';
      scoreDisplay.appendChild(results);

      const lostImg = document.createElement('img');
      lostImg.className = 'lostImg';
      lostImg.src = 'images/suwatarilose.gif';
      results.innerHTML = '<div class="scoreText"> Perdiste. <br> Inténtalo otra vez </br></div>';
      results.appendChild(lostImg);

      const restart = restartGame();
      results.appendChild(restart);
    }
  
    for(let i = 0; i < cardsChosen.length; i++) {
      cardsChosen[i].classList.toggle('is-flipped');
    }
  }

  export { displayScoreWon, displayScoreLost };