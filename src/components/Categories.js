import howl from '../data/howl/howl.js';
import totoro from '../data/totoro/totoro.js';
import spirited from '../data/spirited/spirited.js';
import mononoke from '../data/mononoke/mononoke.js';
import GameDisplay from './GameDisplay.js';


const Categories = () => {

    const createButton = (text, data) => {
        let btn = document.createElement('button');
        btn.innerText = text;
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
    

    const buttonHowl = createButton('El castillo ambulante', howl.items);
    const buttonTotoro = createButton('Mi vecino Totoro', totoro.items);
    const buttonSpirited = createButton('El viaje de Chihiro', spirited.items);
    const buttonMononoke = createButton('La princesa Mononoke', mononoke.items);

    article.appendChild(buttonHowl);
    article.appendChild(buttonTotoro);
    article.appendChild(buttonSpirited);
    article.appendChild(buttonMononoke);


    return categoryBox;
};

export default Categories;

  