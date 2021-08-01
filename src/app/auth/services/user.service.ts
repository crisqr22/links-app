import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as ENV } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { handleServicesErrors } from '../../shared/functions/handle-errors';
import { IUser } from '../interfaces/i-user';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  public get(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${ENV.apiLinks}/user/${id}`).pipe(
      catchError((e) => {
        return handleServicesErrors(e, UserService.name);
      })
    );
  }
}
