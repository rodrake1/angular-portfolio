import { Recipe } from "../recipe.model";
import { Ingredient } from "src/app/shared/ingredient.model";

import { RecipeActions, ADD_RECIPE, SET_RECIPES, UPDATE_RECIPE, DELETE_RECIPE } from "./recipes.actions";
import { AppState } from "src/app/store/app.reducers";

export interface featureRecipeState extends AppState {
  recipes: RecipeState
}

export interface RecipeState {
  recipes: Recipe[]
}

const initialState: RecipeState = {
  recipes: [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://www.maxpixel.net/static/photo/1x/Schnitzel-Eat-Schnitzel-With-Fries-Schnipo-Lunch-1837703.jpg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('French fries', 20)
      ]),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Homemade_cheeseburger.jpg/800px-Homemade_cheeseburger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Burger', 1)
      ])
  ]
}

export function recipeReducer(state = initialState, action: RecipeActions) {
  switch (action.type) {
    case SET_RECIPES:
      return {
        ...state,
        recipes: action.payload
      }
    case ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      }
    case UPDATE_RECIPE:
      const updatedRecipes = [...state.recipes];
      updatedRecipes[action.payload.index] = action.payload.recipe;
      return {
        ...state,
        recipes: updatedRecipes
      }
    case DELETE_RECIPE:
      const deletedRecipes = [...state.recipes];
      deletedRecipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: deletedRecipes
      }
    default:
      return state;
  }
}