import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
// import { Subscription } from 'rxjs';

import { Store } from '@ngrx/store';

// import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';

import { AppState } from './store/shopping-list.reducers';
import { StartEdit } from './store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ingredients: Ingredient[]}>;
  // ingredients: Ingredient[];
  // subscription: Subscription;

  constructor(
    // private shoppingListService: ShoppingListService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
    // this.ingredients = this.shoppingListService.getIngredients();
    // this.subscription = this.shoppingListService.ingredientChanged.subscribe(
    //   (ingredients: Ingredient[]) => this.ingredients = ingredients
    // );
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

  onEditItem(index: number) {
    this.store.dispatch(new StartEdit(index));
  }

}
