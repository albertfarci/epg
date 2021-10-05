import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TablinkPage } from './tablink.page';
import { TablinksPageRoutingModule } from './tablink-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TablinksPageRoutingModule
  ],
  declarations: [TablinkPage]
})
export class TablinkPageModule {}
