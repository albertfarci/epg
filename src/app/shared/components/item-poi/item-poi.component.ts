import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-poi',
  templateUrl: './item-poi.component.html',
  styleUrls: ['./item-poi.component.scss'],
})
export class ItemPoiComponent implements OnInit {

  @Input() routesItemPoi;
  
  constructor() { }

  ngOnInit() {}

}
