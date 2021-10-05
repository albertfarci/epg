import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-distance',
  templateUrl: './item-distance.component.html',
  styleUrls: ['./item-distance.component.scss'],
})
export class ItemDistanceComponent implements OnInit {

  @Input() routesItemDistance;

  constructor() { }

  ngOnInit() {}

}
