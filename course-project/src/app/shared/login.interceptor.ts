import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";

import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export class LoginInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(tap(
      event => {
        console.log('Login interceptor');
        console.log(event);
      }
    ));
  }
}