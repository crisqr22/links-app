import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ILink } from '../interfaces/i-link';

@Injectable()
export class LinkStorageService {
  private links = new BehaviorSubject<Array<ILink>>([]);

  public getLinks(): Observable<Array<ILink>> {
    return this.links.asObservable();
  }

  public setLinks(links: Array<ILink>) {
    this.links.next(links);
  }
}
