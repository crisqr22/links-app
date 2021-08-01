import { Component, Input } from '@angular/core';
import { IUser } from '../../../auth/interfaces/i-user';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @Input() user: IUser | undefined;
}
