
import { shuffle } from './GameLogic.js';
import { displayResultsWon, displayResultsLost } from './ScoreDisplay.js';
import timer from './Timer.js';
console.log(timer);

const GameDisplay = (data) => {
  
  const content = document.createElement('div');
  
  const gameBox = document.createElement('section');
  gameBox.className = 'gameBox';
  content.appendChild(gameBox); //gameBox es hijo de content

  const grid = document.createElement('div');
  grid.className = 'grid';
  gameBox.appendChild(grid); //grid es hijo de gameBox

  const extras = document.createElement('div');
  extras.className = 'extras';
  grid.appendChild(extras);

  const failedAttempts = document.createElement('div');
  failedAttempts.className = 'failedAttempts';
  failedAttempts.innerHTML = 'GIROS <span style="color:#FFCD1C;">' + '0' + ' / ' + '10 ' + '</span>';
  extras.appendChild(failedAttempts);

  const timerDisplay = document.createElement('div');
  timerDisplay.className = 'timerDisplay';
  timerDisplay.id = 'timerDisplay';
  timerDisplay.innerHTML = 'TIEMPO <span style="color:#FFCD1C;">' + '00:00' + '</span>';
  extras.appendChild(timerDisplay);


  const boardCards = document.createElement('div');
  boardCards.className = 'boardCards';
  grid.appendChild(boardCards); //boardCards es hijo de grid

  // const level = document.createElement('footer');
  // level.className = 'level';
  // level.innerText = 'NIVEL 1';
  // gameBox.appendChild(level);


  const shuffleCards = shuffle(data);
  const chosenCards = []; //se guardan las cartas cliqueadas
  const cardsMatched = []; //se guardan las cartas que hicieronn match
 

  // función girar tarjeta
  function flipCard(target){

    //Limita el array a dos elementos. Evita hacer match con la misma carta. Y evita volver a acceder a las cartas que ya hicieron
    if(chosenCards.length < 2 && !chosenCards.includes(target) && !cardsMatched.includes(target)) {
      chosenCards.push(target);
      target.classList.toggle('is-flipped');
      if(chosenCards.length === 2) {
        setTimeout(matchCard, 600);
      } 
    }
    console.log(chosenCards);
  }

  let matchAttempts = 0;
  let score = 100;

  //función compara match (con alerta que indica match por ahora)
  function matchCard(){
    if(chosenCards[0].id === chosenCards[1].id) {
      for(let i = 0; i < chosenCards.length; i++) {
        cardsMatched.push(chosenCards[i]);
        chosenCards[i].classList.add('is-matched');
      }
      displayResultsWon(cardsMatched, shuffleCards, score);
    } else {
      matchAttempts++;
      failedAttempts.innerHTML = 'GIROS <span style="color:#FFCD1C;">' + matchAttempts + ' / ' + '10 ' + '</span>';
      score-=10;
      displayResultsLost(matchAttempts, chosenCards);
    }
    console.log(score);
    chosenCards.length = 0;
  }



  //display de cartas en pantalla (iteración)
  for(let i = shuffleCards.length - 1; i >= 0; i--) {
    let card = document.createElement('div');
    card.className = 'card';
    card.id = shuffleCards[i].id;
    card.addEventListener('click', function(event) {
      event.target.parentElement.classList.toggle('is-selected');
      flipCard(event.target.parentElement);
    });

    let backCard = document.createElement('img');
    backCard.className = 'backCard';
    backCard.src = 'images/backcard.png';
    card.appendChild(backCard);

    let frontCard = document.createElement('img');
    frontCard.className = 'frontCard';
    frontCard.src = shuffleCards[i].image;
    card.appendChild(frontCard);

    boardCards.appendChild(card);
  }


  return gameBox;
};

export default GameDisplay;
