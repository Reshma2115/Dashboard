import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardpageComponent } from './dashboardpage/dashboardpage.component';

const routes: Routes = [
  {path:'layout',component:LayoutComponent,children:[
    {path:'dashboard',component:DashboardpageComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
