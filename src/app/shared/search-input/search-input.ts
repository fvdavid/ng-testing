import { test } from '@playwright/test';
import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  imports: [FormsModule],
  templateUrl: './search-input.html',
  styleUrl: './search-input.scss',
  host: {
    'data-testid': 'filter-input-component'
  }
})
export class SearchInput {

  filterText = signal(true);

  filterValue!: string;

  resetFilter() { }

  emitSearchTerm() { }
}
