import {Component, AfterViewInit, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

import {UiToolbarService} from 'ng-smn-ui';

import {RegionService} from '../../core/region.service';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['../../home/home.component.scss', './button.component.scss']
})
export class ButtonComponent implements AfterViewInit, OnInit {
    codes: any[];
    region: any;

    constructor(private toolbarService: UiToolbarService, private titleService: Title, private regionService: RegionService) {
        this.regionService.change.subscribe(region => {
            this.region = region;
            this.ngOnInit();
        });
        this.codes = [];
    }

    ngOnInit() {
        this.region = this.regionService.get();
        this.codes[0] = `<button class="ui-button">${this.region.button.default}</button>`;
        this.codes[1] = `<button class="ui-button" uiRipple>${this.region.button.withRipple}</button>`;
        this.codes[2] = `<button class="ui-button raised" uiRipple>Raised</button>`;
        this.codes[3] = `<button class="ui-button flat" uiRipple>Flat</button>`;
        this.codes[9] = `<button class="ui-button icon" uiRipple>
        <i class="material-icons">delete</i>
    </button>`;
        this.codes[10] = `<button class="ui-button flat icon" uiRipple>
        <i class="material-icons">notifications</i>
        <span class="badge">1</span>
    </button>`;
        this.codes[4] = `<button class="ui-button full" uiRipple>Full</button>`;
        this.codes[5] = `<button class="ui-button primary" uiRipple>Primary</button>`;
        this.codes[6] = `<button class="ui-button accent" uiRipple>Accent</button>`;
        this.codes[7] = `<button class="ui-button warning" uiRipple>Warning</button>`;
        this.codes[8] = `<button class="ui-button error" uiRipple>Error</button>`;
        this.codes[11] = `<button class="ui-button success" uiRipple>Success</button>`;
    }

    ngAfterViewInit() {
        this.titleService.setTitle('Button');
        this.toolbarService.set('Button');
    }
}
