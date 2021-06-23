import App from '../App.js';

describe('App', () => {
  it('should render without crashing', () => {
    const content = App();
    expect(content instanceof HTMLElement).toBe(true);
  });
});
