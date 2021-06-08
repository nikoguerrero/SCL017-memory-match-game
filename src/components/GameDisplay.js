
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

const gamedisplay = () => {
  
  //esqueleto html general
  const content = document.createElement('div');
  
  const gameBox = document.createElement('section');
  gameBox.className = 'section';
  content.appendChild(gameBox); //gameBox es hijo de content

  let grid = document.createElement('div');
  grid.className = 'grid';
  gameBox.appendChild(grid); //grid es hijo de gameBox

  let boardCards = document.createElement('div');
  boardCards.className = 'boardCards';
  grid.appendChild(boardCards); //boardCards es hijo de grid

  const shuffleCards = shuffle(data);

  const chosenCards = [];

  function flipCard(event){
    chosenCards.push(event.target.id);
    console.log(chosenCards);
  }
  

  for(let i = shuffleCards.length - 1; i >= 0; i--) {
    let backCard = document.createElement('img');
    backCard.src = shuffleCards[i].image;
    backCard.className = 'backCard';
    backCard.id = shuffleCards[i].id;
    boardCards.appendChild(backCard);
    backCard.addEventListener('click', flipCard);
  }


  return content;
};

export default gamedisplay;