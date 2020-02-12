import { Component, AfterViewInit, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { UiToolbarService } from 'ng-smn-ui';
import { TranslateService } from 'src/app/shared/translate/translate.service';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements AfterViewInit, OnInit {
    translate: any;
    constructor(private toolbarService: UiToolbarService,
                private titleService: Title,
                private translateService: TranslateService) {
        this.translate = {
            labels: {}
        };
        this.translateService.change.subscribe(async () => {
            this.translate = await this.translateService.getLanguageData('buttons');
        });
    }

    async ngOnInit() {
        this.translate = await this.translateService.getLanguageData('buttons');
    }

    ngAfterViewInit() {
        this.titleService.setTitle('Buttons');
        this.toolbarService.set('Buttons');
    }

    getHtml() {
        return `<!-- Normal -->
<div class="ui-button-container">
    <button class="ui-button" uiRipple>Default</button>
    <button class="ui-button primary" uiRipple>Primary</button>
    <button class="ui-button accent" uiRipple>Accent</button>
    <button class="ui-button success" uiRipple>Success</button>
    <button class="ui-button warning" uiRipple>Warning</button>
    <button class="ui-button error" uiRipple>Error</button>
    <button class="ui-button" uiRipple disabled>Disabled</button>
</div>

<!-- Raised -->
<div class="ui-button-container">
    <button class="ui-button raised" uiRipple>Raised</button>
    <button class="ui-button raised primary" uiRipple>Primary</button>
    <button class="ui-button raised accent" uiRipple>Accent</button>
    <button class="ui-button raised success" uiRipple>Success</button>
    <button class="ui-button raised warning" uiRipple>Warning</button>
    <button class="ui-button raised error" uiRipple>Error</button>
    <button class="ui-button raised" uiRipple disabled>Disabled</button>
</div>

<!-- Flat -->
<div class="ui-button-container">
    <button class="ui-button flat" uiRipple>Flat</button>
    <button class="ui-button flat primary" uiRipple>Primary</button>
    <button class="ui-button flat accent" uiRipple>Accent</button>
    <button class="ui-button flat success" uiRipple>Success</button>
    <button class="ui-button flat warning" uiRipple>Warning</button>
    <button class="ui-button flat error" uiRipple>Error</button>
    <button class="ui-button flat" uiRipple disabled>Disabled</button>
</div>

<!-- Full -->
<div class="ui-button-container">
    <button class="ui-button full primary" uiRipple>Full</button>
</div>

<!-- Icon -->
<div class="ui-button-container">
    <button class="ui-button error icon" uiRipple>
        <i class="material-icons">favorite</i>
    </button>
    <button class="ui-button accent raised icon" uiRipple>
        <i class="material-icons">stars</i>
    </button>
    <button class="ui-button primary flat icon" uiRipple>
        <i class="material-icons">code</i>
    </button>
    <button class="ui-button primary flat icon" uiRipple>
        <i class="material-icons">notifications</i>
        <span class="badge">1</span>
    </button>
    <button class="ui-button flat icon" uiRipple disabled>
        <i class="material-icons">delete</i>
    </button>
</div>
`;
    }
}
