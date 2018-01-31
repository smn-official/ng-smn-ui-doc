import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import { UiToolbarService } from 'ng-smn-ui';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['../../home/home.component.scss', './chips.component.scss']
})
export class ChipsComponent implements OnInit, AfterViewInit {

  constructor(private titleService: Title,
              private toolbarService: UiToolbarService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
      this.titleService.setTitle('Chips');
      this.toolbarService.set('Chips');
  }

}
