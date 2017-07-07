import {Component, AfterViewInit, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

import {UiToolbarService} from 'ng-smn-ui';

import {RegionService} from '../core/region.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnInit {
    region: any;

    constructor(private toolbarService: UiToolbarService, private titleService: Title, private regionService: RegionService) {
        this.regionService.change.subscribe(region => this.region = region);
    }

    ngOnInit() {
        this.region = this.regionService.get();
    }

    ngAfterViewInit() {
        this.titleService.setTitle('SMN UI Doc');
        this.toolbarService.set('SMN UI Doc');
    }
}
