import Categories from './CategoriesDisplay.js';

const Intro = () => {
    
    const content = document.createElement('div');
    const header = document.createElement('header');
    header.className = 'header';
    header.id = 'header';
    content.appendChild(header);

    const introBox = document.createElement('section');
    introBox.className = 'introBox';
    content.appendChild(introBox); 

    const castle = document.createElement('img');
    castle.className = 'castleOne';
    castle.src = './images/castleplay.png';
    castle.addEventListener('click', () => {
        introBox.style.display = 'none';
        document.getElementById('root').appendChild(Categories());
    });
    introBox.appendChild(castle); 
    
    return content;
};

export default Intro;