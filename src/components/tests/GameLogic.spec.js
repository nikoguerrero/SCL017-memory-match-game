import { shuffle } from '../GameLogic.js';

describe('GameLogic', () => {
    it('should shuffle an array', () => {
      const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const shuffledData = shuffle(data);
      expect(shuffledData).not.toStrictEqual(data);
    });
});