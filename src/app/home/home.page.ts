import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConnectivityService } from '../connectivity-service.service';
import { GoogleService } from '../shared/services/google.service';
import { ICONS } from '../shared/models/marker-options.model';
import { GeoLocationService } from '../shared/services/geoLocation.service';
import { PoiService } from '../shared/services/poi.service';

declare var google;

@Component({
  selector: 'home-page',
  templateUrl: 'home.page.html'
})
export class HomePage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  mapInitialised: boolean = false;
  apiKey: any;
  public markers: any[] = [];

  tracker;
  destination;
  origin;

  constructor(public nav: NavController,
    public connectivityService: ConnectivityService,
    public geolocation: GeoLocationService,
    public googleService: GoogleService,
    public poiService: PoiService) {

  }

  ionViewDidEnter() {
    this.loadGoogleMaps();
  }

  loadGoogleMaps() {

    this.addConnectivityListeners();

    if (typeof google == "undefined" || typeof google.maps == "undefined") {
      console.log("Google maps JavaScript needs to be loaded.");
      this.disableMap();
      if (this.connectivityService.isOnline()) {
        console.log("online, loading map");
        //Load the SDK
        window['mapInit'] = () => {
          this.initMap();
          this.enableMap();
        }
      }
    }
    else {
      if (this.connectivityService.isOnline()) {
        console.log("showing map");
        this.initMap();
        this.enableMap();
      }
      else {
        console.log("disabling map");
        this.disableMap();
      }
    }
  }

  initMap() {

    this.mapInitialised = true;

    this.tracker = setInterval(()=>{

      this.geolocation.getLocationCoordinatesSetup();

    },10000);


    this.geolocation.currentPosition
      .subscribe(
        position => {

          if (position) {

            if(!this.map){
              this.map = this.googleService.initMap(this.mapElement.nativeElement, position)

              const destinationConst = this.poiService.getDestinationPosition();

              this.destination=new google.maps.LatLng(destinationConst.latitude, destinationConst.longitude);
            }
            
            this.origin = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            this.googleService.setMarker(ICONS['Ellipse25'], this.origin, this.map);
            this.googleService.setMarker(ICONS['posizioneCorrente'], this.origin, this.map);

            this.googleService.route(this.origin, this.destination);

            this.googleService.currentRoute.subscribe(
              data => this.googleService.setMap(data, this.map)
            )

          }
        }
      )

    this.geolocation.getLocationCoordinatesSetup();

  }

  disableMap() {
    console.log("disable map");
  }

  enableMap() {
    console.log("enable map");
  }

  addConnectivityListeners() {
    let onOnline = () => {
      setTimeout(() => {
        if (typeof google == "undefined" || typeof google.maps == "undefined") {
          this.loadGoogleMaps();
        } else {
          if (!this.mapInitialised) {
            this.initMap();
          }
          this.enableMap();
        }
      }, 2000);
    };
    let onOffline = () => {
      this.disableMap();
    };
    document.addEventListener('online', onOnline, false);
    document.addEventListener('offline', onOffline, false);
  }

}