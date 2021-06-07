//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
import pokemon from '../data/pokemon/pokemon.js';
 console.log(pokemon.items);

// import game from './game.js';
//   console.log(game);

// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//
const data = pokemon.items;


const App = () => {
  
  //manipulacion dinamica de DOM

  //esqueleto html general
  const content = document.createElement('div');
  const header = document.createElement('header');
  header.className = 'header';
  content.appendChild(header);


  const section = document.createElement('section');
  content.appendChild(section);

  //esqueleto html pantalla cartas
  let grid = document.createElement('div');
  grid.className = 'grid';
  section.appendChild(grid);

  let gameCards = [];
  
  //iteración de 12 cartas (pares) para este nivel.
  while(gameCards.length < 12) {
    for(let i = 0; i < 6; i++) {
      let j = Math.floor(Math.random() * 9);
      if(gameCards.indexOf(data[j]) === -1) {
        gameCards.push(data[j], data[j]);
        break;
      }
    }
  }
  console.log(gameCards);

  for(let i = gameCards.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = gameCards[i];
    gameCards[i] = gameCards[j];
    gameCards[j] = temp;

    
    let card = document.createElement('img');
    card.setAttribute('src', gameCards[i].image);
    card.setAttribute('data-id', gameCards[i]);
    // card.addEventListener('click', flipCard)
    grid.appendChild(card)
  }

  return content;
};

export default App;
