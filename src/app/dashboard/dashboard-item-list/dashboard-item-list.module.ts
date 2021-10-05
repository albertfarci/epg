import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardItemListPageRoutingModule } from './dashboard-item-list-routing.module';

import { DashboardItemListPage } from './dashboard-item-list.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardItemListPageRoutingModule,
    SharedModule
  ],
  declarations: [DashboardItemListPage]
})
export class DashboardItemListPageModule {}
