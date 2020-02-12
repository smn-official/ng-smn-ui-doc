import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { UiToolbarService } from 'ng-smn-ui';
import { TranslateService } from 'src/app/shared/translate/translate.service';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterViewInit {
    scrollable: boolean;
    fixed: boolean;
    fillBackground: boolean;
    accent: boolean;
    themeInkBar: boolean;
    icon: boolean;
    topIcon: boolean;
    translate: any;

    constructor(private titleService: Title,
                private toolbarService: UiToolbarService,
                private translateService: TranslateService) {
        this.translate = {
            labels: {},
            tab: {},
        };
        this.translateService.change.subscribe(async () => {
            this.translate = await this.translateService.getLanguageData('tabs');
        });
    }

    async ngOnInit() {
        this.translate = await this.translateService.getLanguageData('tabs');
    }

    ngAfterViewInit() {
        this.titleService.setTitle('Tabs');
        this.toolbarService.set('Tabs');
    }

    getHtml() {
        return `<ui-tab-group [accent]="accent"
      [fillBackground]="fillBackground"
      [themeInkBar]="themeInkBar"
      [ngClass]="{scrollable: scrollable, fixed: fixed}"
      [topIcon]="topIcon">
  <ui-tab label="Oliver Queen" [icon]="icon ? 'arrow_right_alt' : false">Arrow</ui-tab>
  <ui-tab label="Barry Allen" [icon]="icon ? 'directions_run' : false">Flash</ui-tab>
  <ui-tab label="Bruce Wayne" [icon]="icon ? 'directions_car' : false">Batman</ui-tab>
</ui-tab-group>`;
    }

    getTypescript() {
        return `import { Component } from '@angular/core';

@Component({
  selector: 'demo-tabs',
  templateUrl: 'demo-tabs.component.html',
  styleUrls: ['demo-tabs.component.scss'],
})
export class DemoTabsComponent {
  scrollable: boolean;
  fixed: boolean;
  fillBackground: boolean;
  accent: boolean;
  themeInkBar: boolean;
  icon: boolean;
  topIcon: boolean;
}`;
    }
}
