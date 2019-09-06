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

    constructor(private toolbarService: UiToolbarService,
                private titleService: Title,
                private regionService: RegionService) {
        this.regionService.change.subscribe(region => this.region = region);
    }

    ngOnInit() {
        this.region = this.regionService.get();
    }

    ngAfterViewInit() {
        this.titleService.setTitle('SMN UI Doc');
        this.toolbarService.set('SMN UI Doc');
    }

    getStep2() {
        return `import { SMNUIModule } from 'ng-smn-ui';
...
  imports: [
    ...
    SMNUIModule
  ]
...
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
...`;
    }

    getStep3() {
        return `@import "~ng-smn-ui/lib/core/core";
@import "~ng-smn-ui/lib/core/theme";

$primary: (color: 'blue', hue: '500');
$accent: (color: 'green', hue: '50');

$theme: ui-theme($primary, $accent);
$theme-dark: ui-theme($primary, $accent, true);

@include ui-core();

@include ui-build-theme($theme);`;
    }

    getStep4() {
        return `<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
<link href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,400,400italic,500,500italic,700,700italic" rel="stylesheet"/>`;
    }
}
