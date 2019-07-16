import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { UiToolbarService } from 'ng-smn-ui';

@Component({
    selector: 'app-selects',
    templateUrl: './selects.component.html',
    styleUrls: ['./selects.component.scss']
})
export class SelectsComponent implements OnInit, AfterViewInit {

    list = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
    option: string;

    constructor(
        private titleService: Title,
        private toolbarService: UiToolbarService
    ) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.titleService.setTitle('Selects');
        this.toolbarService.set('Selects');
    }

}
