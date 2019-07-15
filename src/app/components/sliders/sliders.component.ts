import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { UiToolbarService } from 'ng-smn-ui';

@Component({
    selector: 'app-sliders',
    templateUrl: './sliders.component.html',
    styleUrls: ['./sliders.component.scss']
})
export class SlidersComponent implements OnInit, AfterViewInit {

    begin: number;
    end: number;
    range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    checkbox = false;
    ballon = true;
    checkboxDark = true;
    ballonDark = true;
    value: any;

    constructor(
        private titleService: Title,
        private toolbarService: UiToolbarService
    ) {
        this.begin = 2;
        this.end = 7;
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.titleService.setTitle('Sliders');
        this.toolbarService.set('Sliders');
    }

}
