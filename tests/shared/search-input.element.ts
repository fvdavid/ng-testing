import type { Locator, Page } from '@playwright/test';

export class SearchInputElement {
  private readonly container: Locator;
  readonly input: Locator;
  readonly resetButton: Locator;

  constructor(parent: Locator | Page) {
    this.container = parent.getByTestId('filter-input-component');
    this.input = this.container.getByTestId('filter-input');
    this.resetButton = this.container.getByTestId('filter-input-reset');
  }

  async fillInput(text: string): Promise<void> {
    await this.input.fill(text);
  }

  async clearInput(): Promise<void> {
    await this.resetButton.click();
  }
}
