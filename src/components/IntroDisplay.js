import Categories from './CategoriesDisplay.js';

const Intro = () => {

    // funcion de click jugar
    const play = () => {
        
        header.classList.add('is-up');
        // se esconde caja de intro
        introBox.style.display = 'none';

        // archivo GameDisplay en acción
        document.getElementById('root').appendChild(Categories());
    };
    
    const content = document.createElement('div');
    const header = document.createElement('header');
    header.className = 'header';
    content.appendChild(header);

    const introBox = document.createElement('section');
    introBox.className = 'introBox';
    content.appendChild(introBox); //introBox es hijo de content

    const castle = document.createElement('img');
    castle.className = 'castleOne';
    castle.src = '/images/castleplay.png';
    castle.addEventListener('click', play);
    introBox.appendChild(castle);   //castillo es hijo de introbox
    
    return content;
};

export default Intro;