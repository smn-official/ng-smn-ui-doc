import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { UiToolbarService } from 'ng-smn-ui';
@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  constructor(
    private titleService: Title,
    private toolbarService: UiToolbarService
) { }

ngOnInit() {
}

ngAfterViewInit() {
    this.titleService.setTitle('Progress & Activity');
    this.toolbarService.set('Progress & Activity');
}

}
