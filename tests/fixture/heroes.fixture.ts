import { HeroesPage } from './../page/heroes/heroes';
import { test as base } from '@playwright/test';

export const test = base.extend<{ heroesPage: HeroesPage }>({
  heroesPage: async ({ page }, use) => {
    // Setup of the fixture
    const todosPage: HeroesPage = new HeroesPage(page);
    await todosPage.goto();

    // Use the fixture value in the test
    await use(todosPage);
  },
});

export { expect } from '@playwright/test';
