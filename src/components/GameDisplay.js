
// import pokemon from '../data/pokemon/pokemon.js';

// const data = pokemon.items;

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
  function flipCard(event){
    if(chosenCards.length < 2 && !chosenCards.includes(event.target) && !cardsMatched.includes(event.target)) {
      chosenCards.push(event.target);
      let chosenOne = event.target;
      const findCard = (element) => {
        if(element.id === chosenOne.id) {
          return true;
        } else {
          return false;
        }
      };

      let found = shuffleCards.find(findCard);
      chosenOne.src = found.image;
      chosenOne.className = 'frontCard';

      if(chosenCards.length === 2) {
        setTimeout(matchCard, 500);
      } 
    }
    console.log(chosenCards);
  }

  //función compara match (con alerta que indica match por ahora)
  function matchCard(){
    if(chosenCards[0].id === chosenCards[1].id) {
      alert('hiciste match');
      for(let i = 0; i < chosenCards.length; i++) {
        cardsMatched.push(chosenCards[i]);
      }
      console.log(cardsMatched);
    } else {
      for(let i = 0; i < chosenCards.length; i++) {
        chosenCards[i].src = 'images/backcard.png';
        chosenCards[i].className = 'backCard';
      }
    }
    chosenCards.length = 0;
  }
 
  //display de cartas en pantalla (iteración)
  for(let i = shuffleCards.length - 1; i >= 0; i--) {
    let card = document.createElement('div');
    card.className = 'card';
    boardCards.appendChild(card);

    let backCard = document.createElement('img');
    backCard.src = 'images/backcard.png';
    backCard.className = 'backCard';
    backCard.id = shuffleCards[i].id;
    card.appendChild(backCard);
    backCard.addEventListener('click', flipCard);
  }


  return gameBox;
};

export default GameDisplay;
