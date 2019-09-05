import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { UiToolbarService } from 'ng-smn-ui';

@Component({
    selector: 'app-subheaders',
    templateUrl: './subheaders.component.html',
    styleUrls: ['./subheaders.component.scss']
})
export class SubheadersComponent implements OnInit, AfterViewInit {

    constructor(
        private titleService: Title,
        private toolbarService: UiToolbarService
    ) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.titleService.setTitle('Subheaders');
        this.toolbarService.set('Subheaders');
    }

}
