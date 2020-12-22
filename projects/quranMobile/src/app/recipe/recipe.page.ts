import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit, OnDestroy {

  recipes: Recipe[] = []
  recipesSub: Subscription;

  constructor(private recSercive: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recSercive.getRecipes();
    this.recipesSub = this.recSercive.recipesChanged.subscribe(r => [
      this.recipes = r
    ])


  }

  ngOnDestroy() {
    this.recipesSub.unsubscribe();
  }

}
