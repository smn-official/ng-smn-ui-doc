import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { UiToolbarService } from 'ng-smn-ui';
@Component({
    selector: 'app-selection-controls',
    templateUrl: './selection-controls.component.html',
    styleUrls: ['./selection-controls.component.scss']
})
export class SelectionControlsComponent implements OnInit, AfterViewInit {

    checkboxTest = true;
    checkboxTest2: String = 'S';
    radioTest = 2;
    radioTest2 = 2;
    switchTest: String = 'S';
    switchTest2: String = 'N';

    constructor(
        private titleService: Title,
        private toolbarService: UiToolbarService
    ) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.titleService.setTitle('Selections controls');
        this.toolbarService.set('Selections controls');
    }

}
