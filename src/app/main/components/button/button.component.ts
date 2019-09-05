import {Component, AfterViewInit, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

import {UiToolbarService} from 'ng-smn-ui';

import {RegionService} from '../../../core/region.service';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['../../../home/home.component.scss', './button.component.scss']
})
export class ButtonComponent implements AfterViewInit, OnInit {
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
        this.titleService.setTitle('Button');
        this.toolbarService.set('Button');
    }
}
