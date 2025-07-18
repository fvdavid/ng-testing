import { test } from '@playwright/test';
import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  imports: [FormsModule],
  template: ` <input
      type="text"
      placeholder="Filter..."
      class="filter-input"
      data-testid="filter-input"
      [(ngModel)]="filterValue"
      (ngModelChange)="emitSearchTerm()"
    />

    @if (filterText()) {
    <button
      class="filter-reset"
      data-testid="filter-input-reset"
      (click)="resetFilter()"
    >
      ✕
    </button>
    }`,
  styleUrl: './search-input.scss',
  host: {
    'data-testid': 'filter-input-component',
  },
})
export class SearchInput {
  filterText = signal(true);

  filterValue!: string;

  resetFilter() {}

  emitSearchTerm() {}
}
