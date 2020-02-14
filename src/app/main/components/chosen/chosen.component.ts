import { Component, AfterViewInit, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { UiToolbarService } from 'ng-smn-ui';
import { TranslateService } from 'src/app/shared/translate/translate.service';

@Component({
    selector: 'app-chosen',
    templateUrl: './chosen.component.html',
    styleUrls: ['./chosen.component.scss']
})
export class ChosenComponent implements AfterViewInit, OnInit {
    info: any;
    heroes: any;
    groupedHeroes: any;
    translate: any;
    constructor(private toolbarService: UiToolbarService,
                private titleService: Title,
                private translateService: TranslateService) {
        this.info = {};
        this.heroes = [{
            name: 'The Flash'
        }, {
            name: 'Batman'
        }, {
            name: 'Superman'
        }];
        this.groupedHeroes = [{
            name: 'DC',
            heroes: [{
                name: 'Flash'
            }, {
                name: 'Arrow'
            }, {
                name: 'Batman'
            }]
        }, {
           name: 'Marvel',
           heroes: [{
               name: 'Iron Man'
           }, {
               name: 'Spider Man'
           }, {
               name: 'Thor'
           }]
        }];
        this.translate = {
            labels: {}
        };
        this.translateService.change.subscribe(async () => {
            this.translate = await this.translateService.getLanguageData('chosen');
        });
    }

    async ngOnInit() {
        this.translate = await this.translateService.getLanguageData('chosen');
    }

    ngAfterViewInit() {
        this.titleService.setTitle('Chosen');
        this.toolbarService.set('Chosen');
    }

    getHtml() {
        return `<!-- Simple -->
<ui-input-container>
    <ui-chosen name="heroes"
                              uiInput
                              required
                              [(ngModel)]="info.hero">
        <ui-chosen-option *ngFor="let item of heroes"
                                                   [value]="item.name"
                                                   [label]="item.name"></ui-chosen-option>
    </ui-chosen>
    <label>Heroes</label>
</ui-input-container>

<!-- Grouped -->
<ui-input-container>
    <ui-chosen name="heroes"
                              uiInput
                              required
                              [(ngModel)]="info.groupHero"
                              [search]="true">
        <ui-chosen-group *ngFor="let group of groupedHeroes"
                                                   [label]="group.name">
            <ui-chosen-option *ngFor="let hero of group.heroes"
                                                            [value]="hero.name"
                                                            [label]="hero.name"></ui-chosen-option>
        </ui-chosen-group>
    </ui-chosen>
    <label>Heroes</label>
</ui-input-container>
`;
    }

    getTypescript() {
        return `import { Component } from '@angular/core';

@Component({
  selector: 'demo-chosen',
  templateUrl: 'demo-chosen.component.html',
  styleUrls: ['demo-chosen.component.scss'],
})
export class DemoChosenComponent {
  search: boolean;
}`;
    }
}
