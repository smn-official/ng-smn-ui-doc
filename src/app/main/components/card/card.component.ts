import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { UiToolbarService } from 'ng-smn-ui';
import { RegionService } from '../../../core/region.service';
import { TranslateService } from '@shared/translate/translate.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['../../../home/home.component.scss', './card.component.scss']
})
export class CardComponent implements AfterViewInit, OnInit {
    region: any;
    codes: any[];
    translate: any;

    constructor(private toolbarService: UiToolbarService,
                private titleService: Title,
                private regionService: RegionService,
                private translateService: TranslateService
    ) {
        this.regionService.change.subscribe(region => this.region = region);
        this.codes = [];
        this.translate = {
            labels: {}
        };
        this.translateService.change.subscribe(async () => {
            this.translate = await this.translateService.getLanguageData('card');
        });
    }

    async ngOnInit() {
        this.region = this.regionService.get();
        this.translate = await this.translateService.getLanguageData('card');

    }


    ngAfterViewInit() {
        this.titleService.setTitle('Card');
        this.toolbarService.set('Card');
    }
    getHtml() {
        return `
    <!--Conteúdo -->
    <ui-card>
        <ui-card-title></ui-card-title>
        <ui-card-subtitle></ui-card-subtitle>
        <ui-card-content>
            Consectetur adipisicing elit. Accusamus aperiam deserunt dolore expedita fugit
            illum, minus
            nihil obcaecati pariatur porro quibusdam tempore totam ut. Deleniti iusto nulla
            sint sunt totam?
        </ui-card-content>
    </ui-card>

    <!-- Com botões -->
    <ui-card>
        <ui-card-title></ui-card-title>
        <ui-card-subtitle></ui-card-subtitle>
        <ui-card-content></ui-card-content>
        <div class="ui-button-container cover">
            <button class="ui-button flat" uiRipple>Secondary</button>
            <button class="ui-button flat primary" uiRipple>Action</button>
        </div>
    </ui-card>

    <!-- Com botões (alinhados a esquerda) -->
    <ui-card>
        <ui-card-title></ui-card-title>
        <ui-card-subtitle></ui-card-subtitle>
        <ui-card-content></ui-card-content>
        <div class="ui-button-container cover align-left">
            <button class="ui-button flat primary" uiRipple>Action</button>
            <button class="ui-button flat" uiRipple>Secondary</button>
        </div>
    </ui-card>

    <!------ Com imagem ------>
    <ui-card>
        <img src="https://material.angular.io/assets/img/examples/shiba2.jpg"
            class="responsive">
        <ui-card-title></ui-card-title>
        <ui-card-subtitle></ui-card-subtitle>
        <ui-card-content></ui-card-content>
    </ui-card>
    `;
    }
}
