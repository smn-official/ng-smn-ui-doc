import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { UiToolbarService } from 'ng-smn-ui';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterViewInit {

    list: any[];

    constructor(
        private titleService: Title,
        private toolbarService: UiToolbarService
    ) { }

    ngOnInit() {
        this.list = [
            { id: 1, content: 'Lorem ipsum dolor sit amet' },
            { id: 2, content: 'Vampeta ipsum' },
            { id: 3, content: 'Oi eu sou o goku' },
            { id: 4, content: 'SMN-UI is the best' },
            { id: 5, content: 'Lorem ipsum dolor sit amet' },
            { id: 6, content: 'Lorem ipsum dolor sit amet' },
            { id: 7, content: 'Lorem ipsum dolor sit amet' },
            { id: 8, content: 'Lorem ipsum dolor sit amet' }
        ];
    }

    ngAfterViewInit() {
        this.titleService.setTitle('Tabs');
        this.toolbarService.set('Tabs');
    }

}
