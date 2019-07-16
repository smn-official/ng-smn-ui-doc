import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import { UiToolbarService } from 'ng-smn-ui';

@Component({
  selector: 'app-bottom-sheets',
  templateUrl: './bottom-sheets.component.html',
  styleUrls: ['../../../home/home.component.scss', './bottom-sheets.component.scss']
})
export class BottomSheetsComponent implements OnInit, AfterViewInit {

  constructor(private titleService: Title,
              private toolbarService: UiToolbarService) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
      this.titleService.setTitle('Bottom sheets');
      this.toolbarService.set('Bottom sheets');
  }

}
