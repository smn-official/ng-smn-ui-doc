import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { UiToolbarService } from 'ng-smn-ui';
import { RegionService } from '../../../core/region.service';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['../../../home/home.component.scss', './input.component.scss']
})
export class InputComponent implements AfterViewInit, OnInit {
    nome: String = 'Mário';
    icons: String = '<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>';

    constructor(
            private toolbarService: UiToolbarService, 
            private titleService: Title,
            private regionService: RegionService
        ) {

    }


    ngOnInit() {

    }

    ngAfterViewInit() {
        this.titleService.setTitle('Input');
        this.toolbarService.set('Input');
    }
}
