import { DndPage } from './app.po';

describe('dnd App', () => {
  let page: DndPage;

  beforeEach(() => {
    page = new DndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
