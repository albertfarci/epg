import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: 'item/:id',
        loadChildren: () => import('./dashboard-item-detail/dashboard-item-detail.module').then(m => m.DashboardItemDetailPageModule)
      },
      {
        path: 'list',
        loadChildren: () => import('./dashboard-item-list/dashboard-item-list.module').then(m => m.DashboardItemListPageModule)
      },
      {
        path: '',
        redirectTo: '/tablinks/dashboard/list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'dashboard-item-list',
    loadChildren: () => import('./dashboard-item-list/dashboard-item-list.module').then( m => m.DashboardItemListPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
