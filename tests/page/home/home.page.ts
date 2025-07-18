import type { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly welcomeMessage: Locator;

  constructor(private readonly page: Page) {
    this.welcomeMessage = this.page.getByTestId('start-page-welcome-message');
  }

  async goto() {
    this.page.goto('http://localhost:4200/home');
  }
}
