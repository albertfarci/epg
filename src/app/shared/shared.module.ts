import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { GoogleService } from "./services/google.service";
import { ItemListComponent } from "./components/item-list/item-list.component";
import { ItemDurationComponent } from "./components/item-duration/item-duration.component";
import { ItemLegComponent } from "./components/item-leg/item-leg.component";
import { PoiService } from "./services/poi.service";
import { ItemDistanceComponent } from "./components/item-distance/item-distance.component";
import { ItemPoiComponent } from "./components/item-poi/item-poi.component";
import { IconTextComponent } from "./components/icon-text/icon-text.component";
import { IframeTemplateService } from "./services/iframe-template.service";

@NgModule({
  declarations: [ItemListComponent, ItemDurationComponent, ItemLegComponent, ItemDistanceComponent, ItemPoiComponent, IconTextComponent],
  imports: [CommonModule,HttpClientModule],
  exports: [ItemListComponent, ItemDurationComponent,ItemLegComponent, ItemDistanceComponent,ItemPoiComponent, IconTextComponent],
  providers: [GoogleService, PoiService, IframeTemplateService]
})
export class SharedModule { }