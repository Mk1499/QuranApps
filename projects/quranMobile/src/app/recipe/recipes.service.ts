import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'R1',
      title: "Koshary",
      imageUrl: "https://egyptianstreets.com/wp-content/uploads/2017/08/Koshary-2.jpg",
      ingredients: ['Pasta', 'Rice']
    },
    {
      id: 'R2',
      title: "Crepe",
      imageUrl: "https://abjadih.com/wp-content/uploads/2018/09/2-147.jpg",
      ingredients: ['Frieze', 'Chiecken']
    }
  ];

  recipesChanged = new Subject<Recipe[]>();

  constructor() { }


  getRecipes() {
    return this.recipes;
  }

  getRecipe(recipeId: string) {
    return this.recipes.find(rec => {
      return rec.id === recipeId
    })
  }

  deleteRecipe(recipeId:string){
    this.recipes = this.recipes.filter(rec => rec.id !== recipeId)
    this.recipesChanged.next(this.recipes);
  }

}
