

//función que muestra resultados al ganar
function displayResultsWon() {
    if(cardsMatched.length === shuffleCards.length) {
      const scoreDisplay = document.createElement('div');
      scoreDisplay.className = 'scoreDisplay';
      gameBox.appendChild(scoreDisplay);
  
      const results = document.createElement('div');
      results.className = 'results';
      gameBox.appendChild(results);
      
  
      const wonImg = document.createElement('img');
      wonImg.className = 'wonImg';
      wonImg.src = 'images/totorowin.gif';
      results.innerText = '¡Ganaste!';
      results.appendChild(wonImg);
    }
  }
  
  //función que muestra resultados al perder
  function displayResultsLost(attempts, cardsChosen){
    if(attempts > 6){
      const scoreDisplay = document.createElement('div');
        scoreDisplay.className = 'scoreDisplay';
        document.getElementById('root').appendChild(scoreDisplay);
        // gameBox.appendChild(scoreDisplay);
  
        const results = document.createElement('div');
        results.className = 'results';
        scoreDisplay.appendChild(results);
  
        const lostImg = document.createElement('img');
        lostImg.className = 'lostImg';
        lostImg.src = 'images/suwatarilose.gif';
        results.innerText = 'Perdiste. Inténtalo otra vez';
        results.appendChild(lostImg);
    }
  
    for(let i = 0; i < cardsChosen.length; i++) {
      cardsChosen[i].classList.toggle('is-flipped');
    }
  }

  export { displayResultsWon, displayResultsLost };