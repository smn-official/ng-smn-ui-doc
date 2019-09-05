import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { UiToolbarService } from 'ng-smn-ui';

@Component({
    selector: 'app-dividers',
    templateUrl: './dividers.component.html',
    styleUrls: ['./dividers.component.scss']
})
export class DividersComponent implements OnInit, AfterViewInit {

    constructor(
        private titleService: Title,
        private toolbarService: UiToolbarService
    ) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.titleService.setTitle('Dividers');
        this.toolbarService.set('Dividers');
    }

}
