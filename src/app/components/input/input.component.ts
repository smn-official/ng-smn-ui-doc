import {Component, AfterViewInit, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

import {UiToolbarService} from 'ng-smn-ui';
import {RegionService} from '../../core/region.service';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['../../home/home.component.scss', './input.component.scss']
})
export class InputComponent implements AfterViewInit, OnInit {
    codes: any[];
    region: any;

    constructor(private toolbarService: UiToolbarService, private titleService: Title,
                private regionService: RegionService) {
        /*this.regionService.change.subscribe(region => {
            this.region = region;
            this.ngOnInit();
        });
        this.codes = [];*/
    }

    ngOnInit() {
        /*this.region = this.regionService.get();
        this.codes[0] = `<ui-input-container>
        <input type="text" [(ngModel)]="simple" uiInput>
        <label>${this.region.input.simple}</label>
    </ui-input-container>`;
        this.codes[1] = `<ui-input-container>
        <input type="text" [(ngModel)]="accent" uiInput class="accent">
        <label>Accent</label>
    </ui-input-container>`;
        this.codes[2] = `<ui-input-container>
        <input type="text" [(ngModel)]="placeholder" uiInput placeholder="Lorem ipsum">
        <label>Placeholder</label>
    </ui-input-container>`;*/
    }

    ngAfterViewInit() {
        /*this.titleService.setTitle('Input');
        this.toolbarService.set('Input');*/
    }
}
