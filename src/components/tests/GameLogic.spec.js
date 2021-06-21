import { shuffle } from '../GameLogic.js';

describe('GameLogic', () => {
    it('should shuffle an array', () => {
      const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const shuffledData = shuffle(data);
      let areEqual = true;
      for (let i = 0; i < data.length; i++) {
        if (data[i] != shuffledData[i]) {
          areEqual = false;
          break;
        }
      }
      expect(areEqual).toBe(false);
    });
});