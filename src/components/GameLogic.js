

const shuffle = (data) => {
    let gameCards = [];
  
    while(gameCards.length < 12) {
      for(let i = 0; i < 6; i++) {
        let j = Math.floor(Math.random() * 9);
        if(gameCards.indexOf(data[j]) === -1) {
          gameCards.push(data[j], data[j]);
          break;
        }
      }
    }
  
    for(let i = gameCards.length - 1; i >= 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = gameCards[i];
      gameCards[i] = gameCards[j];
      gameCards[j] = temp;
    }
    return gameCards;
  }
  
export { shuffle };
