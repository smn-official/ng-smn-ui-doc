import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { UiToolbarService } from 'ng-smn-ui';

@Component({
    selector: 'app-cpf',
    templateUrl: './cpf.component.html',
    styleUrls: ['./cpf.component.scss']
})
export class CpfComponent implements OnInit, AfterViewInit {

    cpf: string;

    constructor(
        private titleService: Title,
        private toolbarService: UiToolbarService
    ) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.titleService.setTitle('CPF Mask');
        this.toolbarService.set('CPF Mask');
    }

}
