import { test, expect } from '../../fixture/heroes.fixture';

test.describe('Heroes Page', () => {
  test('input should have correct value', async ({ heroesPage }) => {
    heroesPage.searchInput.fillInput('Iron Man');

    await expect(heroesPage.searchInput.input).toHaveValue('Iron Man');

  });
});
