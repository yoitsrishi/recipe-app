import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.bing.com/th?id=OIP.mJNXX6gPS3bTxetqUJMJuwHaEK&w=146&h=120&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'
    ),
  ];
}
