

//función que muestra resultados al ganar
function displayResultsWon(cardsWon, cardsShuffled, finalScore) {
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
    }
  }
  
  //función que muestra resultados al perder
  function displayResultsLost(attempts, cardsChosen){
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
    }
  
    for(let i = 0; i < cardsChosen.length; i++) {
      cardsChosen[i].classList.toggle('is-flipped');
    }
  }

  export { displayResultsWon, displayResultsLost };