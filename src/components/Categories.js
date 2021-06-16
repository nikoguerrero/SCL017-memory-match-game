import howl from '../data/howl/howl.js';
import totoro from '../data/totoro/totoro.js';
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
    

    const buttonHowl = createButton('CARTAS 1', howl.items);
    const buttonTotoro = createButton('CARTAS 2', totoro.items);
    const buttonSpirited = createButton('CARTAS 3');
    const buttonKiki = createButton('CARTAS 4');

    article.appendChild(buttonHowl);
    article.appendChild(buttonTotoro);
    article.appendChild(buttonSpirited);
    article.appendChild(buttonKiki);


    return categoryBox;
};

export default Categories;

  