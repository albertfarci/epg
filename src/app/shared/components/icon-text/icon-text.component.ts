import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-text',
  templateUrl: './icon-text.component.html',
  styleUrls: ['./icon-text.component.scss'],
})
export class IconTextComponent implements OnInit {

  @Input() text;
  @Input() icon;

  constructor() { }

  ngOnInit() {}

}
