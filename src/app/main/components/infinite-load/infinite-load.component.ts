import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { UiToolbarService } from 'ng-smn-ui';
import {UiInfiniteLoadService} from 'ng-smn-ui';

@Component({
    selector: 'app-infinite-load',
    templateUrl: './infinite-load.component.html',
    styleUrls: ['./infinite-load.component.scss']
})
export class InfiniteLoadComponent implements OnInit, AfterViewInit, OnDestroy {

    items;
    items2;

    constructor(
        private titleService: Title,
        private toolbarService: UiToolbarService,
        private infiniteLoad: UiInfiniteLoadService
    ) { 
        this.items = [{}, {}, {}, {}, {}, {}];
        this.items2 = [{}, {}, {}, {}, {}, {}];
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.titleService.setTitle('Infinite load');
        this.toolbarService.set('Infinite load');
        this.infiniteLoad.register(window, () => {
            this.loadMore2();
        });
    }

    ngOnDestroy() {
        // Nunca se esqueça de remover a instância do Infinite Load se você utilizou no body
        this.infiniteLoad.destroy();
    }

    loadMore() {
        const items = [{}, {}, {}, {}, {}, {}];

        this.items = [...this.items, ...items];
    }

    loadMore2() {
        const items = [{}, {}, {}, {}, {}, {}];

        this.items2 = [...this.items2, ...items];
    }

}
