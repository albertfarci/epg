import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnChanges {

  @Input() routesItemList;
  @Input() poiItemList;

  itemList: any[] =[]

  constructor() { }

  ngOnChanges() {

    if(this.poiItemList && this.routesItemList?.routes[0].legs){

      for (let index = 0; index < this.poiItemList.length; index++) {      
        
        this.pushItemList(this.getRoute(index),this.getPoi(index))
      }
    }
    
  }

  pushItemList(route,poi){
    this.itemList.push({
      leg : route,
      poi : poi
    });
  }

  getRoute(index){
    return this.routesItemList?.routes[0].legs[index];
  }

  getPoi(index){
    return this.poiItemList[index];
  }
}
