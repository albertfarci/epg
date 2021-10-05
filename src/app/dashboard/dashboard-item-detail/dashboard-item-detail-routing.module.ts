import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardItemDetailPage } from './dashboard-item-detail.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardItemDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardItemDetailPageRoutingModule {}
