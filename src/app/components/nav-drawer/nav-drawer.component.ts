import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { UiToolbarService } from 'ng-smn-ui';

@Component({
    selector: 'app-nav-drawer',
    templateUrl: './nav-drawer.component.html',
    styleUrls: ['./nav-drawer.component.scss']
})
export class NavDrawerComponent implements OnInit, AfterViewInit {

    menuOpen: boolean;
    persistent: boolean

    constructor(
        private titleService: Title,
        private toolbarService: UiToolbarService,
    ) { }

    ngOnInit() {
        this.menuOpen = false;
    }

    ngAfterViewInit() {
        this.titleService.setTitle('Navigation drawer');
        this.toolbarService.set('Navigation drawer');
    }

    openDrawer() {
        this.menuOpen = true;
    }

    closeDrawer() {
        this.menuOpen = false;
    }

    openDrawerNormal() {
        this.persistent = false;
        document.body.classList.remove('ui-nav-drawer-persistent');
        this.openDrawer();
    }

    openDrawerPersistent() {
        this.persistent = true;
        document.body.classList.add('ui-nav-drawer-persistent');
        this.openDrawer();
    }

}
