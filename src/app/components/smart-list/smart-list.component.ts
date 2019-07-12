import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { UiToolbarService } from 'ng-smn-ui';

@Component({
    selector: 'app-smart-list',
    templateUrl: './smart-list.component.html',
    styleUrls: ['./smart-list.component.scss']
})
export class SmartListComponent implements OnInit, AfterViewInit {

    lista: any[];
    telefones: any[];

    constructor(
        private titleService: Title,
        private toolbarService: UiToolbarService
    ) {
        this.lista = [];
        this.telefones = [];
    }

    ngOnInit() {
        this.lista = [{ a: '1111', b: '5555', ity: true }];
        this.telefones = [];
    }

    ngAfterViewInit() {
        this.titleService.setTitle('Smart list');
        this.toolbarService.set('Smart list');
    }

}
