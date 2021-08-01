import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AUTH_SESSIONS_KEYS } from '../constants/auth-sessions-names';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService, private toastService: ToastrService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.cookieService.get(AUTH_SESSIONS_KEYS.TOKEN);
    if (authToken) {
      req = req.clone({
        setHeaders: {
          Token: authToken,
        },
      });
    }

    return next.handle(req).pipe(
      tap(
        (event: any) => {
          if (event.type !== 0 && event.ok) {
            console.info(event.url, 'Http request success to this url');
          }
        },
        (err) => {
          // TODO map message errors
          console.error(err);
          this.toastService.error('Server Unexpected error');
        }
      )
    );
  }
}
