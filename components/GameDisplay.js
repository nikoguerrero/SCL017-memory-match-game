
import { shuffle } from './GameLogic.js';
import { displayScoreWon, displayScoreLost } from './ScoreDisplay.js';
import { startTimer } from './Timer.js';

const GameDisplay = (data) => {
  
  const content = document.createElement('div');
  
  const gameBox = document.createElement('section');
  gameBox.className = 'gameBox';
  gameBox.id = 'gameBox';
  content.appendChild(gameBox); 

  const grid = document.createElement('div');
  grid.className = 'grid';
  gameBox.appendChild(grid); 

  const extras = document.createElement('div');
  extras.className = 'extras';
  grid.appendChild(extras);

  const failedAttempts = document.createElement('div');
  failedAttempts.className = 'failedAttempts';
  failedAttempts.innerHTML = 'GIROS <span style="color:#FFCD1C;">' + '0' + ' / ' + '10 ' + '</span>';
  extras.appendChild(failedAttempts);

  const timerDisplay = document.createElement('div');
  timerDisplay.className = 'timerDisplay';
  timerDisplay.innerHTML = 'TIEMPO <span style="color:#FFCD1C;">' + '00:50' + '</span>';
  extras.appendChild(timerDisplay);

  const boardCards = document.createElement('div');
  boardCards.className = 'boardCards';
  grid.appendChild(boardCards);


  const shuffleCards = shuffle(data);
  const chosenCards = []; //se guardan las cartas cliqueadas
  const cardsMatched = []; //se guardan las cartas que hicieronn match
  let matchAttempts = 0; //intentos de hacer match parte en 0
  let score = 100; //puntaje comienza en 100
 

  const tick = (counter) => { 
    let formattedCounter = counter.toString().padStart(2,0); //para formatear el contador a dos dígitos siempre
    timerDisplay.innerHTML = 'TIEMPO <span style="color:#FFCD1C;">' + '00:' + formattedCounter + '</span>';
  };

  //cuando el timer llega a 0
  const timeUp = () => {
    timerDisplay.innerHTML = 'TIEMPO <span style="color:#FFCD1C;">' + '00:00' + '</span>';
    displayScoreLost(10, chosenCards);
  };

  //comienza el timer
  startTimer(tick, timeUp);

  // función girar tarjeta
  const flipCard = (target) => {

    //Limita el array a dos elementos. Evita hacer match con la misma carta. Y evita volver a acceder a las cartas que ya hicieron
    if(chosenCards.length < 2 && !chosenCards.includes(target) && !cardsMatched.includes(target)) {
      chosenCards.push(target);
      target.classList.toggle('is-flipped');
      if(chosenCards.length === 2) {
        setTimeout(matchCard, 600);
      } 
    }
  };

  //función compara match 
  const matchCard = () => {
    if(chosenCards[0].id === chosenCards[1].id) {
      for(let i = 0; i < chosenCards.length; i++) {
        cardsMatched.push(chosenCards[i]);
        chosenCards[i].classList.add('is-matched');
      }
      displayScoreWon(cardsMatched, shuffleCards, score);
    } else {
      matchAttempts++;
      failedAttempts.innerHTML = 'GIROS <span style="color:#FFCD1C;">' + matchAttempts + ' / ' + '10 ' + '</span>';
      score-=10;
      displayScoreLost(matchAttempts, chosenCards);
    }
    chosenCards.length = 0;
  };

  //display de cartas en pantalla
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
