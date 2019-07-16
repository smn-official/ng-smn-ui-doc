import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import { UiToolbarService } from 'ng-smn-ui';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['../../../home/home.component.scss', './clock.component.scss']
})
export class ClockComponent implements OnInit, AfterViewInit {
    time;

  constructor(private titleService: Title,
              private toolbarService: UiToolbarService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
      this.titleService.setTitle('Clock');
      this.toolbarService.set('Clock');
  }

}
