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
let gameCards = [];

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
  
  
  for(let i = 0; i < data.length; i++) {
    let card = document.createElement('img');
    card.setAttribute('src', data[i].image);
    card.setAttribute('data-id', i);
    // card.addEventListener('click', flipcard)
    grid.appendChild(card)
  }

  //girar tarjeta
  function flipCard() {
    let gameCards = gameCards 
  }




  return content;
};

export default App;
