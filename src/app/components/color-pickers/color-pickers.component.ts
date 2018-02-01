import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-pickers',
  templateUrl: './color-pickers.component.html',
  styleUrls: ['../../home/home.component.scss', './color-pickers.component.scss']
})
export class ColorPickersComponent implements OnInit {
    color;

  constructor() { }

  ngOnInit() {
  }

}
