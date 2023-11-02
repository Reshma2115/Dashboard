import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'layout/dashboard', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(dashboard => dashboard.DashboardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
