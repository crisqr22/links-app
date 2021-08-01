import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ILink } from '../../interfaces/i-link';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() link: ILink = {};

  @Output()
  deleteEvent = new EventEmitter();

  public delete(link: ILink): void {
    this.deleteEvent.emit(link);
  }
}
