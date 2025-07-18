import { test as base } from '@playwright/test';
import { HomePage } from '../page/home/home.page';

export const test = base.extend<{ startPage: HomePage }>({
  startPage: async ({ page }, use) => {
    // Setup of the fixture
    const homePage = new HomePage(page);
    await homePage.goto();

    // use the fixture value in the test
    await use(homePage);
  },
});

export { expect } from '@playwright/test';
