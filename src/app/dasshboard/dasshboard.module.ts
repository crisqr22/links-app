import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dasshboard-routing.module';
import { DashboardRouterOutletComponent } from './router-outlet/router-outlet.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LinkPageComponent } from './pages/links/link-page.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { SharedModule } from '../shared/shared.module';
import { ItemComponent } from './components/item/item.component';
import { LinkService } from './services/link.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LinkStorageService } from './services/link.storage';
import { AuthModule } from '../auth/auth.module';
import { AuthInterceptor } from '../auth/security/auth.interceptor';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/dashboard/', '.json');
}

@NgModule({
  declarations: [DashboardRouterOutletComponent, LinkPageComponent, AvatarComponent, ItemComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AuthModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      isolate: true,
    }),
    SharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    LinkService,
    LinkStorageService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}
