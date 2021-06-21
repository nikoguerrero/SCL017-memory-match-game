import Categories from '../CategoriesDisplay.js';

describe('CategoriesDisplay', () => {
  it('should render without crashing', () => {
    const content = Categories();
    expect(content instanceof HTMLElement).toBe(true);
  });
});
