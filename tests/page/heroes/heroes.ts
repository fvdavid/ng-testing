import { Page } from "@playwright/test";
import { FilterInputElement } from "../../shared/filter-input.element";

export class HeroesPage {
  readonly filterInput: FilterInputElement;

  constructor(private readonly page: Page) {
    this.filterInput = new FilterInputElement(page);
  }

  async goto() {
    await this.page.goto('http://localhost:4200/heroes');
  }

}
