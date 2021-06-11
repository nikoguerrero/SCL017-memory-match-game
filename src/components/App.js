
import Intro from './Intro.js';


const App = () => {
  
  const content = document.createElement('div');
  content.className = 'container';
  const header = document.createElement('header');
  header.className = 'header';
  content.appendChild(header);


  return Intro();
  
};

export default App;
