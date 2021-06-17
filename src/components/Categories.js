import howl from '../data/howl/howl.js';
import totoro from '../data/totoro/totoro.js';
import spirited from '../data/spirited/spirited.js';
import mononoke from '../data/mononoke/mononoke.js';
import GameDisplay from './GameDisplay.js';
import timer from './Timer.js';
console.log(timer);


const Categories = () => {

    const createButton = (text, data) => {
        let btn = document.createElement('button');
        btn.innerText = text;
        btn.src = 'images/backcard.png';
        btn.addEventListener('click', function () {
            categoryBox.style.display = 'none';
            document.getElementById('root').appendChild(GameDisplay(data));
            });
        return btn;
    }

    const content = document.createElement('div');
    const categoryBox = document.createElement('section');
    categoryBox.className = 'categoryBox';
    content.appendChild(categoryBox); 

    const article = document.createElement('article');
    article.className = 'categories';
    categoryBox.appendChild(article);
    

    const buttonHowl = createButton('El castillo ambulante',  howl.items);
    const buttonTotoro = createButton('Mi vecino Totoro', totoro.items);
    const buttonSpirited = createButton('El viaje de Chihiro', spirited.items);
    const buttonMononoke = createButton('La princesa Mononoke', mononoke.items);

    article.appendChild(buttonHowl);
    article.appendChild(buttonTotoro);
    article.appendChild(buttonSpirited);
    article.appendChild(buttonMononoke);

    let boton = document.createElement('button');
    let botonImg = document.createElement('img');
    botonImg.src = 'images/backcard.png';
    boton.appendChild(botonImg);
    boton.addEventListener('click', function () {
        categoryBox.style.display = 'none';
        document.getElementById('root').appendChild(GameDisplay(data));
        });
    categoryBox.appendChild(boton);

    //timer();
    return categoryBox;
};

export default Categories;

  