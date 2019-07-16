import {Component, AfterViewInit, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

import {UiToolbarService} from 'ng-smn-ui';
import {RegionService} from '../../../core/region.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['../../../home/home.component.scss', './card.component.scss']
})
export class CardComponent implements AfterViewInit, OnInit {
    region: any;

    constructor(private toolbarService: UiToolbarService, private titleService: Title, private regionService: RegionService) {
        this.regionService.change.subscribe(region => {
            this.region = region;
        });
    }

    ngOnInit() {
        this.region = this.regionService.get();
    }

    ngAfterViewInit() {
        this.titleService.setTitle('Card');
        this.toolbarService.set('Card');
    }
}
