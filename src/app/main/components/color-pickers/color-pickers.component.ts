import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import { UiToolbarService } from 'ng-smn-ui';

@Component({
  selector: 'app-color-pickers',
  templateUrl: './color-pickers.component.html',
  styleUrls: ['../../../home/home.component.scss', './color-pickers.component.scss']
})
export class ColorPickersComponent implements OnInit, AfterViewInit {
    color;

  constructor(private titleService: Title,
              private toolbarService: UiToolbarService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
      this.titleService.setTitle('Color pickers');
      this.toolbarService.set('Color pickers');
  }

}
