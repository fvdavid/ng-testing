import { Page } from "@playwright/test";
import { SearchInputElement } from "../../shared/search-input.element";

export class HeroesPage {
  readonly searchInput: SearchInputElement;

  constructor(private readonly page: Page) {
    this.searchInput = new SearchInputElement(page);
  }

  async goto() {
    await this.page.goto('http://localhost:4200/heroes');
  }

}
