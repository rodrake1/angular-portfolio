import { Injectable } from '@angular/core';
import {
  // Router,
  // Route,
  // CanLoad,
  // ActivatedRouteSnapshot,
  // RouterStateSnapshot,
  CanActivate,
} from '@angular/router';

// import { AuthService } from './auth.service';

import { Store } from '@ngrx/store';

import { map, take } from 'rxjs/operators';

import { AppState } from '../store/app.reducers';
import { AuthState } from './store/auth.reducers';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    // private authService: AuthService, private router: Router,
    private store: Store<AppState>
  ) { }

  canActivate(
    // route: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot
  ) {
    return this.store.select('auth').pipe(
      take(1),
      map(
        (authState: AuthState) => {
          return authState.authenticated;
        }
      ));
    // if (this.authService.isAuthenticated()) {
    //   return true;
    // } else {
    //   this.router.navigate(['/']);
    // }
  }

  // canLoad(route: Route) {
  //   if (this.authService.isAuthenticated()) {
  //     return true;
  //   } else {
  //     this.router.navigate(['/']);
  //   }
  // }
}