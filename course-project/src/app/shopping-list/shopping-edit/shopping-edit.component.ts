import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

// import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';

import { AddIngredient, UpdateIngredient, DeleteIngredient, StopEdit } from '../store/shopping-list.actions';
import { AppState } from '../store/shopping-list.reducers';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editItem: Ingredient;
  // editItemIndex: number;

  constructor(
    // private shoppingListService: ShoppingListService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    // this.subscription = this.shoppingListService.startedEditing.subscribe(
    //   (index: number) => {
    //     this.editMode = true;
    //     this.editItemIndex = index;
    //     this.editItem = this.shoppingListService.getIngredient(index);
    //     this.shoppingListForm.setValue({
    //       name: this.editItem.name,
    //       amount: this.editItem.amount
    //     });
    //   }
    // );
    this.subscription = this.store.select('shoppingList').subscribe(
      data => {
        if (data.editedIngredientIndex > -1) {
          this.editMode = true;
          this.editItem = data.editedIngredient;
          this.shoppingListForm.setValue({
            name: this.editItem.name,
            amount: this.editItem.amount
          });
        } else {
          this.editMode = false;
        }
      }
    );
  }

  ngOnDestroy() {
    this.store.dispatch(new StopEdit());
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      // this.shoppingListService.updateIngredient(this.editItemIndex, newIngredient);
      this.store.dispatch(new UpdateIngredient(newIngredient));
      this.editMode = false;
    } else {
      this.store.dispatch(new AddIngredient(newIngredient));
      // this.shoppingListService.addIngredient(newIngredient);
    }
    form.reset();
  }

  onClear() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  onDelete() {
    // this.shoppingListService.deleteIngredient(this.editItemIndex);
    this.store.dispatch(new DeleteIngredient());
    this.onClear();
  }

}
