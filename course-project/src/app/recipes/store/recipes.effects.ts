import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest } from "@angular/common/http";

import { switchMap, map, withLatestFrom } from "rxjs/operators";

import { Store } from "@ngrx/store";
import { Effect, Actions } from "@ngrx/effects";

import { FETCH_RECIPES, FetchRecipes, SET_RECIPES, STORE_RECIPES, StoreRecipes } from "./recipes.actions";
import { featureRecipeState, RecipeState } from "./recipes.reducers";

import { Recipe } from "../recipe.model";

@Injectable()
export class RecipeEffects {
  constructor(
    private actions$: Actions,
    private httpClient: HttpClient,
    private store: Store<featureRecipeState>
  ) { }

  @Effect()
  recipeFetch = this.actions$.ofType(FETCH_RECIPES).pipe(
    switchMap(
      (action: FetchRecipes) => {
        return this.httpClient.get<Recipe[]>('https://recipe-book-dda25.firebaseio.com/recipes.json');
      }
    ),
    map(
      (recipes: Recipe[]) => {
        return {
          type: SET_RECIPES,
          payload: recipes
        }
      }
    )
  );

  @Effect({dispatch: false})
  recipeStore = this.actions$.ofType(STORE_RECIPES).pipe(
    withLatestFrom(this.store.select('recipes')),
    switchMap(
      ([action, state]) => {
        const request = new HttpRequest('PUT', 'https://recipe-book-dda25.firebaseio.com/recipes.json', state.recipes, {
          reportProgress: true
        });
        return this.httpClient.request(request);
      }
    )
  );

}