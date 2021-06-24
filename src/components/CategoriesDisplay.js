import GameDisplay from './GameDisplay.js';


const Categories = () => {

    const createSet = (image, dataURL, text) => {
        let cardHolder = document.createElement('div');
        cardHolder.className = 'cardHolder';
        cardHolder.addEventListener('click', () => {
            let header = document.getElementById('header');
            header.classList.add('is-up');
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
        textCard.innerHTML = text;
        overlay.appendChild(textCard);

        return cardHolder;
    }

    const content = document.createElement('div');
    const categoryBox = document.createElement('section');
    categoryBox.className = 'categoryBox';
    content.appendChild(categoryBox);

    const grid = document.createElement('div');
    grid.className = 'catGrid';
    categoryBox.appendChild(grid);
    
    const question = document.createElement('div');
    question.className = 'question';
    question.innerHTML = 'Elige una categoría'
    grid.appendChild(question);

    const article = document.createElement('article');
    article.className = 'categories';
    grid.appendChild(article);
    

    const setHowl = createSet('images/howlsmovingcastle.png', '../data/howl/howl.json', 'El castillo ambulante');
    const setTotoro = createSet('images/myneighbortotoro.png', '../data/totoro/totoro.json', 'Mi vecino Totoro');
    const setMononoke = createSet('images/princessmononoke.png', '../data/mononoke/mononoke.json', 'La princesa Mononoke');
    const setSpirited = createSet('images/spiritedaway.png', '../data/spirited/spirited.json', 'El viaje de Chihiro');

    article.appendChild(setHowl);
    article.appendChild(setTotoro);
    article.appendChild(setMononoke);
    article.appendChild(setSpirited);

    return categoryBox;
};

export default Categories;

  