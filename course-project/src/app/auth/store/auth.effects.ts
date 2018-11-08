import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase';
import { Effect, Actions } from '@ngrx/effects';
import { from } from 'rxjs';
import { map, switchMap, mergeMap, tap } from 'rxjs/operators';
import { TRY_SIGNUP, TrySignup, SIGNUP, SET_TOKEN, TRY_SIGNIN, TrySignin, SIGNIN, LOGOUT } from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,  // The '$' is optional and signals that the 'action' property is an observable.
    private router: Router
  ) { }

  @Effect()
  authSignup = this.actions$.ofType(TRY_SIGNUP).pipe(
    map(
      (action: TrySignup) => {
        return action.payload;
      }
    ),
    switchMap(
      (payload: { username: string, password: string }) => {
        return from(auth().createUserWithEmailAndPassword(payload.username, payload.password));
      }
    ),
    switchMap(
      () => {
        return from(auth().currentUser.getIdToken());
      }
    ),
    mergeMap(
      (token: string) => {
        return [
          {
            type: SIGNUP
          },
          {
            type: SET_TOKEN,
            payload: token
          }
        ];
      }
    ),
    tap(
      () => {
        this.router.navigate(['/']);
      }
    )
  );

  @Effect()
  authSignin = this.actions$.ofType(TRY_SIGNIN).pipe(
    map(
      (action: TrySignin) => {
        return action.payload;
      }
    ),
    switchMap(
      (payload: { username: string, password: string }) => {
        return from(auth().signInWithEmailAndPassword(payload.username, payload.password));
      }
    ),
    switchMap(
      () => {
        return from(auth().currentUser.getIdToken());
      }
    ),
    mergeMap(
      (token: string) => {
        return [
          {
            type: SIGNIN
          },
          {
            type: SET_TOKEN,
            payload: token
          }
        ];
      }
    ),
    tap(
      () => {
        this.router.navigate(['/']);
      }
    )
  );

  @Effect({ dispatch: false })
  authLogout = this.actions$.ofType(LOGOUT).pipe(
    tap(
      () => this.router.navigate(['/'])
    )
  );

}