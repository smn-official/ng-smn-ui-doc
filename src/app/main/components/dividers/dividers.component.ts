import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { UiToolbarService } from 'ng-smn-ui';
import { TranslateService } from '../../../shared/translate/translate.service';

@Component({
    selector: 'app-dividers',
    templateUrl: './dividers.component.html',
    styleUrls: ['./dividers.component.scss']
})
export class DividersComponent implements OnInit, AfterViewInit {
    translate: any;
    constructor(
        private titleService: Title,
        private toolbarService: UiToolbarService,
        private translateService: TranslateService) {
        this.translate = {
            labels: {}
        };
        this.translateService.change.subscribe(async () => {
            this.translate = await this.translateService.getLanguageData('dividers');
        });
    }

    async ngOnInit() {
        this.translate = await this.translateService.getLanguageData('dividers');
    }

    ngAfterViewInit() {
        this.titleService.setTitle('Dividers');
        this.toolbarService.set('Dividers');
    }
    getHtml() {
        return `
    <div class="light">
            <ui-card-content>
                <div class="ui-list">
                    <a class="ui-list-item" uiRipple>Item 1</a>
                    <div class="ui-divider"></div>
                    <a class="ui-list-item" uiRipple>Item 2</a>
                </div>
            </ui-card-content>
    </div>
    `;
}
}
