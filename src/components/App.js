
import pokemon from '../data/pokemon/pokemon.js';
 console.log(pokemon.items);

import Intro from './Intro.js';


const App = () => {
  
  const content = document.createElement('div');
  content.className = 'container';
  const header = document.createElement('header');
  header.className = 'header';
  content.appendChild(header);

  const section = document.createElement('section');
  section.className = 'section';
  content.appendChild(section);
  
  return Intro();
  
};

export default App;
