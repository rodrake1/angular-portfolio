import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { AppState } from '../store/app.reducers';
import { AuthState } from './store/auth.reducers';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store<AppState>
  ) { }

  canActivate() {
    return this.store.select('auth').pipe(
      take(1),
      map(
        (authState: AuthState) => {
          return authState.authenticated;
        }
      )
    );
  }

}