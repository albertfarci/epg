import { Component, OnInit } from '@angular/core';

declare var google;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor() {
  }

  ngOnInit() {
  
    console.log("ngOnInit")
  }

}
