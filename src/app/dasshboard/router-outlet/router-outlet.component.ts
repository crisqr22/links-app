import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserStorage } from '../../auth/services/user.storage';
import { IAuthSession } from '../../auth/interfaces/i-auth-response';
import { UserService } from '../../auth/services/user.service';
import { IUser } from '../../auth/interfaces/i-user';
import { AuthenticatedService } from '../../auth/services/authenticated.service';

@Component({
  selector: 'app-dashboard-router-outlet',
  templateUrl: './router-outlet.component.html',
  styleUrls: [],
})
export class DashboardRouterOutletComponent {
  public user: IUser | undefined;
  public session: IAuthSession | undefined;

  constructor(
    private translate: TranslateService,
    private authenticatedService: AuthenticatedService,
    private userStorage: UserStorage,
    private userService: UserService
  ) {
    translate.setDefaultLang('en');
    translate.use('en');

    this.userStorage.getSession().subscribe((session) => {
      this.session = session;
      this.getUser(session);
    });
  }

  public getUser(session: IAuthSession) {
    this.userService.get(session.id).subscribe((user) => {
      this.user = user;
    });
  }

  public logOut(): void {
    this.authenticatedService.logOut().subscribe();
  }
}
