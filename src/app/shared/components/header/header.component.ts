import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAuthSession } from '../../../auth/interfaces/i-auth-response';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() showLogo: boolean = false;

  @Input() session: IAuthSession | undefined;

  @Output()
  onLogout = new EventEmitter();

  public logOut() {
    this.onLogout.emit(true);
  }
}
