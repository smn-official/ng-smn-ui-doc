import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { UiToolbarService } from 'ng-smn-ui';

@Component({
    selector: 'app-float',
    templateUrl: './float.component.html',
    styleUrls: ['./float.component.scss']
})
export class FloatComponent implements OnInit, AfterViewInit {

    float: string;

    constructor(
        private titleService: Title,
        private toolbarService: UiToolbarService
    ) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.titleService.setTitle('Float Mask');
        this.toolbarService.set('Float Mask');
    }

}
