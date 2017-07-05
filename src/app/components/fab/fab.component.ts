import {Component, AfterViewInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

import {UiToolbarService} from 'ng-smn-ui';

@Component({
    selector: 'app-fab',
    templateUrl: './fab.component.html',
    styleUrls: ['../../home/home.component.scss', './fab.component.scss']
})
export class FabComponent implements AfterViewInit {
    codes: any[];

    constructor(private toolbarService: UiToolbarService, private titleService: Title) {
        this.codes = [];
        this.codes[0] = `<button class="ui-button primary fab" uiRipple>
                    <i class="material-icons">add</i>
                </button>`;
        this.codes[1] = `<button class="ui-button accent fab mini" uiRipple>
                    <i class="material-icons">check</i>
                </button>`;
        this.codes[2] = `<div class="ui-fab-container">
                    <button class="ui-button accent fab mini" uiRipple>
                        <i class="material-icons">check</i>
                    </button>
                    <button class="ui-button primary fab" uiRipple>
                        <i class="material-icons">add</i>
                    </button>
                </div>`;
        this.codes[3] = `<button class="ui-button success fab" uiRipple>
                    <ui-progress-radial class="indeterminate"></ui-progress-radial>
                    <i class="material-icons">check</i>
                </button>`;
    }

    ngAfterViewInit() {
        this.titleService.setTitle('Floating Action Button');
        this.toolbarService.set('FAB');
    }
}
