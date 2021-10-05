import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-item-duration',
  templateUrl: './item-duration.component.html',
  styleUrls: ['./item-duration.component.scss'],
})
export class ItemDurationComponent implements OnChanges {

  @Input() routesItemDuration;
  
  constructor() { }
  
  ngOnChanges() {
    console.log(this.routesItemDuration)
  }

}
