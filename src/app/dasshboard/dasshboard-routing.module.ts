import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRouterOutletComponent } from './router-outlet/router-outlet.component';
import { LinkPageComponent } from './pages/links/link-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardRouterOutletComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'links' },
      {
        path: 'links',
        component: LinkPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
