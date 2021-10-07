import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';

declare var Connection;

@Injectable()
export class ConnectivityService {
  onDevice: boolean;
  constructor(public platform: Platform, public network: Network) {
    this.onDevice = this.platform.is('cordova');
  }

  isOnline(): boolean {
    console.log(this.network.Connection)
    if (this.onDevice && this.network.Connection) {
      return true
    } else {
      return navigator.onLine;
    }
  }
  isOffline(): boolean {
    if (this.onDevice && this.network.Connection) {
      return this.network.Connection === Connection.NONE;
    } else {
      return !navigator.onLine;
    }
  }
}