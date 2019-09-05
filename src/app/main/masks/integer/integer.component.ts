import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { UiToolbarService } from 'ng-smn-ui';

@Component({
    selector: 'app-integer',
    templateUrl: './integer.component.html',
    styleUrls: ['./integer.component.scss']
})
export class IntegerComponent implements OnInit, AfterViewInit {

    integer: string;

    constructor(
        private titleService: Title,
        private toolbarService: UiToolbarService
    ) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.titleService.setTitle('Integer Mask');
        this.toolbarService.set('Integer Mask');
    }

}
