import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { UiToolbarService } from 'ng-smn-ui';

@Component({
    selector: 'app-cnpj',
    templateUrl: './cnpj.component.html',
    styleUrls: ['./cnpj.component.scss']
})
export class CnpjComponent implements OnInit {

    cnpj: string;

    constructor(
        private titleService: Title,
        private toolbarService: UiToolbarService
    ) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.titleService.setTitle('CNPJ Mask');
        this.toolbarService.set('CNPJ Mask');
    }

}
