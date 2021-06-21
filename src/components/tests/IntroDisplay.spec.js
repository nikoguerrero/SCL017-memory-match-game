import Intro from '../IntroDisplay.js';

describe('IntroDisplay', () => {
  it('should render without crashing', () => {
    const content = Intro();
    expect(content instanceof HTMLElement).toBe(true);
  });
});
