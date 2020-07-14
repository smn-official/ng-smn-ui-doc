import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { UiToolbarService } from 'ng-smn-ui';
import { TranslateService } from 'src/app/shared/translate/translate.service';

@Component({
    selector: 'app-subheaders',
    templateUrl: './subheaders.component.html',
    styleUrls: ['./subheaders.component.scss']
})
export class SubheadersComponent implements OnInit, AfterViewInit {
    translate: any;
    constructor(private titleService: Title,
                private toolbarService: UiToolbarService,
                private translateService: TranslateService) {
        this.translate = {
            labels: {}
        };
        this.translateService.change.subscribe(async () => {
            this.translate = await this.translateService.getLanguageData('subheaders');
        });
    }

    async ngOnInit() {
        this.translate = await this.translateService.getLanguageData('subheaders');
    }

    ngAfterViewInit() {
        this.titleService.setTitle('Subheaders');
        this.toolbarService.set('Subheaders');
    }
    getHtml() {
        return `
<!-- Light -->
<ui-card>
    <ui-card-title>Card com Subheader</ui-card-title>
</ui-card>

<!-- Dark -->
<ui-card>
    <ui-card-title>Card com Subheader (dark)</ui-card-title>
    <ui-card-content>
        <ui-subheader>Um texto sem sentido abaixo</ui-subheader>
    </ui-card-content>
</ui-card>
 `;

}

}
