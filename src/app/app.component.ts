import {Component, ViewEncapsulation, OnInit, AfterViewInit, ElementRef, ChangeDetectorRef} from '@angular/core';
import {Title} from '@angular/platform-browser';

import {UiCookie, UiToolbarService} from 'ng-smn-ui';

import { TranslateService } from './shared/translate/translate.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [UiToolbarService, TranslateService]
})
export class AppComponent implements OnInit {
    title: string;
    menuOpen: boolean;
    language: string;
    translate: any;

    constructor(private toolbarService: UiToolbarService,
                public element: ElementRef,
                private titleService: Title,
                private translateService: TranslateService) {
        this.translate = {};

        this.toolbarService.change.subscribe(title => this.title = title);

        this.translateService.change.subscribe(async language => {
            this.setBodyLanguage(this.language, language);
            this.language = language;
            this.translate = await this.translateService.getLanguageData('core');
        });
    }

    ngOnInit() {
        this.titleService.setTitle('SMN UI');
        this.toolbarService.set('SMN UI');

        this.translateService.init();

        this.menuOpen = UiCookie.get('NavDrawerPersistent') === 'true';

        this.toolbarService.registerMainToolbar(document.getElementById('app-header'));
    }

    changeRegion(language) {
        this.translateService.setLanguage(language);
    }

    setBodyLanguage(currentLanguage, newLanguage) {
        if (currentLanguage) {
            document.body.classList.remove(currentLanguage.toLowerCase());
        }
        document.body.classList.add(newLanguage.toLowerCase());
    }
}
