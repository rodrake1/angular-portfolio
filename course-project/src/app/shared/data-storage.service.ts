import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpRequest } from "@angular/common/http";
// import { HttpHeaders } from "@angular/common/http";

import { map } from 'rxjs/operators';

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }

  storeRecipes() {
    // const token = this.authService.getToken();
    // // const headers = new HttpHeaders().set('Authorization', 'Bearer sakdlksldklsakd');
    // return this.httpClient.put('https://recipe-book-dda25.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
    //   // headers: headers,
    //   params: new HttpParams().set('auth', token),
    //   observe: 'body'    // default option
    // });
    const request = new HttpRequest('PUT', 'https://recipe-book-dda25.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
      // params: new HttpParams().set('auth', token),
      reportProgress: true
    });
    return this.httpClient.request(request);
  }

  fecthRecipes() {
    // const token = this.authService.getToken();
    // return this.httpClient.get<Recipe[]>('https://recipe-book-dda25.firebaseio.com/recipes.json?auth=' + token)
    return this.httpClient.get<Recipe[]>('https://recipe-book-dda25.firebaseio.com/recipes.json', {
      observe: 'body',       //default option
      responseType: 'json'  // default option
    }).pipe(map(
      (recipes) => {
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    )).
      subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}