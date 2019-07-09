import { Component, OnInit, AfterViewInit } from '@angular/core';

import {Title} from '@angular/platform-browser';
import { UiToolbarService } from 'ng-smn-ui';

@Component({
  selector: 'app-toolbars',
  templateUrl: './toolbars.component.html',
  styleUrls: ['../../home/home.component.scss', './toolbars.component.scss']
})
export class ToolbarsComponent implements OnInit, AfterViewInit {

  constructor(
    private titleService: Title,
    private toolbarService: UiToolbarService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.titleService.setTitle('Toolbars');
    this.toolbarService.set('Toolbars');
  }
}
