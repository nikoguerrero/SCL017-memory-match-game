import { shuffle } from '../GameLogic.js';

describe('GameLogic', () => {
    it('should shuffle an array', () => {
      const cardData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      const shuffledData = shuffle(cardData);
      
      let areEqual = true;
      for (let i = 0; i < cardData.length; i++) {
        if (cardData[i] != shuffledData[i]) {
          areEqual = false;
          break;
        }
      }
      expect(areEqual).toBe(false);
    });
});