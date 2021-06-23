import { createElements } from '../ScoreDisplay.js';

describe('ScoreDisplay', () => {
    it('should render without crashing', () => {
      const scoreDisplay = createElements();
      expect(scoreDisplay instanceof HTMLElement).toBe(true);
    });
  });