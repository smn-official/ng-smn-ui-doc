import {Component, ViewEncapsulation, OnInit, AfterViewInit, ElementRef, ChangeDetectorRef} from '@angular/core';
import {Title} from '@angular/platform-browser';

import {UiCookie, UiToolbarService} from 'ng-smn-ui';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [UiToolbarService]
})
export class AppComponent implements OnInit, AfterViewInit {
    title: String;
    menuOpen: boolean;

    constructor(private toolbarService: UiToolbarService, public element: ElementRef, private titleService: Title) {
        this.toolbarService.change.subscribe(title => this.title = title);
    }

    ngOnInit() {

        this.titleService.setTitle('SMN UI Doc');
        this.toolbarService.set('SMN UI Doc');

        const isNavDrawerPersistent = UiCookie.get('NavDrawerPersistent') === 'true';

        if (isNavDrawerPersistent) {
            this.menuOpen = true;
        }

        this.toolbarService.registerMainToolbar(document.getElementById('app-header'));
    }

    ngAfterViewInit() {
    }
}
