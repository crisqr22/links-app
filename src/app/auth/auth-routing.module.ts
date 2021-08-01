import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterOutletComponent } from './router-outlet/router-outlet.component';
import { PageLoginComponent } from './pages/login/login-page.component';
import { PageRegisterComponent } from './pages/register/register-page.component';

const routes: Routes = [
  {
    path: '',
    component: RouterOutletComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      {
        path: 'login',
        component: PageLoginComponent,
      },
      {
        path: 'register',
        component: PageRegisterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
