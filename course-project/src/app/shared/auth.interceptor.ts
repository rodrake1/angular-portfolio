import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "../store/app.reducers";
import { switchMap, take } from "rxjs/operators";
import { AuthState } from "../auth/store/auth.reducers";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select('auth').pipe(
      take(1),
      switchMap(
        (authState: AuthState) => {
          const copiedRequest = request.clone({
            params: request.params.set('auth', authState.token)
          });
          return next.handle(copiedRequest);
        }
      )
    );
  }

}