import Intro from './IntroDisplay.js';

const App = () => {
  
  const content = document.createElement('div');
  content.className = 'container';
  const header = document.createElement('header');
  header.className = 'header';
  header.id = 'header';
  content.appendChild(header);

  return Intro();
};

export default App;
