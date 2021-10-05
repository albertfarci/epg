import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

declare var google;

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  waypts = [
    {
      location: { lat: 39.616198572687665, lng: 8.822681938825326 },
      stopover: true,
    },
    {
      location: { lat: 39.6159638816967, lng:  8.818078220431165},
      stopover: true,
    }
  ];

  directionsRenderer;
  directionsService;

  private routeSource = new BehaviorSubject<any>(null);

  currentRoute = this.routeSource.asObservable();

  constructor() { 
    
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    this.directionsService = new google.maps.DirectionsService();
  }

  setMarker(icon,origin,map){

    const option = {
      position: origin,
      map: map,
      icon: icon,
      title: "FontAwesome SVG Marker",
    }

    new google.maps.Marker(option);

  }

  initMap(nativeElement, position){
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: "satellite",
      }

      return new google.maps.Map(nativeElement, mapOptions);
    
  }

  route (origin,destination){

    this.directionsService
    .route({
      origin: origin, // Haight.
      destination: destination, // Ocean Beach.
      // Note that Javascript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      waypoints: this.waypts,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode['DRIVING'],
    }).then((response) => {

      this.routeSource.next(response);
    })
    .catch((e) => 
    {

      window.alert("Directions request failed due to " + status)

      this.routeSource.error(e);
    });
  }

  setMap(response,map){

    if(!!response) {

      this.directionsRenderer.setMap(map);
      this.directionsRenderer.setDirections(response);
    }
  }

  getLatLng(coords) {
    return new google.maps.LatLng(coords.latitude, coords.longitude);
  }
}
