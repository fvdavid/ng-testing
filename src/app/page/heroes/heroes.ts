import { Component } from '@angular/core';
import { SearchInput } from "../../shared/search-input/search-input";

@Component({
  selector: 'app-heroes',
  imports: [SearchInput],
  templateUrl: './heroes.html',
  styleUrl: './heroes.scss',
})
export class Heroes {
  listHeroes = [
    {
      name: 'Iron Man',
      superPower: 'Genius',
      isChecked: true
    },
    {
      name: 'Thor',
      superPower: 'God',
      isChecked: false
    },
    {
      name: 'Captain America',
      superPower: 'Shield',
      isChecked: true
    },
    {
      name: 'Hulk',
      superPower: 'Super Strength',
      isChecked: false
    },
    {
      name: 'Spiderman',
      superPower: 'Web',
      isChecked: true
    },
    {
      name: 'Wolvorine',
      superPower: 'Mutan',
      isChecked: false
    },
  ];
}
