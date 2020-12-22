import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from './../recipes.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {

  recipe: Recipe;
  id: string = "R1";

  constructor(
    private recService: RecipesService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private alertCtrl: AlertController

  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      if (!params.has('recipeId')) {
        this.router.navigate(['/recipe']);

        return;
      }
      const recipeId = params.get('recipeId');
      this.recipe = this.recService.getRecipe(recipeId);
    })
  }

  deleteRec() {
    this.alertCtrl.create({
      header: 'Are You Sure?',
      message: 'Do you really need delete the recipe ? ',
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Delete', handler: () => {
            this.recService.deleteRecipe(this.recipe.id);
            this.router.navigate(['/recipe']);
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present()
    })
  }

}
