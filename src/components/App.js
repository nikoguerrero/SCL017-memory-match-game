//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
import pokemon from '../data/pokemon/pokemon.js';
 console.log(pokemon.items);
//
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
  const content = document.createElement('div');
  const header = document.createElement('header');
  content.appendChild(header);

  const title = document.createElement('h1');
  title.innerText = 'Memory match';
  header.appendChild(title);

  const section = document.createElement('section');
  content.appendChild(section);

  let grid = document.createElement('div');
  grid.className = 'grid';
  section.appendChild(grid);
  

  let gameCards = [];
  
  for(let i = 0; i < data.length; i++) {
    gameCards.push(i);
    gameCards.push(i);
  }
  console.log(gameCards);

  for(let i = gameCards.length - 1; i >= 0; i--) {
      let j = Math.floor(Math.random() * (i+1));
      let temp = gameCards[i];
      gameCards[i] = gameCards[j];
      gameCards[j] = temp;
      let card = document.createElement('img');
      card.setAttribute('src', data[gameCards[i]].image);
      card.setAttribute('data-id', gameCards[i]);
      // card.addEventListener('click', flipCard)
      grid.appendChild(card)
  }


  return content;
};

export default App;
