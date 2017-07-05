import {Component, AfterViewInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

import {UiToolbarService} from 'ng-smn-ui';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements AfterViewInit {
    constructor(private toolbarService: UiToolbarService, private titleService: Title) {
    }

    ngAfterViewInit() {
        this.titleService.setTitle('Página não encontrada');
        this.toolbarService.set('Página não encontrada');
    }
}
