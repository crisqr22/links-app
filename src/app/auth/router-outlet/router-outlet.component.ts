import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-router-outlet',
  templateUrl: './router-outlet.component.html',
  styleUrls: [],
})
export class RouterOutletComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
