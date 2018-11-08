// import { Subject } from "rxjs";

// import { Recipe } from "./recipe.model";
// import { Ingredient } from "../shared/ingredient.model";

// export class RecipeService {
//   recipesChanged = new Subject<Recipe[]>();
//   recipes: Recipe[] = [
//     new Recipe(
//       'Tasty Schnitzel', 
//       'A super-tasty Schnitzel - just awesome!', 
//       'https://www.maxpixel.net/static/photo/1x/Schnitzel-Eat-Schnitzel-With-Fries-Schnipo-Lunch-1837703.jpg',
//       [
//         new Ingredient('Chicken', 1),
//         new Ingredient('French fries', 20)
//       ]),
//     new Recipe(
//       'Big Fat Burger', 
//       'What else you need to say?', 
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Homemade_cheeseburger.jpg/800px-Homemade_cheeseburger.jpg',
//       [
//         new Ingredient('Buns', 2),
//         new Ingredient('Burger', 1)
//       ])
//   ];

//   // setRecipes(recipes: Recipe[]) {
//   //   this.recipes = recipes;
//   //   this.recipesChanged.next(this.recipes.slice());
//   // }

//   getRecipes() {
//     return this.recipes.slice();
//   }

//   getRecipe(recipeId: number) {
//     return this.recipes[recipeId - 1];
//   }

//   // addRecipe(recipe: Recipe) {
//   //   this.recipes.push(<Recipe>recipe);
//   //   this.recipesChanged.next(this.recipes.slice());
//   // }

//   // updateRecipe(recipeId: number, newRecipe: Recipe) {
//   //   this.recipes[recipeId - 1] = newRecipe;
//   //   this.recipesChanged.next(this.recipes.slice());
//   // }

//   // deleteRecipe(recipeId: number) {
//   //   this.recipes.splice(recipeId - 1, 1);
//   //   this.recipesChanged.next(this.recipes.slice());
//   // }

// }