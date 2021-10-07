import { Component, OnInit } from '@angular/core';
import { GoogleService } from 'src/app/shared/services/google.service';
import { PoiService } from 'src/app/shared/services/poi.service';
import { GeoLocationService } from 'src/app/shared/services/geoLocation.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard-item-list',
  templateUrl: './dashboard-item-list.page.html',
  styleUrls: ['./dashboard-item-list.page.scss'],
})
export class DashboardItemListPage {

  currentRouteList;
  currentPoiList;

  destroy$: Subject<boolean>;

  constructor(
    public geolocation: GeoLocationService,
    public googleService: GoogleService,
    public poiService: PoiService) {
  }

  ionViewDidEnter() {

    this.destroy$ = new Subject<boolean>();

    this.geolocation.currentPosition
      .subscribe(
        position => {

          if (position) {
            console.log(position)

            const origin = this.googleService.getLatLng(position.coords)

            const destination = this.googleService.getLatLng(this.poiService.getDestinationPosition());

            this.googleService.route(origin, destination);

            this.currentRouteList = this.googleService.currentRoute;

          }
        }
      )

    this.geolocation.getLocationCoordinatesSetup();

    this.currentPoiList = this.poiService.currentPOI;

    this.poiService.getPois()

  }

}
