import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-leg',
  templateUrl: './item-leg.component.html',
  styleUrls: ['./item-leg.component.scss'],
})
export class ItemLegComponent implements OnChanges {

  @Input() routesItemLeg;

  constructor(private route: Router) { }

  ngOnChanges() {
    console.log(this.routesItemLeg)
  }

  goToDetail(){
    console.log()

    this.route.navigate([`/tablinks/dashboard/item/${this.routesItemLeg.poi.id}`]);
    // [routerLink]="['/tablinks/dashboard/item', routesItemLeg.poi.id]"
  }

}
