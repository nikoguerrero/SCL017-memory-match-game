import GameDisplay from './GameDisplay.js';


const Categories = () => {

    const createButton = (image, dataURL) => {
        let cardHolder = document.createElement('div');
        cardHolder.className = 'cardHolder';
        cardHolder.addEventListener('click', function () {
            categoryBox.style.display = 'none';
        
            const showGameDisplay = (data) => {
                document.getElementById('root').appendChild(GameDisplay(data.items));
            };

            fetch(dataURL)
                .then(response => response.json())
                .then(data => showGameDisplay(data));
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
    

    const setHowl = createButton('images/howlsmovingcastle.png', '../data/howl/howl.json');
    const setTotoro = createButton('images/myneighbortotoro.png', '../data/totoro/totoro.json');
    const setSpirited = createButton('images/spiritedaway.png', '../data/spirited/spirited.json');
    const setMononoke = createButton('images/princessmononoke.png', '../data/mononoke/mononoke.json');

    article.appendChild(setHowl);
    article.appendChild(setTotoro);
    article.appendChild(setSpirited);
    article.appendChild(setMononoke);

    return categoryBox;
};

export default Categories;

  