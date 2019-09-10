import {Component, AfterViewInit, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

import {UiToolbarService} from 'ng-smn-ui';

import {RegionService} from '../core/region.service';
import { TranslateService } from '../shared/translate/translate.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
    translate: any;

    constructor(private toolbarService: UiToolbarService,
                private titleService: Title,
                private translateService: TranslateService) {
        this.translate = {
          introduction: {},
          installation: {}
        };
        this.translateService.change.subscribe(async () => {
          this.translate = await this.translateService.getLanguageData('home');
      });

    }

    async ngOnInit() {
      this.translate = await this.translateService.getLanguageData('home');
    }

    ngAfterViewInit() {
        this.titleService.setTitle('SMN UI');
        this.toolbarService.set('SMN UI');
    }

    getStep2() {
        return `import { SMNUIModule } from 'ng-smn-ui';
...
  imports: [
    ...
    SMNUIModule
  ]
...
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
...`;
    }

    getStep3() {
        return `@import "~ng-smn-ui/lib/core/core";
@import "~ng-smn-ui/lib/core/theme";

$primary: (color: 'blue', hue: '500');
$accent: (color: 'green', hue: '50');

$theme: ui-theme($primary, $accent);
$theme-dark: ui-theme($primary, $accent, true);

@include ui-core();

@include ui-build-theme($theme);`;
    }

    getStep4() {
        return `<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
<link href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,400,400italic,500,500italic,700,700italic" rel="stylesheet"/>`;
    }
}
