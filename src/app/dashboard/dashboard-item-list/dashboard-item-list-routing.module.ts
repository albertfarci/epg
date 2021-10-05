import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardItemListPage } from './dashboard-item-list.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardItemListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardItemListPageRoutingModule {}
