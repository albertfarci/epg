import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConnectivityService } from '../connectivity-service.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { GoogleService } from '../shared/services/google.service';
import { ICONS } from '../shared/models/marker-options.model';

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

  constructor(public nav: NavController,
    public connectivityService: ConnectivityService,
    public geolocation: Geolocation,
    public googleService: GoogleService) {

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
    this.geolocation.getCurrentPosition()
      .then((position) => {

        this.map = this.googleService.initMap(this.mapElement.nativeElement,position)

        const origin = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        const destination = new google.maps.LatLng(39.616867131543394, 8.819857065354022);

        this.googleService.setMarker(ICONS['Ellipse25'],origin,this.map);
        this.googleService.setMarker(ICONS['posizioneCorrente'],origin,this.map);

        this.googleService.route(origin,destination);

        this.googleService.currentRoute.subscribe(
          data => this.googleService.setMap(data,this.map)
        )

        const request = {
          placeId: "ChIJN1t_tDeuEmsRUsoyG83frY4",
          fields: ["name", "formatted_address", "place_id", "geometry"],
        };
        const service = new google.maps.places.PlacesService(this.map);

        service.getDetails(request, (place, status) => {
          if (
            status === google.maps.places.PlacesServiceStatus.OK &&
            place &&
            place.geometry &&
            place.geometry.location
          ) {
            console.log(place)
          }
        });

      });
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