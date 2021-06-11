

import howl from '../data/howl/howl.js';

const data = howl.items;

function shuffle(data) {

  let gameCards = [];

  while(gameCards.length < 12) {
    for(let i = 0; i < 6; i++) {
      let j = Math.floor(Math.random() * 9);
      if(gameCards.indexOf(data[j]) === -1) {
        gameCards.push(data[j], data[j]);
        break;
      }
    }
  }

  for(let i = gameCards.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = gameCards[i];
    gameCards[i] = gameCards[j];
    gameCards[j] = temp;
  }
  return gameCards;
}

const GameDisplay = () => {
  
  const content = document.createElement('div');
  
  const gameBox = document.createElement('section');
  gameBox.className = 'gameBox';
  content.appendChild(gameBox); //gameBox es hijo de content

  const grid = document.createElement('div');
  grid.className = 'grid';
  gameBox.appendChild(grid); //grid es hijo de gameBox

  const boardCards = document.createElement('div');
  boardCards.className = 'boardCards';
  grid.appendChild(boardCards); //boardCards es hijo de grid

  const level = document.createElement('footer');
  level.className = 'level';
  level.innerText = 'NIVEL 1';
  gameBox.appendChild(level);

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

  //función compara match (con alerta que indica match por ahora)
  function matchCard(){
    if(chosenCards[0].id === chosenCards[1].id) {
      // alert('hiciste match');
      for(let i = 0; i < chosenCards.length; i++) {
        cardsMatched.push(chosenCards[i]);
        chosenCards[i].classList.add('is-matched');
      }
      console.log(cardsMatched);
    } else {
      for(let i = 0; i < chosenCards.length; i++) {
        chosenCards[i].classList.toggle('is-flipped');
      }
    }
    chosenCards.length = 0;
  }
 

  //display de cartas en pantalla (iteración)
  for(let i = shuffleCards.length - 1; i >= 0; i--) {
    let card = document.createElement('div');
    card.className = 'card';
    card.id = shuffleCards[i].id;
    card.addEventListener('click', function(event) {
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
