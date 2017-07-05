import {Component, AfterViewInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

import {UiToolbarService} from 'ng-smn-ui';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

    constructor(private toolbarService: UiToolbarService, private titleService: Title) {
    }

    ngAfterViewInit() {
        this.titleService.setTitle('SMN UI Doc');
        this.toolbarService.set('SMN UI Doc');
    }
}
