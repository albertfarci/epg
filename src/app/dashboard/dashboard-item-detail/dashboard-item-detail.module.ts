import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardItemDetailPageRoutingModule } from './dashboard-item-detail-routing.module';

import { DashboardItemDetailPage } from './dashboard-item-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardItemDetailPageRoutingModule
  ],
  declarations: [DashboardItemDetailPage]
})
export class DashboardItemDetailPageModule {}
