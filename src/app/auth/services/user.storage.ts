import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AUTH_SESSIONS_KEYS } from '../constants/auth-sessions-names';
import { BehaviorSubject, Observable } from 'rxjs';
import { IAuthSession } from '../interfaces/i-auth-response';

@Injectable()
export class UserStorage {
  public session = new BehaviorSubject<IAuthSession>({
    id: this.cookieService.get(AUTH_SESSIONS_KEYS.ID),
    token: this.cookieService.get(AUTH_SESSIONS_KEYS.TOKEN),
  });

  constructor(private cookieService: CookieService) {}

  public removeSession(): void {
    this.cookieService.delete(AUTH_SESSIONS_KEYS.TOKEN);
    this.cookieService.delete(AUTH_SESSIONS_KEYS.ID);
    this.session.next({ id: null, token: null });
  }

  public saveSession(session: IAuthSession): void {
    this.cookieService.set(AUTH_SESSIONS_KEYS.TOKEN, session.token);
    this.cookieService.set(AUTH_SESSIONS_KEYS.ID, session.id);
    this.session.next(session);
  }

  public getSession(): Observable<IAuthSession> {
    return this.session.asObservable();
  }
}
