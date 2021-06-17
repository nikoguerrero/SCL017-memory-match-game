import howl from '../data/howl/howl.js';
import totoro from '../data/totoro/totoro.js';
import spirited from '../data/spirited/spirited.js';
import mononoke from '../data/mononoke/mononoke.js';
import GameDisplay from './GameDisplay.js';


const Categories = () => {

    const createButton = (image, data) => {
        let cardSet = document.createElement('img');
        cardSet.className = 'cardSet';
        cardSet.src = image;
        cardSet.addEventListener('click', function () {
            categoryBox.style.display = 'none';
            document.getElementById('root').appendChild(GameDisplay(data));
            });
        return cardSet;
    }

    const content = document.createElement('div');
    const categoryBox = document.createElement('section');
    categoryBox.className = 'categoryBox';
    content.appendChild(categoryBox); 

    const article = document.createElement('article');
    article.className = 'categories';
    categoryBox.appendChild(article);
    

    const setHowl = createButton('images/howlsmovingcastle.png', howl.items);
    const setTotoro = createButton('images/myneighbortotoro.png', totoro.items);
    const setSpirited = createButton('images/spiritedaway.png', spirited.items);
    const setMononoke = createButton('images/princessmononoke.png', mononoke.items);

    article.appendChild(setHowl);
    article.appendChild(setTotoro);
    article.appendChild(setSpirited);
    article.appendChild(setMononoke);

    return categoryBox;
};

export default Categories;

  