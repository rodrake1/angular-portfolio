import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from 'src/app/auth/store/auth.reducers';
import { AppState } from 'src/app/store/app.reducers';
import { Logout } from 'src/app/auth/store/auth.actions';
import { FetchRecipes, StoreRecipes } from 'src/app/recipes/store/recipes.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
  authState: Observable<AuthState>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onSaveData() {
    this.store.dispatch(new StoreRecipes());
  }

  onFetchData() {
    this.store.dispatch(new FetchRecipes());
  }
  
  onLogout() {
    this.store.dispatch(new Logout());
  }
  
}
