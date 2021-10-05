import { Component, OnInit } from '@angular/core';
import { GoogleService } from 'src/app/shared/services/google.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { PoiService } from 'src/app/shared/services/poi.service';

@Component({
  selector: 'app-dashboard-item-list',
  templateUrl: './dashboard-item-list.page.html',
  styleUrls: ['./dashboard-item-list.page.scss'],
})
export class DashboardItemListPage implements OnInit {

  currentRouteList;  
  currentPoiList;

  constructor(
    public geolocation: Geolocation,
    public googleService: GoogleService,
    public poiService: PoiService) {
  }


  ngOnInit() {

    this.geolocation.getCurrentPosition()
    .then((position) => {

      const origin = this.googleService.getLatLng(position.coords)

      const destination = this.googleService.getLatLng(this.poiService.getDestinationPosition());
     
      this.googleService.route(origin,destination);

      this.currentRouteList = this.googleService.currentRoute;

    });
    
    this.currentPoiList=this.poiService.currentPOI;

    this.poiService.getPois()

  }

}
