import { test, expect } from '../../fixture/heroes.fixture';

test.describe('Heroes Page', () => {
  test('input should have correct value', async ({ heroesPage }) => {
    heroesPage.filterInput.fillInput('Test value');

    await expect(heroesPage.filterInput.input).toHaveValue('Test value');

  });
});
