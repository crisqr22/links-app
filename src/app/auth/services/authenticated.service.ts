import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as ENV } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IAuthSession } from '../interfaces/i-auth-response';
import { IAuth } from '../interfaces/i-auth';
import { handleServicesErrors } from '../../shared/functions/handle-errors';
import { UserStorage } from './user.storage';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticatedService {
  constructor(private http: HttpClient, private userStorage: UserStorage, private router: Router) {}

  public login(loginData: IAuth): Observable<IAuthSession> {
    return this.http.post<IAuthSession>(`${ENV.apiLinks}/login`, loginData).pipe(
      tap((response: IAuthSession) => {
        this.userStorage.saveSession({
          id: Math.floor(Math.random() * (100 - 1) + 1),
          ...response,
        });
      }),
      catchError((e) => {
        return handleServicesErrors(e, AuthenticatedService.name);
      })
    );
  }

  public logOut(): Observable<any> {
    // TODO implement service logout to backend
    const mockRequest = new Observable((observer) => {
      observer.next({ status: 200, message: 'log out' });
      observer.complete();
    });

    return mockRequest.pipe(
      tap((response: any) => {
        this.userStorage.removeSession();
        this.router.navigate(['/auth']);
      }),
      catchError((e) => {
        return handleServicesErrors(e, AuthenticatedService.name);
      })
    );
  }

  public register(registerData: IAuth): Observable<IAuthSession> {
    return this.http.post<IAuthSession>(`${ENV.apiLinks}/register`, registerData).pipe(
      catchError((e) => {
        return handleServicesErrors(e, AuthenticatedService.name);
      })
    );
  }
}
