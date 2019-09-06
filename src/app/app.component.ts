import {Component, ViewEncapsulation, OnInit, AfterViewInit, ElementRef, ChangeDetectorRef} from '@angular/core';
import {Title} from '@angular/platform-browser';

import {UiCookie, UiToolbarService} from 'ng-smn-ui';

import {RegionService} from './core/region.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [UiToolbarService]
})
export class AppComponent implements OnInit, AfterViewInit {
    title: string;
    menuOpen: boolean;
    region: any;

    constructor(private toolbarService: UiToolbarService, public element: ElementRef, private titleService: Title,
                private regionService: RegionService) {
        this.toolbarService.change.subscribe(title => this.title = title);
        this.regionService.change.subscribe(region => this.region = region);
    }

    ngOnInit() {
        this.titleService.setTitle('SMN UI Doc');
        this.toolbarService.set('SMN UI Doc');

        this.menuOpen = UiCookie.get('NavDrawerPersistent') === 'true';

        this.regionService.set(UiCookie.get('Region'));

        this.toolbarService.registerMainToolbar(document.getElementById('app-header'));
    }

    ngAfterViewInit() {
    }

    changeRegion(language) {
        UiCookie.set('Region', language);
        this.regionService.set(language);
    }
}
