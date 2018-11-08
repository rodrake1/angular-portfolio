import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
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
  recipeState: Observable<RecipeState>
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<featureRecipeState>
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'] - 1;
        this.recipeState = this.store.select('recipes');
      }
    );
  }

  addToShoppingList() {
    this.store.select('recipes').pipe(take(1)).subscribe(
      (recipeState: RecipeState) => {
        this.store.dispatch(new AddIngredients(recipeState.recipes[this.id].ingredients));
      }
    );
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteRecipe() {
    this.store.dispatch(new DeleteRecipe(this.id));
    this.router.navigate(['/recipes']);
  }

}
