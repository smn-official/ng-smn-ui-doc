import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { UiToolbarService } from 'ng-smn-ui';

@Component({
    selector: 'app-flex-container',
    templateUrl: './flex-container.component.html',
    styleUrls: ['./flex-container.component.scss']
})
export class FlexContainerComponent implements OnInit, AfterViewInit {

    constructor(
        private titleService: Title,
        private toolbarService: UiToolbarService
    ) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.titleService.setTitle('Flex container');
        this.toolbarService.set('Flex container');
    }

}
