import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { UiToolbarService } from 'ng-smn-ui';

@Component({
    selector: 'app-time-pickers',
    templateUrl: './time-pickers.component.html',
    styleUrls: ['./time-pickers.component.scss']
})
export class TimePickersComponent implements OnInit, AfterViewInit {

    confirmSelect: any;
    functionSelect: any;
    simple: any;
    timeDark: any;
    minTime: any;

    constructor(
        private titleService: Title,
        private toolbarService: UiToolbarService
    ) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.titleService.setTitle('Time pickers');
        this.toolbarService.set('Time pickers');
    }

    execFunctionSelect() {
        alert('Você escolheu: ' + this.functionSelect);
    }

}
