import { Component, AfterViewInit, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { UiToolbarService } from 'ng-smn-ui';
import { TranslateService } from '@shared/translate/translate.service';

@Component({
    selector: 'app-fab',
    templateUrl: './fab.component.html',
    styleUrls: ['./fab.component.scss']
})
export class FabComponent implements AfterViewInit, OnInit {
    translate: any;
    constructor(private toolbarService: UiToolbarService,
                private titleService: Title,
                private translateService: TranslateService) {
        this.translate = {
            labels: {}
        };
        this.translateService.change.subscribe(async () => {
            this.translate = await this.translateService.getLanguageData('fab');
        });
    }

    async ngOnInit() {
        this.translate = await this.translateService.getLanguageData('fab');
    }

    ngAfterViewInit() {
        this.titleService.setTitle('Floating Action Button');
        this.toolbarService.set('FAB');
    }

    getHtml() {
        return ` <!-- Normal -->
<button class="ui-button primary fab" uiRipple>
    <i class="material-icons">add</i>
</button>

<!-- Mini -->
<button class="ui-button error fab mini" uiRipple>
    <i class="material-icons">close</i>
</button>

<!-- With ui-fab-container -->
<div class="ui-fab-container">
    <button class="ui-button accent fab mini" uiRipple>
        <i class="material-icons">check</i>
    </button>
    <button class="ui-button primary fab" uiRipple>
        <i class="material-icons">add</i>
    </button>
</div>
`;
    }
}
