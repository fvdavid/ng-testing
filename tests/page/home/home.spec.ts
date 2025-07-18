import { test, expect } from "../../fixture/home.fixture";

test.describe('Home Page', () => {
  test('has welcome message', async ({ startPage }) => {

    await expect(startPage.welcomeMessage).toContainText('Welcome to Angular E2E with Playwright');

  });
});
