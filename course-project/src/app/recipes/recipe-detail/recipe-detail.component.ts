import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Store } from '@ngrx/store';

// import { ShoppingListService } from '../../shopping-list/shopping-list.service';
// import { Recipe } from '../recipe.model';
// import { RecipeService } from '../recipe.service';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { AddIngredients } from '../../shopping-list/store/shopping-list.actions';
import { RecipeState, featureRecipeState } from '../store/recipes.reducers';
import { DeleteRecipe } from '../store/recipes.actions';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {
  // recipe: Recipe;
  recipeState: Observable<RecipeState>
  id: number;

  constructor(
    // private shoppingListService: ShoppingListService,
    // private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<featureRecipeState>
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'] - 1;
        this.recipeState = this.store.select('recipes');
        // this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  addToShoppingList() {
    this.store.select('recipes').pipe(take(1)).subscribe(
      (recipeState: RecipeState) => {
        this.store.dispatch(new AddIngredients(recipeState.recipes[this.id].ingredients));
      }
    );
    // this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteRecipe() {
    // this.recipeService.deleteRecipe(this.id);
    this.store.dispatch(new DeleteRecipe(this.id));
    this.router.navigate(['/recipes']);
  }

}
