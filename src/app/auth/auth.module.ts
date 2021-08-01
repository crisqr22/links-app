import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { PageLoginComponent } from './pages/login/login-page.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterOutletComponent } from './router-outlet/router-outlet.component';
import { SharedModule } from '../shared/shared.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PageRegisterComponent } from './pages/register/register-page.component';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './security/auth.guard';
import { AuthenticatedService } from './services/authenticated.service';
import { UserService } from './services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserStorage } from './services/user.storage';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/auth/', '.json');
}

@NgModule({
  declarations: [RouterOutletComponent, PageLoginComponent, PageRegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      isolate: true,
    }),
  ],
  providers: [CookieService, UserService, AuthenticatedService, AuthGuard, UserStorage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule {}
