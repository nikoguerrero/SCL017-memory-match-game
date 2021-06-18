import howl from '../data/howl/howl.js';
import totoro from '../data/totoro/totoro.js';
import spirited from '../data/spirited/spirited.js';
import mononoke from '../data/mononoke/mononoke.js';
import GameDisplay from './GameDisplay.js';


const Categories = () => {

    const createButton = (image, data) => {
        let cardHolder = document.createElement('div');
        cardHolder.className = 'cardHolder';
        cardHolder.addEventListener('click', function () {
            categoryBox.style.display = 'none';
            document.getElementById('root').appendChild(GameDisplay(data));
            });
        article.appendChild(cardHolder);

        let cardSet = document.createElement('img');
        cardSet.className = 'cardSet';
        cardSet.src = image;
        cardHolder.appendChild(cardSet);

        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        cardHolder.appendChild(overlay);

        const textCard = document.createElement('div');
        textCard.className = 'textCard';
        textCard.innerHTML = 'EL CASTILLO AMBULANTE';
        overlay.appendChild(textCard);

        return cardHolder;
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

  