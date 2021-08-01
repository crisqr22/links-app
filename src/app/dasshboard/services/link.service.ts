import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as ENV } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { handleServicesErrors } from '../../shared/functions/handle-errors';
import { ILink } from '../interfaces/i-link';
import { LinkStorageService } from './link.storage';
const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

@Injectable({
  providedIn: 'root',
})
export class LinkService {
  constructor(private http: HttpClient, private linkStorageService: LinkStorageService) {}

  // TODO This response is bad from API, TODO change api, and refactor method
  public list(): Observable<any> {
    // @ts-ignore
    return this.http.get<any>(`${ENV.apiLinks}/links`, { headers, responseType: 'text' }).pipe(
      map((response: any) => {
        console.warn(response, 'This response is bad from API, TODO fix api');
        const data = [
          {
            id: 1,
            url: 'https://daphne.com',
            name: 'rodger.name',
          },
          {
            id: 2,
            url: 'http://ferne.biz',
            name: 'german.name',
          },
        ];
        this.linkStorageService.setLinks(data);
        return data;
      }),
      catchError((e) => {
        return handleServicesErrors(e, LinkService.name);
      })
    );
  }

  // TODO This response is bad from API, TODO change api, and refactor method
  public create(link: ILink): Observable<any> {
    // @ts-ignore
    return this.http.post<any>(`${ENV.apiLinks}/links`, link, { headers, responseType: 'text' }).pipe(
      map((response: any) => {
        console.warn(response, 'This response is bad from API, TODO fix api');
        return {
          id: Math.floor(Math.random() * (500 - 100) + 100),
          ...link,
        };
      }),
      catchError((e) => {
        return handleServicesErrors(e, LinkService.name);
      })
    );
  }

  // TODO This response is bad from API, TODO change api, and refactor method
  public delete(id: number): Observable<any> {
    // @ts-ignore
    return this.http.delete<any>(`${ENV.apiLinks}/links/${id}`, { headers, responseType: 'text' }).pipe(
      map((response: any) => {
        console.warn(response, 'This response is bad from API, TODO fix api');
        return {
          id,
        };
      }),
      catchError((e) => {
        return handleServicesErrors(e, LinkService.name);
      })
    );
  }
}
